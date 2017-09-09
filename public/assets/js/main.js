'use strict';

$(function() {

  var body = $("body");

  function hasDataAttr(elem, attr) {
    if (elem.attr(attr)) {
      return true;
    }

    return false;
  }


  $(document).on("click", ".topbar-toggler", function() {
      body.toggleClass("topbar-reveal"), $(this).closest(".topbar").prepend('<div class="topbar-backdrop"></div>')
  }), $(document).on("click", ".topbar-backdrop", function() {
      body.toggleClass("topbar-reveal"), $(this).remove()
  }), $(document).on("click", ".topbar-reveal .topbar-nav .nav-item > .nav-link", function() {
      var b = $(this),
          c = b.next(".nav-submenu"),
          d = b.closest(".nav-submenu");
      b.closest(".topbar-nav").find(".nav-submenu").not(c).not(d).slideUp(), body.slideToggle()
  }), $(document).on("click", ".topbar-reveal .topbar-nav .nav-link", function() {
      hasDataAttr($(this), 'scrollto') && (body.removeClass("topbar-reveal"), $(".topbar-backdrop").remove())
  })


  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
});
