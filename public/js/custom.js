(function( $ ){
   $.fn.preload_on = function() {
      var el  = $(this);
      el.css('position', 'relative !important');
      el.append('<div class="preloader3 loader-block wrapper-loader">'+
                        '<div class="circ1 loader-info"></div>'+
                        '<div class="circ2 loader-info"></div>'+
                        '<div class="circ3 loader-info"></div>'+
                        '<div class="circ4 loader-info"></div>'+
                    '</div>');
      return this;
   }; 
})( jQuery );

(function( $ ){
   $.fn.preload_off = function() {
      var el  = $(this);
      el.find('.loader-block').remove();
      return this;
   }; 
})( jQuery );