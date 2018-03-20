$(document).ready(function() {

    var $productItem = $('.product-list__item');

    $productItem.each(function() {

        $(this).on('click', function(e) {
            var $this = $(this);

            if (!$(e.target).closest('.product-slogan').length && !$this.hasClass('_disabled')) {
                setCardCondition($this);
            }
        })

        $(this).find('.product-slogan .link').on('click', function(e) {
            var $this = $(this).closest('.product-list__item');

            e.preventDefault();
            setCardCondition($this);
        })

        $(this).mouseleave( function(e){
            if (!$(e.target).closest('.product-slogan').length) {
                if ($(this).hasClass('_active') && !$(this).hasClass('_selected')) {
                    $(this).addClass('_selected');
                }
            }
        })
    })

    function setCardCondition(e) {
        e.toggleClass('_active');

        if (!e.hasClass('_active')) {
            e.removeClass('_selected');
        }
    }

});
