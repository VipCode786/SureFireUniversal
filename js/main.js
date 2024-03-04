(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    // const $dropdown = $(".dropdown");
    // const $dropdownToggle = $(".dropdown-toggle");
    // const $dropdownMenu = $(".dropdown-menu");
    // const showClass = "show";
    
    // $(window).on("load resize", function() {
    //     if (this.matchMedia("(min-width: 992px)").matches) {
    //         $dropdown.hover(
    //         function() {
    //             const $this = $(this);
    //             $this.addClass(showClass);
    //             $this.find($dropdownToggle).attr("aria-expanded", "true");
    //             $this.find($dropdownMenu).addClass(showClass);
    //         },
    //         function() {
    //             const $this = $(this);
    //             $this.removeClass(showClass);
    //             $this.find($dropdownToggle).attr("aria-expanded", "false");
    //             $this.find($dropdownMenu).removeClass(showClass);
    //         }
    //         );
    //     } else {
    //         $dropdown.off("mouseenter mouseleave");
    //     }
    // });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'], // Custom navigation icons

        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


{/* <script> */}
        window.onload = function() {
          const headings = document.querySelectorAll('.one h1');
    
          headings.forEach(heading => {
            const computedWidth = window.getComputedStyle(heading).width;
            const parsedWidth = parseInt(computedWidth);
            const afterElement = heading.nextElementSibling;
    
            afterElement.style.width = parsedWidth + 'px';
            afterElement.style.marginLeft = '-' + (parsedWidth / 2) + 'px';
          });
        };
    //   </script>

    // $('.dropdown-submenu > a').on("click", function(e) {
    //     var submenu = $(this);
    //     $('.dropdown-submenu .dropdown-menu').removeClass('show');
    //     submenu.next('.dropdown-menu').addClass('show');
    //     e.stopPropagation();
    // });
    
    // $('.dropdown').on("hidden.bs.dropdown", function() {
    //     // hide any open menus when parent closes
    //     $('.dropdown-menu.show').removeClass('show');
    // });
    