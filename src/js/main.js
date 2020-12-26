'use strict';


jQuery(function() {
    jQuery('.carousel-4-1').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              }
            },
            {
                breakpoint: 960,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 3,
                }
            }
        ]
    });

    jQuery('.carousel-2-2').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 2,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              }
            },
            {
                breakpoint: 960,
                settings: {
                  slidesToShow: 2,
                }
            }
        ]
    });

    jQuery('.slider').slick({
      slidesToShow: 1,
      arrows: true,
      dots: true,
    })

    $('.filterLink').on('click', (e) => {
      e.preventDefault();
      $('body').addClass('hidden');
      $('.catalog__aside').addClass('active');
    })
    
    $('.closeAside').on('click', (e) => {
      e.preventDefault();
      console.log('test');
      $('body').removeClass('hidden');
      $('.catalog__aside').removeClass('active');
    })
    
    $('.menu .has-sub a').on('click', function(e) {
      e.preventDefault();
      $(this).parent().find('.submenu').slideToggle();
    })
    
    $(".product-card-images-main img").imagezoomsl({
      magnifiersize: [500, 500],
      zoomrange: [2, 4],
      cursorshadeborder: "1px solid #a6a6a6",
      magnifiereffectanimate: "fadeIn",
      magnifierpos: "right"
    });
    
    $('.product-card-images-main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      infinite: false,
      asNavFor: '.product-card-images-nav',
    });
    
    $('.product-card-images-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.product-card-images-main',
      dots: false,
      arrows: true,
      infinite: false,
      focusOnSelect: true,
      vertical: true,
    });
    
    $('.product-specifications-tabs').on('click', 'div', function () {
      let tab = $(this).data('tab');
    
      $('.product-specifications-tabs div').removeClass('selected');
      $(this).addClass('selected');
    
      $('.product-specifications-block').removeClass('selected');
      $('.product-specifications-block[data-block="' + tab + '"]').addClass('selected');
    
    });
    
    $('[data-remodal-id="fast-order"] form').on('submit', function (e) {
      e.preventDefault();
    
      $('[data-remodal-id="fast-order"]').remodal().close();
    
      $('[data-remodal-id="success-order"]').remodal().open();
    
      return false;
    });
    
    $('.section-cart .product-cart-counter').on('click', 'a', function (e) {
      e.preventDefault();
      let counter = $(this).siblings('input'),
          quantity = parseInt(counter.val()),
          price = parseInt($(this).parents('.values').find('.price').attr('data-price')),
          sum = $(this).parents('.values').find('.sum span');
    
      if ($(this).hasClass('m')) {
          if (quantity <= 1) {
              return false;
          }
    
          counter.val(--quantity);
      } else {
          counter.val(++quantity);
      }
    
      let sumString = (price * quantity).toString(),
          sumAsNumber = sumString.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
    
      sum.html(sumAsNumber);
    
      let cartCounter = 0,
          cartSum = 0;
    
      $('.cart-list-item, .ordering-list-item').each(function() {
          let count = parseInt($( this ).find('input').val()),
              price = parseInt($( this ).find('.values .price').data('price'));
          cartCounter+= count;
          cartSum+= count * price;
      });
    
      $('.cart-total .count').html(cartCounter);
    
      $('.cart-total .price > .value').html((cartSum.toString()).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '));
    
      return false;
    });
})



