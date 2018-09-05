(function ($) {  
    // Home Page
    // Microsite NavBar Mod
    // $(".microsite a.navbar-brand").attr('href', '/sms');
    // $(".microsite .menu-393 a, .microsite .menu-1832 a, .microsite .menu-3317 a, .microsite .menu-1566 a").css('opacity', '1');
    // $(".microsite .menu-393 a").attr('href', '/sms/features');
    // $(".microsite .menu-1832 a").text('how it works').attr('href', '/how-it-works');
    // $(".microsite .menu-3317 a").text('pricing').attr('href', '/ez-texting-pricing');
    // $(".microsite .menu-1566 a").text('faqs').attr('href', '/mass-texting-faqs');
    // $(".microsite a.btn-sign-up").attr('href', '/sms/start');

    // Micro-Home Header Button & H2 Add-Ons
    $(".micro-home .wrapper_v7_int div").addClass('header-titles');
    $(".micro-home .header-titles").append('<div class="header-btns"></div>');
    $(".micro-home .header-btns").append('<a class="header-btns--watch"><img alt="play icon" class="play-icon" src="/sites/default/files/Images/microsite/play-icon-header.png"> <span>Watch the Video</span></a>')
    $(".micro-home .header-btns").append('<a class="header-btns--try" href="/start"><div class="header-btns--try-btn" name="button" type="button">Try It For Free</div></a>');
    $(".micro-home div.header-btns").after('<h2 class="subtitle">Text </h2>');
    $(".micro-home h2.subtitle").append('<b>TRY</b>').append(' to ').append('<b>858585</b>').append(' to see how it works');
    console.log("header buttons loaded");
    // Microsite Footer Mods
    // $(".microsite .disclaimer-row .col-sm-8 .disclaimer:first-child a:first-child").attr('href', '/ez-texting-privacy-policy');
    // $(".microsite .disclaimer-row .col-sm-8 .disclaimer:first-child a:nth-child(2)").attr('href', '/terms-service-0');
    // $(".microsite .disclaimer-row .col-sm-8 .disclaimer:first-child a:nth-child(3)").attr('href', '/sms/services-privacy-policy');
    // $(".microsite .disclaimer-row .col-sm-8 .disclaimer:first-child a:nth-child(4)").attr('href', '/anti-spam-policy-0');
    // $(".microsite .disclaimer-row .col-sm-8 .disclaimer:nth-child(2) a").attr('href', '/ez-texting-help');
    // $(".microsite .footer-brand div:nth-child(1) a").attr('href', '/sms');

    // Micro-Home YouTube Overlays
    $(".micro-home .learn-more").on('click', function() { $("#overlay").show(500); });
    $(".micro-home #overlay").on('click', function() { $('#overlay').css('display','none'); });
    $(".micro-home .header-btns--watch").on('click', function() { $('#header-overlay').show(300); });
    $(".micro-home #header-overlay").on('click', function() { 
        $('#header-overlay').hide();
        var homeVideo = $('.video-home').attr("src");
        $('.video-home').attr('src','');
        $('.video-home').attr('src',homeVideo); 
    });

    // Micro-Home Counter
    $('.micro-home .timer').countTo({
        from: 4078023246,
        to: 4078028000,
        speed: 1000000,
        formatter: function (value, options) {
            value = value.toFixed(options.decimals);
            value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return value;
        }
    });

    // Promote Notify Coordinate Section Slide Show - image swaps every 7 seconds
    var iphoneImages = ['/sites/all/themes/ez/dist/images/micro-home/iphone-promote.jpg', '/sites/all/themes/ez/dist/images/micro-home/iphone-notify.jpg', '/sites/all/themes/ez/dist/images/micro-home/iphone-coordinate.jpg'];
    var currentIphone = $(".cta-sect1 div.right-image");
    var i = 0;
    setInterval(function() {
        // $(".cta-sect1 .right-image").removeClass('bounceInLeft').addClass('bounceInLeft');
        currentIphone.css('background-image', 'url(' + iphoneImages[i] + ')');
        i = i + 1;
        if (i == iphoneImages.length) {
            i =  0;
        }
    }, 7000);
    // Micro-Home See More Button Toggle 
    $(".see-more-btn").on('click', function() {
        $(".business-row.education, .business-row.fitness, .business-row.health").toggle(500);
        console.log('business section toggled');
        // $(".see-more-btn").css('display', 'none');
        // console.log('button hidden now');
        // if($(".see-more-btn").text() == "see more") {
        //     console.log('text changed to "see less"');
        //     $(".see-more-btn").text("see less");
        // } else if ($(".see-more-btn").text() == "see less") {
        //     console.log('text changed to "see more"');
        //     $(".see-more-btn").text("see more");
        // }
        if(document.getElementsByClassName("see-more-btn--span")[0].innerText == "see more") {
            document.getElementsByClassName("see-more-btn--span")[0].innerText = "see less";
            document.getElementsByClassName("btn-caret")[0].style.transform = "rotate(-135deg)";
            document.getElementsByClassName("btn-caret")[0].style["-webkit-transform"] = "rotate(-135deg)";
            document.getElementsByClassName("btn-caret")[0].style["bottom"] = "-0.2vw";
        } else if (document.getElementsByClassName("see-more-btn--span")[0].innerText == "see less") {
            document.getElementsByClassName("see-more-btn--span")[0].innerText = "see more";
            document.getElementsByClassName("btn-caret")[0].style.transform = "rotate(45deg)";
            document.getElementsByClassName("btn-caret")[0].style["-webkit-transform"] = "rotate(45deg)";
        }   

    });

    
    // Features Page
    $('.section').on('click', '.feat-right--bottom-content h2', function() {
        console.log("link clicked");
        console.log(this);
        $(this).parent().parent().parent().parent().parent().siblings('.iframe-full-bg').show('200');
    });
    
    $('.section').on('click', '.feat-right--bottom-img img.play-icon', function() {
        console.log("link clicked");
        console.log(this);
        $(this).parent().parent().parent().parent().parent().siblings('.iframe-full-bg').show('200');
    });

    $('.section').on('click', '.iframe-exit-btn', function() {
        console.log("exit button clicked");
        console.log(this);
        $(this).parent('.iframe-container').parent('.iframe-full-bg').hide('100');
        var video = $(this).siblings('.video').attr("src");
        $(this).siblings('.video').attr('src','');
        $(this).siblings('.video').attr('src',video);
    });
    /*****************/
    // Pricings Page //
    /*****************/
    // Pricing Page Right Arrow link mod
    function pricingLinkChange() {
        $(".microsite .pricing4 .boxes a.price-arrow.price-arrow-right.fa.fa-arrow-right").attr('href', '/sms/high-volume-pricing');
    }
    setTimeout(pricingLinkChange, 800);
    
    // High Volume Pricing Page Left Arrow link mod
    function highVolumeLinkChange() {
        $(".microsite .pricing4 .boxes a.price-arrow.price-arrow-left.fa.fa-arrow-left").attr('href', '/sms/pricing');
    }
    setTimeout(highVolumeLinkChange, 800);

    $(document).on('scroll', function() {
        // Scroll/fix feature for 1280px Resolution
        if($(window).width() <= 1280) {
            // console.log('1280px reached');
            if($(document).scrollTop() > 850) {
                $('#sub-header-container').removeClass('fixed-position');
            } else {
                $('#sub-header-container').addClass('fixed-position');
            }
        // Scroll/fix feature for 1920px Resolution
        } else if ($(window).width() <= 1920){
            // console.log('1980px reached');
            if($(document).scrollTop() > 780) {
                $('#sub-header-container').removeClass('fixed-position');
            } else {
                $('#sub-header-container').addClass('fixed-position');
            }
        }
    });
    $('.radio-container.monthly').on('click', function() {
        console.log("monthly button clicked");
        $('.skinny-column .column-header--price').text('$10').append('<span>/month</span>');
        $('.core-column .column-header--price').text('$20').append('<span>/month</span>');
        $('.pro-column .column-header--price').text('$40').append('<span>/month</span>');
    });
    $('.radio-container.annual').on('click', function() {
        console.log("annual button clicked");
        $('.skinny-column .column-header--price').text('$9').append('<span>/month</span>');
        $('.core-column .column-header--price').text('$18').append('<span>/month</span>');
        $('.pro-column .column-header--price').text('$36').append('<span>/month</span>');
    });


    /******************/
    //  Sign Up Page  //
    /******************/
    // the two links under the submit button
    // $(".microsite .text-muted a:nth-child(1)").attr('href', '/terms-service-0');
    // $(".microsite .text-muted a:nth-child(2)").attr('href', '/anti-spam-policy-0');

    /***********  Username Field Modification ***********/
    // var $firstName = $('#firstName');
    // var $lastName = $('#lastName');
    // var $userName = $('#userName');
    // var $email = $('#email');
    // var $userNameLength = 0;
    // var $random4Digit = Math.floor(1000 + Math.random() * 9000);
    // var $userNameReg = /^[a-zA-Z0-9.\-_$@*!]{5,12}$/;

    // $firstName.on('input', function() {
    //     console.log($firstName.val());
    //     $userName.val($firstName.val());
    //     $userNameLength = $userName.val().length;
    //     console.log($userNameLength);
    // });

    // $lastName.on('input', function() {
    //     console.log($firstName.val() + $lastName.val() + $random4Digit);
    //     $userName.val($firstName.val() + $lastName.val() + $random4Digit);
    //     $userNameLength = $userName.val().length;
    //     console.log($userNameLength);
    //     console.log('Regex = ' + $userName.val().search($userNameReg));
    //     if ($userNameLength >= 13) {
    //         $userName.val($userName.val().substr(0, 12));
    //     }
    // });

    // $email.on('input', function() {
    //     console.log($email.val());
    //     var $emailStr = $email.val();
    //     var $emailName = $emailStr.split('@');
    //     console.log($emailName);
    //     // userName.val($emailStr.split('@') [0]);
    //     $userName.val($emailName.length==2 ? $emailName[0] : null);
    // })
    /***********  End of Username Field Modification ***********/


    /*****************************************/
    //              VWO Cookies              //
    /*****************************************/
    function checkCookie() {
        var $vwoCookie = Cookies.get('_vis_opt_exp_376_combi');
        //  VWO Control Group  //
        if ($vwoCookie == '1') {
            console.log("We're in Control");
            //   Home Page CTA href mods  //
            $('a.btn.btn-rounded.btn-orange.btn-sign-up').attr('href','/start?pid=free');
            $('a.header-btns--try').attr('href','/start?pid=free');
            $('.form-sect8-btn a').attr('href','/start?pid=free');
            //   Pricing Page Pricing Block Toggle  //
            $('#freeEZ').attr('style','display: block');    
            $('#freetrial').attr('style','display: none');
        //  VWO Variation 1  //
        } else if ($vwoCookie == '2'){  
            console.log("We're in Variation 1");
            //   Home Page CTA href mods  //
            $('a.btn.btn-rounded.btn-orange.btn-sign-up').attr('href','/start?pid=freetrial');
            $('a.header-btns--try').attr('href','/start?pid=freetrial');
            $('.form-sect8-btn a').attr('href','/start?pid=freetrial');
            //   Pricing Page Pricing Block Toggle  //
            $('#freeEZ').attr('style','display: none');    
            $('#freetrial').attr('style','display: block');  
        }
        var $vwoCookie = Cookies.get('_vis_opt_exp_378_combi');
        //  VWO Control Group  //
        if ($vwoCookie == '1') {
        //  VWO Variation 1  //
        } else if ($vwoCookie == '2'){  
            //   Home Page CTA href mods  //
            $('body').addClass('free-volume-pricing');
            $('a[href="/start"').attr('href', '/start?pid=paygovolume');
        }
    }
    checkCookie();


    /*************************************/
    //           EZID Cookie             //
    /*************************************/
    var EZID_COOKIE = "EZID";
    var EZID_EXPIRATION = 36500; // 100 years
    var EZID_PATH = '/';
    var EZID_DOMAIN = '.eztexting.com'

    // Taken from https://github.com/google/closure-library/blob/555e0138c83ed54d25a3e1cd82a7e789e88335a7/closure/goog/string/string.js#L1177
    function generateRandomString() {
        var x = 2147483648;
        return Math.floor(Math.random() * x).toString(36) + Math.abs(Math.floor(Math.random() * x) ^ Date.now).toString(36);
    }

    // shouldUpdateFn(cookieValue) and should return true or false
    // cookieValueFn() and should return some string value
    // cookieParams is an object with
    // expires: string (days it will expire in)
    // path: string
    // domain: string
    // secure: boolean
    
    function upsertCookie(cookieName, shouldUpdateFn, cookieValueFn, cookieParams) {
	    if (shouldUpdateFn(Cookies.get(cookieName))) {
		    Cookies.set(cookieName, cookieValueFn(), cookieParams);
	    }	
    }

    upsertCookie(EZID_COOKIE, 
	    function(value) {
		    if (value === undefined || value.length <= 0) 
			    return true;
		    else
			    return false;
	    }, 
        generateRandomString, 
        {
            expires: EZID_EXPIRATION,
            path: EZID_PATH,
            domain: EZID_DOMAIN,
            secure: true	
        });



    // Using js-cookies.js  Cookies.get('vwo')

    // function checkCookie() {
    //     var $vwoCookie = Cookies.get('vwo');
    //     if ($vwoCookie !== '_vis_opt_exp_376_combi') {
    //         console.log("No Cookies Here");
    //         $('#freeEZ').attr('style','display: block');
    //         $('#freetrial').attr('style','display: none');
    //     } else if ($vwoCookie == '_vis_opt_exp_376_combi'){  
    //         console.log("Cookie Found~!");
    //         $('#freeEZ').attr('style','display: none');    
    //         $('#freetrial').attr('style','display: block');  
    //     }
    // }
    // checkCookie();

    // USING cookie.indexOf();

    // function checkCookie() {
    //     var cookieIndex = document.cookie.indexOf('vwo');
    //     if (cookieIndex == -1) {
    //         console.log("No Cookies Here");
    //         $('#freeEZ').attr('style','display: block');    
    //         $('#freetrial').attr('style','display: none');  
    //     } else {  
    //         console.log("Cookie Found~!");  
    //         $('#freeEZ').attr('style','display: none');    
    //         $('#freetrial').attr('style','display: block');  
    //     }
    // }
    // checkCookie();

    // AJAX Call for High Volume Pricing Form


    $.fn.serializeObject = function()
    {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
    
    var $data = $(function() {
        $('form').submit(function() {
            $('.jsonString').text(JSON.stringify($('form').serializeObject()));
            return false;
        });
    });
    
    $('form').submit(function() {
        $.ajax({url: "demo_test.txt", success: function(result){
            $("#div1").html(result);
        }});
    });
    



    $('form').submit(function() {
        $.ajax({
            async: true,
            crossDomain: true,
            url: "https://callfire.zendesk.com/api/v2/tickets.json", 
            type: "POST", 
            data: {
                "ticket": {
                    "subject":  "My printer is on fire!",
                    "description": "My name is John",
                    "comment":  $data,
                    "priority": "urgent",
                    "requester": "",
                    "assignee": "Josh Lange"
                }
            },
            dataType: "json", 
            success: function(result){
                $("#div1").html(result);
            }
        });
    });

    // https://requestbin.fullcontact.com/1atg1ay1?inspect
    
    xhr.setRequestHeader ("Authorization", "Basic " + btoa("jmoon@callfire.com" + "/" + "token" + ":" + "o8vcBbuuIHoy3oU6xdZbnEVTrdrq0X5S8ok9fC1K"));

    xhr.setRequestHeader ("Authorization", "Basic " + btoa("am1vb25AY2FsbGZpcmUuY29tL3Rva2VuOm84dmNCYnV1SUhveTNvVTZ4ZFpibkVWVHJkcnEwWDVTOG9rOWZDMUs="));


    var settings = {
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Basic " + btoa("jmoon@callfire.com" + ":" + "m00ncakeZen"));
        },
        "async": true,
        "crossDomain": true,
        "url": "https://callfire.zendesk.com/api/v2/tickets.json",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "Authorization": "Basic am1vb25AY2FsbGZpcmUuY29tL3Rva2VuOm84dmNCYnV1SUhveTNvVTZ4ZFpibkVWVHJkcnEwWDVTOG9rOWZDMUs="
        },
        "processData": false,
        "data": "{\n  \"ticket\": {\n\t\"description\": \"TEST\",\n    \"subject\":  \"TEST from High Volume Form\",\n    \"comment\":  { \"body\": \"Is it working?\" },\n    \"priority\": \"urgent\"\n  }\n}"
    }      
      $('form').submit(function() {
              $.ajax(settings).done(function (response) {
              console.log(response);
          });
      });


})(jQuery);

/***************************/
//     Contact Us Page     //
/***************************/
function driftChat() {
    (function() {
    var DRIFT_CHAT_SELECTOR = '.drift-open-chat'
    function ready(fn) {
      if (document.readyState != 'loading') {
        fn();
      } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
      } else {
        document.attachEvent('onreadystatechange', function() {
          if (document.readyState != 'loading')
            fn();
        });
      }
    }
    function forEachElement(selector, fn) {
      var elements = document.querySelectorAll(selector);
      for (var i = 0; i < elements.length; i++)
        fn(elements[i], i);
    }
    function openSidebar(driftApi, event) {
      event.preventDefault();
      driftApi.sidebar.open();
      return false;
    }
    ready(function() {
      drift.on('ready', function(api) {
        var handleClick = openSidebar.bind(this, api)
        forEachElement(DRIFT_CHAT_SELECTOR, function(el) {
          el.addEventListener('click', handleClick);
        });
      });
    });
  })();
}
setTimeout(driftChat, 1000);
