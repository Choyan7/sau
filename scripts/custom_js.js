
/*
 (function($) {
 $(document).ready(function() {
 $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
 event.preventDefault();
 event.stopPropagation();
 $(this).parent().siblings().removeClass('open');
 $(this).parent().toggleClass('open');
 });
 });
 })(jQuery);
 
 
 
 $(document).ready(function() {
 $('[data-toggle=offcanvas]').click(function() {
 $('.row-offcanvas').toggleClass('active');
 });
 });
 */


/*
 * Disables all 'test' links, that point to the href '#', by Ross Shannon
 */

/*
 function disableTestLinks() {
 var pageLinks = document.getElementsByTagName('a');
 for (var i = 0; i < pageLinks.length; i++) {
 if (pageLinks[i].href.match(/[^#]#$/)) {
 addEvent(pageLinks[i], 'click', knackerEvent, false);
 }
 }
 }
 */

$(document).ready(function() {

    //Cufon----------------------------->
    Cufon.replace('h1.cufon-active, h2.cufon-active, h3.cufon-active, h4.cufon-active, h5.cufon-active, .dropcap', {
        fontFamily: 'PT Sans'
    });

    Cufon.replace('footer h4, h3.trigger', {
        fontFamily: 'PT Sans',
        textShadow: 'rgba(0, 0, 0, .6) 0px 1px 0px;'
    });

    Cufon.replace(' ', {
        fontFamily: 'PT Sans',
        textShadow: '#fff 0px 1px 0px;'
    });
});








function handleError() {
    return true;
}
window.onerror = handleError;