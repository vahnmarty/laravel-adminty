/*!
* numeral.js language configuration
* language : German (de) – generally useful in Germany, Austria, Luxembourg, Belgium
* author : Marco Krage : https://github.com/sinky
*/(function(){var language={delimiters:{thousands:' ',decimal:','},abbreviations:{thousand:'k',million:'m',billion:'b',trillion:'t'},ordinal:function(number){return '.';},currency:{symbol:'€'}};if(typeof module!=='undefined'&&module.exports){module.exports=language;}
if(typeof window!=='undefined'&&this.numeral&&this.numeral.language){this.numeral.language('de',language);}}());