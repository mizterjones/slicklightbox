(($) => {
    $(() => {
        // Slick slider lightbox wrapper
        $('#quick-tour').slickLightbox({
            closeOnBackdropClick: false,
            itemSelector: 'ul li',
            slick: {
                appendArrows: '.slick-list',
                dots: true,
                fade: true,
                speed: 500,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true
            }
        });
        // Open the quicktour
        $('#open-quick-tour').click((e) => {
            e.preventDefault();
            $('#quick-tour ul li:first-child').trigger('click');
            let slider = $('#quick-tour')[0].slickLightbox.slick,
                items = $('#quick-tour-guide .columns');
            // Quick tour legend
            slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
                if (slider[0].clientWidth <= 768) {
                    $('#quick-tour-guide').hide();
                    return false;
                }
                $('#quick-tour-guide').show();
                $(items[currentSlide - 1]).find('.img-wrapper').removeClass('active');
                $(items[nextSlide - 1]).find('.img-wrapper').addClass('active');
            });
            // Bind click event to legend
            $('#quick-tour-guide li').bind('click', function(e) {
                var slideIdClass = e.currentTarget.classList[4],
                    slideId = slideIdClass.substr(slideIdClass.length - 1);
                $('#quick-tour')[0].slickLightbox.slick.slick('goTo', parseInt(slideId));
            });
            // Hides or shows arrows after slide change
            slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
                if (currentSlide == 0) {
                   $('.slick-prev').hide();
                   $('.slick-next').fadeIn('fast');
                } else if (currentSlide == 1) {
                    $('.slick-next').fadeIn('fast');
                    $('.slick-prev').removeClass('active').hide()
                } else if (currentSlide == 6) {
                    $('.slick-next').hide();
                    $('.slick-prev').addClass('active').fadeIn('fast');
                } else {
                    $('.slick-next').fadeIn('fast');
                    $('.slick-prev').addClass('active').fadeIn('fast');
                }
            });
        });
   });
})(jQuery);