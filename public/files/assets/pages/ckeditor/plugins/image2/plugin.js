'use strict';(function(){var template='<img alt="" src="" />',templateBlock=new CKEDITOR.template('<figure class="{captionedClass}">'+
template+
'<figcaption>{captionPlaceholder}</figcaption>'+
'</figure>'),alignmentsObj={left:0,center:1,right:2},regexPercent=/^\s*(\d+\%)\s*$/i;CKEDITOR.plugins.add('image2',{lang:'af,ar,bg,bn,bs,ca,cs,cy,da,de,de-ch,el,en,en-au,en-ca,en-gb,eo,es,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,oc,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn',requires:'widget,dialog',icons:'image',hidpi:true,onLoad:function(){CKEDITOR.addCss('.cke_image_nocaption{'+
'line-height:0'+
'}'+
'.cke_editable.cke_image_sw, .cke_editable.cke_image_sw *{cursor:sw-resize !important}'+
'.cke_editable.cke_image_se, .cke_editable.cke_image_se *{cursor:se-resize !important}'+
'.cke_image_resizer{'+
'display:none;'+
'position:absolute;'+
'width:10px;'+
'height:10px;'+
'bottom:-5px;'+
'right:-5px;'+
'background:#000;'+
'outline:1px solid #fff;'+
'line-height:0;'+
'cursor:se-resize;'+
'}'+
'.cke_image_resizer_wrapper{'+
'position:relative;'+
'display:inline-block;'+
'line-height:0;'+
'}'+
'.cke_image_resizer.cke_image_resizer_left{'+
'right:auto;'+
'left:-5px;'+
'cursor:sw-resize;'+
'}'+
'.cke_widget_wrapper:hover .cke_image_resizer,'+
'.cke_image_resizer.cke_image_resizing{'+
'display:block'+
'}'+
'.cke_widget_wrapper>a{'+
'display:inline-block'+
'}');},init:function(editor){var config=editor.config,lang=editor.lang.image2,image=widgetDef(editor);config.filebrowserImage2BrowseUrl=config.filebrowserImageBrowseUrl;config.filebrowserImage2UploadUrl=config.filebrowserImageUploadUrl;image.pathName=lang.pathName;image.editables.caption.pathName=lang.pathNameCaption;editor.widgets.add('image',image);editor.ui.addButton&&editor.ui.addButton('Image',{label:editor.lang.common.image,command:'image',toolbar:'insert,10'});if(editor.contextMenu){editor.addMenuGroup('image',10);editor.addMenuItem('image',{label:lang.menu,command:'image',group:'image'});}
CKEDITOR.dialog.add('image2',this.path+'dialogs/image2.js');},afterInit:function(editor){var align={left:1,right:1,center:1,block:1},integrate=alignCommandIntegrator(editor);for(var value in align)
integrate(value);linkCommandIntegrator(editor);}});function widgetDef(editor){var alignClasses=editor.config.image2_alignClasses,captionedClass=editor.config.image2_captionedClass;function deflate(){if(this.deflated)
return;if(editor.widgets.focused==this.widget)
this.focused=true;editor.widgets.destroy(this.widget);this.deflated=true;}
function inflate(){var editable=editor.editable(),doc=editor.document;if(this.deflated){this.widget=editor.widgets.initOn(this.element,'image',this.widget.data);if(this.widget.inline&&!(new CKEDITOR.dom.elementPath(this.widget.wrapper,editable).block)){var block=doc.createElement(editor.activeEnterMode==CKEDITOR.ENTER_P?'p':'div');block.replace(this.widget.wrapper);this.widget.wrapper.move(block);}
if(this.focused){this.widget.focus();delete this.focused;}
delete this.deflated;}
else{setWrapperAlign(this.widget,alignClasses);}}
return{allowedContent:getWidgetAllowedContent(editor),requiredContent:'img[src,alt]',features:getWidgetFeatures(editor),styleableElements:'img figure',contentTransformations:[['img[width]: sizeToAttribute']],editables:{caption:{selector:'figcaption',allowedContent:'br em strong sub sup u s; a[!href,target]'}},parts:{image:'img',caption:'figcaption'},dialog:'image2',template:template,data:function(){var features=this.features;if(this.data.hasCaption&&!editor.filter.checkFeature(features.caption))
this.data.hasCaption=false;if(this.data.align!='none'&&!editor.filter.checkFeature(features.align))
this.data.align='none';this.shiftState({widget:this,element:this.element,oldData:this.oldData,newData:this.data,deflate:deflate,inflate:inflate});if(!this.data.link){if(this.parts.link)
delete this.parts.link;}else{if(!this.parts.link)
this.parts.link=this.parts.image.getParent();}
this.parts.image.setAttributes({src:this.data.src,'data-cke-saved-src':this.data.src,alt:this.data.alt});if(this.oldData&&!this.oldData.hasCaption&&this.data.hasCaption){for(var c in this.data.classes)
this.parts.image.removeClass(c);}
if(editor.filter.checkFeature(features.dimension))
setDimensions(this);this.oldData=CKEDITOR.tools.extend({},this.data);},init:function(){var helpers=CKEDITOR.plugins.image2,image=this.parts.image,data={hasCaption:!!this.parts.caption,src:image.getAttribute('src'),alt:image.getAttribute('alt')||'',width:image.getAttribute('width')||'',height:image.getAttribute('height')||'',lock:this.ready?helpers.checkHasNaturalRatio(image):true};var link=image.getAscendant('a');if(link&&this.wrapper.contains(link))
this.parts.link=link;if(!data.align){var alignElement=data.hasCaption?this.element:image;if(alignClasses){if(alignElement.hasClass(alignClasses[0])){data.align='left';}else if(alignElement.hasClass(alignClasses[2])){data.align='right';}
if(data.align){alignElement.removeClass(alignClasses[alignmentsObj[data.align]]);}else{data.align='none';}}
else{data.align=alignElement.getStyle('float')||'none';alignElement.removeStyle('float');}}
if(editor.plugins.link&&this.parts.link){data.link=helpers.getLinkAttributesParser()(editor,this.parts.link);var advanced=data.link.advanced;if(advanced&&advanced.advCSSClasses){advanced.advCSSClasses=CKEDITOR.tools.trim(advanced.advCSSClasses.replace(/cke_\S+/,''));}}
this.wrapper[(data.hasCaption?'remove':'add')+'Class']('cke_image_nocaption');this.setData(data);if(editor.filter.checkFeature(this.features.dimension)&&editor.config.image2_disableResizer!==true)
setupResizer(this);this.shiftState=helpers.stateShifter(this.editor);this.on('contextMenu',function(evt){evt.data.image=CKEDITOR.TRISTATE_OFF;if(this.parts.link||this.wrapper.getAscendant('a'))
evt.data.link=evt.data.unlink=CKEDITOR.TRISTATE_OFF;});this.on('dialog',function(evt){evt.data.widget=this;},this);},addClass:function(className){getStyleableElement(this).addClass(className);},hasClass:function(className){return getStyleableElement(this).hasClass(className);},removeClass:function(className){getStyleableElement(this).removeClass(className);},getClasses:(function(){var classRegex=new RegExp('^('+[].concat(captionedClass,alignClasses).join('|')+')$');return function(){var classes=this.repository.parseElementClasses(getStyleableElement(this).getAttribute('class'));for(var c in classes){if(classRegex.test(c))
delete classes[c];}
return classes;};})(),upcast:upcastWidgetElement(editor),downcast:downcastWidgetElement(editor),getLabel:function(){var label=(this.data.alt||'')+' '+this.pathName;return this.editor.lang.widget.label.replace(/%1/,label);}};}
CKEDITOR.plugins.image2={stateShifter:function(editor){var doc=editor.document,alignClasses=editor.config.image2_alignClasses,captionedClass=editor.config.image2_captionedClass,editable=editor.editable(),shiftables=['hasCaption','align','link'];var stateActions={align:function(shift,oldValue,newValue){var el=shift.element;if(shift.changed.align){if(!shift.newData.hasCaption){if(newValue=='center'){shift.deflate();shift.element=wrapInCentering(editor,el);}
if(!shift.changed.hasCaption&&oldValue=='center'&&newValue!='center'){shift.deflate();shift.element=unwrapFromCentering(el);}}}
else if(newValue=='center'&&shift.changed.hasCaption&&!shift.newData.hasCaption){shift.deflate();shift.element=wrapInCentering(editor,el);}
if(!alignClasses&&el.is('figure')){if(newValue=='center')
el.setStyle('display','inline-block');else
el.removeStyle('display');}},hasCaption:function(shift,oldValue,newValue){if(!shift.changed.hasCaption)
return;var imageOrLink;if(shift.element.is({img:1,a:1}))
imageOrLink=shift.element;else
imageOrLink=shift.element.findOne('a,img');shift.deflate();if(newValue){var figure=CKEDITOR.dom.element.createFromHtml(templateBlock.output({captionedClass:captionedClass,captionPlaceholder:editor.lang.image2.captionPlaceholder}),doc);replaceSafely(figure,shift.element);imageOrLink.replace(figure.findOne('img'));shift.element=figure;}
else{imageOrLink.replace(shift.element);shift.element=imageOrLink;}},link:function(shift,oldValue,newValue){if(shift.changed.link){var img=shift.element.is('img')?shift.element:shift.element.findOne('img'),link=shift.element.is('a')?shift.element:shift.element.findOne('a'),needsDeflate=(shift.element.is('a')&&!newValue)||(shift.element.is('img')&&newValue),newEl;if(needsDeflate)
shift.deflate();if(!newValue)
newEl=unwrapFromLink(link);else{if(!oldValue)
newEl=wrapInLink(img,shift.newData.link);var attributes=CKEDITOR.plugins.image2.getLinkAttributesGetter()(editor,newValue);if(!CKEDITOR.tools.isEmpty(attributes.set))
(newEl||link).setAttributes(attributes.set);if(attributes.removed.length)
(newEl||link).removeAttributes(attributes.removed);}
if(needsDeflate)
shift.element=newEl;}}};function wrapInCentering(editor,element){var attribsAndStyles={};if(alignClasses)
attribsAndStyles.attributes={'class':alignClasses[1]};else
attribsAndStyles.styles={'text-align':'center'};var center=doc.createElement(editor.activeEnterMode==CKEDITOR.ENTER_P?'p':'div',attribsAndStyles);replaceSafely(center,element);element.move(center);return center;}
function unwrapFromCentering(element){var imageOrLink=element.findOne('a,img');imageOrLink.replace(element);return imageOrLink;}
function wrapInLink(img,linkData){var link=doc.createElement('a',{attributes:{href:linkData.url}});link.replace(img);img.move(link);return link;}
function unwrapFromLink(link){var img=link.findOne('img');img.replace(link);return img;}
function replaceSafely(replacing,replaced){if(replaced.getParent()){var range=editor.createRange();range.moveToPosition(replaced,CKEDITOR.POSITION_BEFORE_START);replaced.remove();editable.insertElementIntoRange(replacing,range);}
else{replacing.replace(replaced);}}
return function(shift){var name,i;shift.changed={};for(i=0;i<shiftables.length;i++){name=shiftables[i];shift.changed[name]=shift.oldData?shift.oldData[name]!==shift.newData[name]:false;}
for(i=0;i<shiftables.length;i++){name=shiftables[i];stateActions[name](shift,shift.oldData?shift.oldData[name]:null,shift.newData[name]);}
shift.inflate();};},checkHasNaturalRatio:function(image){var $=image.$,natural=this.getNatural(image);return Math.round($.clientWidth/natural.width*natural.height)==$.clientHeight||Math.round($.clientHeight/natural.height*natural.width)==$.clientWidth;},getNatural:function(image){var dimensions;if(image.$.naturalWidth){dimensions={width:image.$.naturalWidth,height:image.$.naturalHeight};}else{var img=new Image();img.src=image.getAttribute('src');dimensions={width:img.width,height:img.height};}
return dimensions;},getLinkAttributesGetter:function(){return CKEDITOR.plugins.link.getLinkAttributes;},getLinkAttributesParser:function(){return CKEDITOR.plugins.link.parseLinkAttributes;}};function setWrapperAlign(widget,alignClasses){var wrapper=widget.wrapper,align=widget.data.align,hasCaption=widget.data.hasCaption;if(alignClasses){for(var i=3;i--;)
wrapper.removeClass(alignClasses[i]);if(align=='center'){if(hasCaption){wrapper.addClass(alignClasses[1]);}}else if(align!='none'){wrapper.addClass(alignClasses[alignmentsObj[align]]);}}else{if(align=='center'){if(hasCaption)
wrapper.setStyle('text-align','center');else
wrapper.removeStyle('text-align');wrapper.removeStyle('float');}
else{if(align=='none')
wrapper.removeStyle('float');else
wrapper.setStyle('float',align);wrapper.removeStyle('text-align');}}}
function upcastWidgetElement(editor){var isCenterWrapper=centerWrapperChecker(editor),captionedClass=editor.config.image2_captionedClass;return function(el,data){var dimensions={width:1,height:1},name=el.name,image;if(el.attributes['data-cke-realelement'])
return;if(isCenterWrapper(el)){if(name=='div'){var figure=el.getFirst('figure');if(figure){el.replaceWith(figure);el=figure;}}
data.align='center';image=el.getFirst('img')||el.getFirst('a').getFirst('img');}
else if(name=='figure'&&el.hasClass(captionedClass)){image=el.getFirst('img')||el.getFirst('a').getFirst('img');}else if(isLinkedOrStandaloneImage(el)){image=el.name=='a'?el.children[0]:el;}
if(!image)
return;for(var d in dimensions){var dimension=image.attributes[d];if(dimension&&dimension.match(regexPercent))
delete image.attributes[d];}
return el;};}
function downcastWidgetElement(editor){var alignClasses=editor.config.image2_alignClasses;return function(el){var attrsHolder=el.name=='a'?el.getFirst():el,attrs=attrsHolder.attributes,align=this.data.align;if(!this.inline){var resizeWrapper=el.getFirst('span');if(resizeWrapper)
resizeWrapper.replaceWith(resizeWrapper.getFirst({img:1,a:1}));}
if(align&&align!='none'){var styles=CKEDITOR.tools.parseCssText(attrs.style||'');if(align=='center'&&el.name=='figure'){el=el.wrapWith(new CKEDITOR.htmlParser.element('div',alignClasses?{'class':alignClasses[1]}:{style:'text-align:center'}));}
else if(align in{left:1,right:1}){if(alignClasses)
attrsHolder.addClass(alignClasses[alignmentsObj[align]]);else
styles['float']=align;}
if(!alignClasses&&!CKEDITOR.tools.isEmpty(styles))
attrs.style=CKEDITOR.tools.writeCssText(styles);}
return el;};}
function centerWrapperChecker(editor){var captionedClass=editor.config.image2_captionedClass,alignClasses=editor.config.image2_alignClasses,validChildren={figure:1,a:1,img:1};return function(el){if(!(el.name in{div:1,p:1}))
return false;var children=el.children;if(children.length!==1)
return false;var child=children[0];if(!(child.name in validChildren))
return false;if(el.name=='p'){if(!isLinkedOrStandaloneImage(child))
return false;}
else{if(child.name=='figure'){if(!child.hasClass(captionedClass))
return false;}else{if(editor.enterMode==CKEDITOR.ENTER_P)
return false;if(!isLinkedOrStandaloneImage(child))
return false;}}
if(alignClasses?el.hasClass(alignClasses[1]):CKEDITOR.tools.parseCssText(el.attributes.style||'',true)['text-align']=='center')
return true;return false;};}
function isLinkedOrStandaloneImage(el){if(el.name=='img')
return true;else if(el.name=='a')
return el.children.length==1&&el.getFirst('img');return false;}
function setDimensions(widget){var data=widget.data,dimensions={width:data.width,height:data.height},image=widget.parts.image;for(var d in dimensions){if(dimensions[d])
image.setAttribute(d,dimensions[d]);else
image.removeAttribute(d);}}
function setupResizer(widget){var editor=widget.editor,editable=editor.editable(),doc=editor.document,resizer=widget.resizer=doc.createElement('span');resizer.addClass('cke_image_resizer');resizer.setAttribute('title',editor.lang.image2.resizer);resizer.append(new CKEDITOR.dom.text('\u200b',doc));if(!widget.inline){var imageOrLink=widget.parts.link||widget.parts.image,oldResizeWrapper=imageOrLink.getParent(),resizeWrapper=doc.createElement('span');resizeWrapper.addClass('cke_image_resizer_wrapper');resizeWrapper.append(imageOrLink);resizeWrapper.append(resizer);widget.element.append(resizeWrapper,true);if(oldResizeWrapper.is('span'))
oldResizeWrapper.remove();}else{widget.wrapper.append(resizer);}
resizer.on('mousedown',function(evt){var image=widget.parts.image,factor=widget.data.align=='right'?-1:1,startX=evt.data.$.screenX,startY=evt.data.$.screenY,startWidth=image.$.clientWidth,startHeight=image.$.clientHeight,ratio=startWidth/startHeight,listeners=[],cursorClass='cke_image_s'+(!~factor?'w':'e'),nativeEvt,newWidth,newHeight,updateData,moveDiffX,moveDiffY,moveRatio;editor.fire('saveSnapshot');attachToDocuments('mousemove',onMouseMove,listeners);attachToDocuments('mouseup',onMouseUp,listeners);editable.addClass(cursorClass);resizer.addClass('cke_image_resizing');function attachToDocuments(name,callback,collection){var globalDoc=CKEDITOR.document,listeners=[];if(!doc.equals(globalDoc))
listeners.push(globalDoc.on(name,callback));listeners.push(doc.on(name,callback));if(collection){for(var i=listeners.length;i--;)
collection.push(listeners.pop());}}
function adjustToX(){newWidth=startWidth+factor*moveDiffX;newHeight=Math.round(newWidth/ratio);}
function adjustToY(){newHeight=startHeight-moveDiffY;newWidth=Math.round(newHeight*ratio);}
function onMouseMove(evt){nativeEvt=evt.data.$;moveDiffX=nativeEvt.screenX-startX;moveDiffY=startY-nativeEvt.screenY;moveRatio=Math.abs(moveDiffX/moveDiffY);if(factor==1){if(moveDiffX<=0){if(moveDiffY<=0)
adjustToX();else{if(moveRatio>=ratio)
adjustToX();else
adjustToY();}}else{if(moveDiffY<=0){if(moveRatio>=ratio)
adjustToY();else
adjustToX();}
else{adjustToY();}}}
else{if(moveDiffX<=0){if(moveDiffY<=0){if(moveRatio>=ratio)
adjustToY();else
adjustToX();}
else{adjustToY();}}else{if(moveDiffY<=0)
adjustToX();else{if(moveRatio>=ratio){adjustToX();}else{adjustToY();}}}}
if(newWidth>=15&&newHeight>=15){image.setAttributes({width:newWidth,height:newHeight});updateData=true;}else{updateData=false;}}
function onMouseUp(){var l;while((l=listeners.pop()))
l.removeListener();editable.removeClass(cursorClass);resizer.removeClass('cke_image_resizing');if(updateData){widget.setData({width:newWidth,height:newHeight});editor.fire('saveSnapshot');}
updateData=false;}});widget.on('data',function(){resizer[widget.data.align=='right'?'addClass':'removeClass']('cke_image_resizer_left');});}
function alignCommandIntegrator(editor){var execCallbacks=[],enabled;return function(value){var command=editor.getCommand('justify'+value);if(!command)
return;execCallbacks.push(function(){command.refresh(editor,editor.elementPath());});if(value in{right:1,left:1,center:1}){command.on('exec',function(evt){var widget=getFocusedWidget(editor);if(widget){widget.setData('align',value);for(var i=execCallbacks.length;i--;)
execCallbacks[i]();evt.cancel();}});}
command.on('refresh',function(evt){var widget=getFocusedWidget(editor),allowed={right:1,left:1,center:1};if(!widget)
return;if(enabled===undefined)
enabled=editor.filter.checkFeature(editor.widgets.registered.image.features.align);if(!enabled)
this.setState(CKEDITOR.TRISTATE_DISABLED);else{this.setState((widget.data.align==value)?(CKEDITOR.TRISTATE_ON):((value in allowed)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED));}
evt.cancel();});};}
function linkCommandIntegrator(editor){if(!editor.plugins.link)
return;CKEDITOR.on('dialogDefinition',function(evt){var dialog=evt.data;if(dialog.name=='link'){var def=dialog.definition;var onShow=def.onShow,onOk=def.onOk;def.onShow=function(){var widget=getFocusedWidget(editor),displayTextField=this.getContentElement('info','linkDisplayText').getElement().getParent().getParent();if(widget&&(widget.inline?!widget.wrapper.getAscendant('a'):1)){this.setupContent(widget.data.link||{});displayTextField.hide();}else{displayTextField.show();onShow.apply(this,arguments);}};def.onOk=function(){var widget=getFocusedWidget(editor);if(widget&&(widget.inline?!widget.wrapper.getAscendant('a'):1)){var data={};this.commitContent(data);widget.setData('link',data);}else{onOk.apply(this,arguments);}};}});editor.getCommand('unlink').on('exec',function(evt){var widget=getFocusedWidget(editor);if(!widget||!widget.parts.link)
return;widget.setData('link',null);this.refresh(editor,editor.elementPath());evt.cancel();});editor.getCommand('unlink').on('refresh',function(evt){var widget=getFocusedWidget(editor);if(!widget)
return;this.setState(widget.data.link||widget.wrapper.getAscendant('a')?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED);evt.cancel();});}
function getFocusedWidget(editor){var widget=editor.widgets.focused;if(widget&&widget.name=='image')
return widget;return null;}
function getWidgetAllowedContent(editor){var alignClasses=editor.config.image2_alignClasses,rules={div:{match:centerWrapperChecker(editor)},p:{match:centerWrapperChecker(editor)},img:{attributes:'!src,alt,width,height'},figure:{classes:'!'+editor.config.image2_captionedClass},figcaption:true};if(alignClasses){rules.div.classes=alignClasses[1];rules.p.classes=rules.div.classes;rules.img.classes=alignClasses[0]+','+alignClasses[2];rules.figure.classes+=','+rules.img.classes;}else{rules.div.styles='text-align';rules.p.styles='text-align';rules.img.styles='float';rules.figure.styles='float,display';}
return rules;}
function getWidgetFeatures(editor){var alignClasses=editor.config.image2_alignClasses,features={dimension:{requiredContent:'img[width,height]'},align:{requiredContent:'img'+
(alignClasses?'('+alignClasses[0]+')':'{float}')},caption:{requiredContent:'figcaption'}};return features;}
function getStyleableElement(widget){return widget.data.hasCaption?widget.element:widget.parts.image;}})();CKEDITOR.config.image2_captionedClass='image';