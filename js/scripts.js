/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#919191" });
 });


/*Fancybox*/
$(document).ready(function(){

            var forms = $('.form-modal'),
            cb_input = forms.find('input[type=text], input[type=email], input[type=tel] , textarea'),
            cr_close = $.fancybox.close();

    $("#fancybox-overlay").fancybox({
        padding: [0, 0, 0, 0],
        margin: [120, 0, 0, 0],
        scrolling: 'visible',
        minWidth: 370,
        minHeight: 471,
        autoSize: false,
        autoHeight: true,
        autoWidth: true,
        maxWidth: 9999,
        maxHeight: 9999,
        fixed: false,
        autoCenter: true,
        closeBtn: true,
        afterClose: function () {
            cb_input.val('');
        }
    });

    $('.btr').click(function () {
        $.fancybox.close();
    });
	
   });
/*Fancybox end*/ 


$(document).ready(function(){
   $('#header a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 700);
      e.preventDefault();
   });
   return false;
});



$.fn.extend({
  
  // Define the threeBarToggle function by extending the jQuery object
  threeBarToggle: function(options){
    
    // Set the default options
    var defaults = {
     
      speed: 400,
      animate: true
    }
    var options = $.extend(defaults, options); 
    
    return this.each(function(){
      
      $(this).empty().css({'width': options.width, 'height': options.height, 'background': 'transparent'});
      $(this).addClass('tb-menu-toggle');
      $(this).prepend('<span></span><span></span><span></span>').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('tb-active-toggle');
        if (options.animate) { $(this).toggleClass('tb-animate-toggle'); }
        $('.tb-mobile-menu').slideToggle(options.speed);
      });
      $(this).children().css('background', options.color);
    });
  },
  
  // Define the accordionMenu() function that adds the sliding functionality
  accordionMenu: function(options){
    
    // Set the default options
    var defaults = {
      speed: 400
    }
    var options =  $.extend(defaults, options);

    return this.each(function(){
      
      $(this).addClass('tb-mobile-menu');
      var menuItems = $(this).children('li');
      menuItems.find('.sub-menu').parent().addClass('tb-parent');
      $('.tb-parent ul').hide();
      $('.tb-parent > a').on('click', function(event) {
        event.stopPropagation();
        event.preventDefault();
        $(this).siblings().slideToggle(options.speed);
      });
      
    });
  }
});

// Convert any element into a three bar toggle
// Optional arguments are 'speed' (number in ms, 'slow' or 'fast') and 'animation' (true or false) to disable the animation on the toggle
$('#menu-toggle').threeBarToggle({});

// Make any nested ul-based menu mobile
// Optional arguments are 'speed' and 'accordion' (true or false) to disable the behavior of closing other sub
$('#menu, #menu-2').accordionMenu();


$(document).ready(function() {
  $('#menu-toggle').on('click', function() {
    $(this).toggleClass('open');
  });
});



  (function ($) {
    //no js  removal
  var d = document.documentElement; d.className = d.className.replace(/no\-js/g,'');
  
    //only used to force refresh of tab, will try in full CSS next time
    var ie = document.all && !window.opera;
    $.fn.tabs = function () {
        this.each(function () {
            var tabs = $(this);
            var tabsContents = tabs.find('> .tabsBody');
            var tabsItems = tabsContents.find('> li');
            //event click
            tabsContents.on('click keyup', '> li > .tabHeader', function (e) {
                e.preventDefault();
                if(e.type=='keyup' && e.which!=13) return;
                var index = tabsItems.index($(this).parents('li:first'));
                changeTabs(index);
            });

            //change tabs
            function changeTabs(index) {
                tabsItems.removeClass('active').delay(ie ? 1 : 0).eq(index).addClass('active');
            }
        });
        return this;
    };
})(jQuery);

$(document).ready(function() {
    $('div.tabs').tabs();
});



