jQuery(document).ready(function($) {
    // validate signup form on keyup and submit
  $.validator.addMethod( "validateFullname", function( value, element ) {
      return this.optional( element ) || /(\b\w{1,15}\s+\b)+\b\w{1,15}\b/.test( value );
  }, "Your Full name must consist of at least 2 words and only alphabetical characters" );
    
  
    
  var requestUrl = Drupal.settings.urlSwitch.requestUrl;
  var domainName = Drupal.settings.urlSwitch.domain;
  var redirectUrl = Drupal.settings.urlSwitch.redirectUrl;
  var form = $("#signup-form-1");
  
  form.validate({
      rules: {
        AccountCountry: "required",
        fullName: {
         required: true,
         minlength: 3,
         maxlength: 30,
         validateFullname: true
        },
        password: {
         required: true,
         minlength: 5,
         maxlength: 20
        },
        passwordConfirm: {
         required: true,
         minlength: 5,
         maxlength: 20,
         equalTo: "#password"
        },
        username: {
          required: true,
          email: true,
          remote: {
              // url: "https://nova-vip-stg1.skyy.io/nova/EZTEXTING/signup/username/validate",
              // url: "https://srv.callfire.com/nova/EZTEXTING/signup/username/validate",
              url: requestUrl + "/username/validate",
  
           //   async: false,
              dataFilter: function(data) {
                      response = JSON.parse(data);
                      if (jQuery.isEmptyObject(response)) {
                          return true;
                      }
                      else {
                          return false;
                      }
                      return false;
                  }
        }
        },
      },
      messages: {
        AccountCountry: "Please select the country you will be texting to",
        username: {
          required: "Please enter a valid email address",
          minlength: "Please enter a valid email address",
          remote: "Your email address is already in use. Please login."
        },
        fullName: {
          required: "Please enter a Full Name",
          minlength: "Your Full Name must consist of at least 30 characters"
        },
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        passwordConfirm: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long",
          equalTo: "Please enter the same password as above"
        },
  
      },
      highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
      },
      unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
      }
    });
    
    
    $("#signup-form").validate({
      rules: {
        firstName: "required",
        lastName: "required",
        timezonepkey: "required",
        AccountCountry: "required",
        userName: {
          required: true,
          minlength: 2,
          maxlength: 12
        },
        password: {
          required: true,
          minlength: 5
        },
        passwordConfirm: {
          required: true,
          minlength: 5,
          equalTo: "#password"
        },
        email: {
          required: true,
          email: true
         },
        phoneNumber: {
          required: true,
          phoneUS: true
        },
        phoneNumberConfirm: {
          required: true,
          phoneUS: true,
          equalTo: "#phoneNumber"
        }
      },
      messages: {
        firstName: "Please enter your first name",
        lastName: "Please enter your last name",
        timezonepkey: "Please select your time zone",
        AccountCountry: "Please select the country you will be texting to",
        email: {
          required: "Please enter a valid email address",
          minlength: "Please enter a valid email address",
        },
        userName: {
          required: "Please enter a username",
          minlength: "Your username must consist of at least 2 characters"
        },
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        passwordConfirm: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long",
          equalTo: "Please enter the same password as above"
        },
        phoneNumber: {
          required: "Please enter a valid phone number",
          phoneUS: "Please enter a valid phone number"
        },
        phoneNumberConfirm: {
          required: "Please enter a valid phone number",
          phoneUS: "Please enter a valid phone number",
          equalTo: "The numbers you have entered do not match, please renter the number"
        }
      },
      highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
      },
      unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
      }
    });
    
  $(".toggle-password").click(function() {
     $(this).toggleClass("fa-eye fa-eye-slash");
     var input = $($(this).attr("toggle"));
     if (input.attr("type") == "password") {
       input.attr("type", "text");
     } else {
       input.attr("type", "password");
     }
  });
  
   function redirectToApp(){
    
    var browserCookies = Cookies.get();
  
    var packageId =  $('input[name="PackageID"]').val(); 
    var prepaidDiscountId =  $('input[name="PrepaidDiscountId"]').val(); 
    var data = JSON.stringify({ 
        "userName" : $('#email').val(),
        "email"    : $('#email').val(),
        "fullName" : $('#fullName').val(),
        "password" : $('#password').val(),
        "country"  : $('[name="AccountCountry"]').val(),
        "remoteAddress": "12.23.34.45",
        "params" : {
          "extendedSignupFlow" : $('input[name="extendedSignupFlow"]').val(),
          "packageId"          : packageId,
          "prepaidDiscountId"  : prepaidDiscountId.toString()
        },
        "cookies" : {
             "EZID" : $('input[name="ezid"]').val(),
          "ReferID" : "abc123",
              "src" : "marketing",
          "version" : "mobile"
        }
    });
    
    var request = $.ajax({
            async: true,
            crossDomain: true,
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "cache-control": "no-cache"
            },
            // url: "https://nova-vip-stg1.skyy.io/nova/EZTEXTING/signup",
            // url: "https://srv.callfire.com/nova/EZTEXTING/signup",
            url: requestUrl,
            dataType: "json",
            data: data
      });
  
      request.done(function(data) {
          var in90Minutes = 1/16;
          // Cookies.set("accessToken", data.accessToken, { expires: in90Minutes, path: '/', domain: '.app-stg1.skyy.io' } ); // 90 min
          // Cookies.set("refreshToken", data.refreshToken, { expires: 365, path: '/', domain: '.app-stg1.skyy.io' } ); // 365 days
          // Cookies.set("accessToken", data.accessToken, { expires: in90Minutes, path: '/', domain: '.eztexting.com' } ); // 90 min
          // Cookies.set("refreshToken", data.refreshToken, { expires: 365, path: '/', domain: '.eztexting.com'} ); // 365 days
            Cookies.set("AccessToken", data.accessToken, { expires: in90Minutes, path: '/', domain: domainName } ); // 90 min
            Cookies.set("RefreshToken", data.refreshToken, { expires: 365, path: '/', domain: domainName } ); // 365 days
            Cookies.set("SignUpPackage", packageId, { expires: 365, path: '/', domain: domainName } ); // 365 days
            Cookies.set("SignUpPrepaidDiscount", prepaidDiscountId, { expires: 365, path: '/', domain: domainName } ); // 365 days
            Cookies.set("John","Hello", { expires: 365, path: '/', domain: domainName });
            for ( cookieName in browserCookies) {
  
              if (cookieName.includes('_vis_opt_')) {
                Cookies.set(cookieName, browserCookies[cookieName], { expires: 365, path: '/', domain: domainName } );
  
              }
            }
  
          // window.location.href = 'https://app-stg1.skyy.io/index/first-login';
          // window.location.href = 'https://app.eztexting.com/index/first-login';
            window.location.href = redirectUrl;
    });
    
      request.fail(function( jqXHR, textStatus ) {
            console.log( "Request failed: " + textStatus );
      });  
    
      
  }; 
  
  
  
  $("#sign-up-submit-button").click(function(){
    if (form.valid()){
      redirectToApp();  
    }
  }
  );
  
  jQuery('#password, #fullName, #email').on("keypress", function (e) {
      if (e.keyCode == 13) {
        if (form.valid()){  
         redirectToApp(); 
      }
      }
  });
    
  });
  
  