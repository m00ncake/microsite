(function ($, Drupal) {

    'use strict';
  
    function maxHeight(group) {
      let maxHeight = 0;
  
      group.each(function(){
        maxHeight = $(this).outerHeight() > maxHeight ? $(this).outerHeight() : maxHeight;
      });
  
      return maxHeight;
    }
  
    function matchHeight(groups, defaultMax) {
      $.each(groups, function(key, group) {
        const max = typeof defaultMax !== "undefined" ? defaultMax : maxHeight(group);
        group.each(function(){
          if($(this).outerHeight() !== max) {
            $(this).outerHeight(max);
          }
        });
      });
    }
  
    function setPricingOption(settings, index) {
      if (typeof settings.pricingSliderOptions !== 'undefined') {
          const option = settings.pricingSliderOptions[index];
          $('#pricingSliderPA').html(option.priceAnnually);
          $('#pricingSliderPM').html(option.priceMonthly);
          $('#pricingSliderF').html(option.features);
          $('#pricingSliderCTA').html(option.ctaTitle);
          $('#pricingSliderCTAA').html(option.ctaTitle);
          $('#pricingSliderCTA').attr('href', option.ctaUrl);
          $('#pricingSliderCTAA').attr('href',option.ctaUrlA);
          $('#pricingSliderRangeWrapper .tickmark').removeClass('selected');
          $('#pricingSliderRangeWrapper .tickmark[data-value="' + index + '"]').addClass('selected');
          if(option.ctaCustom !== null) {
            $('#pricingSliderCTACWrapper').html(option.ctaCustom);
            $('#pricingSliderCTACWrapper').removeClass('d-none');
            $('#pricingSliderCTAWrapper').addClass('d-none');
          }
          else {
            $('#pricingSliderCTACWrapper').addClass('d-none');
            $('#pricingSliderCTAWrapper').removeClass('d-none');
          }
      }
    }
  
    Drupal.behaviors.pricing = {
      attach: function (context, settings) {
        let currentBreakpoint = 'desktop';
  
        $('.pricing__button-toggle button', context).on('click', function () {
          const pricing = $(this).closest('.pricing');
          const pricingItems = pricing.find('.pricing-item');
          pricing.toggleClass('active');
          pricingItems.each(function () {
            let link = $(this).find('> a');
            if($(this).closest('.v2').length) {
              link = $(this).find('a.sign-up-link');
            }
            const url = link.data('toggleUrl');
            const target = link.data('toggleTarget');
            link.data('toggleUrl', link.attr('href'));
            link.data('toggleTarget', link.attr('target'));
            link.attr('href', url);
            link.attr('target', target);
          });
          $('[data-pricing-toggle]', context).each(function() {
            const $this = $(this);
            const html = $this.html();
            $this.html($this.data('pricingToggle'));
            $this.data('pricingToggle', html);
          });
        });
  
        $('.pricing-item__features', context).on('show.bs.collapse', function (e) {
          if(e.target === this && $(window).outerWidth() < 768) {
            $('.pricing-item__features', context).not($(this)).collapse('hide');
          }
        });
  
        $('.pricing-item__additional-features-container', context).on('shown.bs.collapse', function (e) {
          matchHeight(groups);
        });
  
        $('[data-toggle="popover"]', context).on('touchstart', function (e) {
          if($(window).outerWidth() < 1250) {
            const thisPopover = $(this);
            console.log($(e.target));
            if(e.target.classList.contains('icon-info')) {
              thisPopover.popover('show');
            }
            else if(e.target.nodeName === 'A') {
              thisPopover.popover('hide');
            }
            else {
              e.preventDefault();
            }
          }
        });
  
        $('[data-toggle="popover"]', context).on('shown.bs.popover', function () {
          if($(window).outerWidth() < 1250) {
            const thisPopover = $(this);
            setTimeout( function () {
              thisPopover.popover('hide');
            }, 4000);
          }
        });
  
        if($(window).outerWidth() >= 1250 ) {
          currentBreakpoint = 'mobile';
          $('.pricing-item__features', context).each(function () {
            $(this).collapse('show');
          });
        }
        else {
          $('.pricing-item__additional-features-container', context).each(function () {
            $(this).collapse('show');
          });
        }
  
        $(window).resize(function () {
          if($(window).outerWidth() >= 1250 ) {
            if(currentBreakpoint !== 'desktop') {
              currentBreakpoint = 'desktop';
              $('.pricing-item__features', context).each(function () {
                $(this).collapse('show');
              });
              $('.pricing-item__additional-features-container', context).each(function () {
                $(this).collapse('hide');
              });
            }
          }
          else {
            if(currentBreakpoint !== 'mobile') {
              currentBreakpoint = 'mobile';
              $('.pricing-item__features', context).each(function () {
                $(this).collapse('hide');
              });
              $('.pricing-item__additional-features-container', context).each(function () {
                $(this).collapse('show');
              });
            }
          }
        });
  
  
        const groups = {};
  
        $('[data-mh]', context).each(function() {
          const $this = $(this),
            groupId = $this.attr('data-mh');
  
          if (groupId in groups) {
            groups[groupId] = groups[groupId].add($this);
          } else {
            groups[groupId] = $this;
          }
        });
  
        matchHeight(groups);
  
        let breakpoint = 1250;
        if($('.pricing.v2', context).length) {
          breakpoint = 1250;
        }
        else if ($('.pricing', context).length) {
          breakpoint = 768;
        }
  
        $(window).on('resize orientationchange', function () {
          if($(window).outerWidth() >= breakpoint ) {
            matchHeight(groups);
          }
          else {
            matchHeight(groups, '');
          }
        });
  
        //Pricing Slider
        const pricingSliderRange = $('#pricingSliderRange', context);
        const pricingSliderSelect = $('#pricingSliderSelect', context);
  
        pricingSliderRange.on('input change', function () {
          setPricingOption(settings, $(this).val());
          pricingSliderSelect.val($(this).val());
        });
  
        pricingSliderSelect.on('change', function () {
          setPricingOption(settings, $(this).val());
          pricingSliderRange.val($(this).val());
        });
  
        if($('.pricing-slider', context).length) {
          const urlParams = new URLSearchParams(window.location.search);
          const myParam = urlParams.get('prepaid');
          if(myParam === '1') {
            $('#pricingSliderPM').remove();
            $('#pricingSliderCTA').remove();
            $('#pricingSliderPA').removeClass('d-none');
            $('#pricingSliderCTAA').removeClass('d-none');
          }
          else {
            $('#pricingSliderPA').remove();
            $('#pricingSliderCTAA').remove();
            $('#pricingSliderPM').removeClass('d-none');
            $('#pricingSliderCTA').removeClass('d-none');
          }
  
          $('body').bind('DOMSubtreeModified', function () {
            $(document).find('.use-ajax').once('ajax').each(function (i, ajaxLink) {
              const $linkElement = $(ajaxLink);
              const elementSettings = {
                progress: { type: 'throbber' },
                dialogType: $linkElement.data('dialog-type'),
                dialog: $linkElement.data('dialog-options'),
                dialogRenderer: $linkElement.data('dialog-renderer'),
                base: $linkElement.attr('id'),
                element: ajaxLink
              };
              const href = $linkElement.attr('href');
              if (href) {
                elementSettings.url = href;
                elementSettings.event = 'click';
              }
              Drupal.ajax(elementSettings);
            });
          });
  
          $(document).ready(function () {
            pricingSliderRange.val(0);
            pricingSliderSelect.val(0);
          });
        }
  
      }
    };
  }(jQuery, Drupal));
  