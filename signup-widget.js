"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function value(target) {
      'use strict';

      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      var to = Object(target);

      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];

        if (nextSource === undefined || nextSource === null) {
          continue;
        }

        nextSource = Object(nextSource);
        var keysArray = Object.keys(Object(nextSource));

        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }

      return to;
    }
  });
}

(function () {
  /* Params & Config */
  var SignupWidget = {
    config: {
      brand: '',
      isDebug: false,
      novaUrl: '',
      signupUrl: '',
      validateUsernameUrl: '',
      trackingCookieName: 'AccountCreationTracked',
      redirectUrl: '/',
      cookieDomain: '.eztexting.com',
      blockCountrySelection: false,
      drupalUrl: 'https://www.eztexting.com/'
    }
  };
  var CookieNames = {
    accessToken: 'AccessToken',
    refreshToken: 'RefreshToken',
    rememberMe: 'RememberMe'
  };
  var isRequestInProgress = false;
  var isUsernameValid = true;
  var signupPackageId = null;
  var DOMAINS = {
    EZ: 'eztexting.com',
    GROUP: 'grouptexting.com',
    CLUB: 'clubtexting.com',
    MOBOMIX: 'mobomix.com',
    TMC: 'tellmycell.com',
    NIGHT_LIFE: 'nightlifetexting.com'
  };
  /* Errors & Messages */

  var Errors = {
    FullNameRequired: 'Please enter a Full Name.',
    FullNameMin: 'You name must be at least 3 characters.',
    FullName: 'Please enter your first and last name.',
    Email: 'Please enter a valid email address',
    PasswordMin: 'Your password must be at least 5 characters long',
    PasswordMax: 'Please enter max 20 characters',
    PasswordRequired: 'Please provide a password'
  };
  var GuestSignupFormExceptionMapping = {
    BadUserNameException: 'Invalid email.',
    BadWordInUserNameException: 'Email may not contain prohibited words.',
    DuplicateUserNameException: 'Email you entered is already in use.'
  };
  var GuestSignupFormMapping = {
    451: 'Username already exists',
    452: 'Username must be between 5 and 100 characters',
    453: 'Username contains illegal characters',
    454: 'Email must be between 5 and 100 characters',
    455: 'Email contains illegal characters',
    456: 'Email address is invalid',
    460: 'Password must be between 5 and 20 characters',
    461: 'Password contains illegal characters',
    462: 'Password cannot match username',
    463: 'Password cannot match email',
    470: 'Full name must be between 3 and 30 characters',
    471: 'Please enter your first and last name',
    472: 'First name must be between 1 and 15 characters',
    473: 'First name contains illegal characters',
    474: 'Last name must be between 1 and 15 characters',
    475: 'Last name contains illegal characters'
  };
  var defaultErrorMessage = 'Oops! Something went wrong';
  /* Main */

  function insertWidgetContent(container) {
    var widgetStylesString = "\n<style>\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');\n\n#signup-widget .signup-form {\n    font-family: 'Open Sans', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    display: block;\n    color: rgb(132, 145, 163);\n    line-height: 1.8;\n}\n\n#signup-widget .signup-form-group {\n    margin-bottom: 15px;\n}\n\n#signup-widget .signup-form-group.has-error .signup-form-error {\n    display: block;\n    color: rgb(140, 46, 11);\n}\n\n#signup-widget .signup-form-group.has-error .signup-form-label {\n    color: rgb(140, 46, 11);\n}\n\n#signup-widget .signup-form-group.has-error .signup-form-control {\n    border-color: rgb(169, 68, 66);\n    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n}\n\n#signup-widget .signup-form-group.has-error .signup-form-control:focus {\n    border-color: rgb(132, 53, 52);\n    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 6px rgb(206, 132, 131);\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 6px rgb(206, 132, 131);\n}\n\n#signup-widget .signup-form-label {\n    display: inline-block;\n    margin-bottom: 5px;\n    font-weight: 700;\n}\n\n#signup-widget .signup-form-control {\n    display: block;\n    width: 100%;\n    height: 34px;\n    padding: 6px 12px;\n    background-color: rgb(255, 255, 255);\n    border: 1px solid rgb(204, 204, 204);\n    border-radius: 4px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    font-size: 14px;\n    color: rgb(85, 85, 85);\n    -webkit-transition: .15s ease-in-out;\n    -o-transition: .15s ease-in-out;\n    transition: .15s ease-in-out;\n}\n\n#signup-widget .signup-form-control:focus {\n    border-color: rgb(102, 175, 233);\n    outline: 0;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);\n}\n\n#signup-widget .signup-form-input-wrapper {\n    position: relative;\n}\n\n#signup-widget .signup-form-icon {\n    position: absolute;\n    top: 1px;\n    right: 1px;\n    width: 32px;\n    height: 32px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    padding: 6px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    cursor: pointer;\n    fill: rgb(132, 145, 163);\n\n}\n\n#signup-widget .signup-form-eye {\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n}\n\n#signup-widget .signup-form-icon-sprite {\n    display: none;\n}\n\n#signup-widget .signup-form-submit {\n    margin-top: 5px;\n    padding: 12px 18px;\n    background-color: rgb(47, 201, 127);\n    border: 1px solid rgb(47, 201, 127);\n    border-radius: 3px;\n    color: rgb(255, 255, 255);\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 24px;\n    text-transform: uppercase;\n    cursor: pointer;\n    -webkit-transition: background-color .3s;\n    -o-transition: background-color .3s;\n    transition: background-color .3s;\n}\n\n#signup-widget .signup-form-submit:hover {\n    color: rgb(47, 201, 127);\n    background-color: transparent;\n}\n\n#signup-widget .signup-form-submit:focus {\n    outline: 0;\n    -webkit-box-shadow: 0 0 6px rgb(133, 138, 155);\n    box-shadow: 0 0 6px rgb(133, 138, 155);\n}\n\n#signup-widget .signup-form-submit:active {\n    outline: 0;\n    -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125);\n    box-shadow: inset 0 3px 5px rgba(0,0,0,.125);\n}\n\n#signup-widget .signup-form-error {\n    display: none;\n    font-weight: 700;\n    margin-bottom: 5px;\n}\n\n#signup-widget .signup-form-control::-moz-placeholder {\n    color: rgb(153, 153, 153);\n    opacity: 1\n}\n\n#signup-widget .signup-form-control:-ms-input-placeholder {\n    color: rgb(153, 153, 153)\n}\n\n#signup-widget .signup-form-control::-webkit-input-placeholder {\n    color: rgb(153, 153, 153)\n}\n\n#signup-widget .signup-form-control::-ms-expand {\n    border: 0;\n    background-color: transparent\n}\n</style>";
    var widgetTemplateString = "\n<div id=\"signup-widget\">\n        <form class=\"signup-form\" novalidate>\n            <div class=\"signup-form-group\">\n                <label class=\"signup-form-label\" for=\"fullName\">Full Name</label>\n                <input class=\"signup-form-control\" type=\"text\" id=\"fullName\" placeholder=\"e.g. Jane Smith\" maxlength=\"30\">\n                <label class=\"signup-form-error\" for=\"fullName\">Please enter a Full Name</label>\n            </div>\n\n            <div class=\"signup-form-group\">\n                <label class=\"signup-form-label\" for=\"email\">Email</label>\n                <input class=\"signup-form-control\" type=\"text\" id=\"email\" maxlength=\"100\">\n                <label class=\"signup-form-error\" for=\"email\">Please enter a valid email address</label>\n            </div>\n\n            <div class=\"signup-form-group\">\n                <label class=\"signup-form-label\" for=\"password\">Password</label>\n                <div class=\"signup-form-input-wrapper\">\n                    <input class=\"signup-form-control\" id=\"password\" type=\"password\"\n                           placeholder=\"5 characters or more\">\n                    <label class=\"signup-form-error\" for=\"password\">Please provide a password</label>\n                    <div class=\"signup-form-icon\">\n                        <svg class=\"signup-form-eye\" viewBox=\"0 0 512 512\">\n                            <use xlink:href=\"#eye-open\"/>\n                            <!-- To show eye-slash change attribute 'xlink:href' to '#eye-slash' -->\n                        </svg>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"signup-form-group\">\n                <label class=\"signup-form-label\" for=\"accountCountry\">Deliver My Texts To</label>\n                <select class=\"signup-form-control\" id=\"accountCountry\">\n                    <option value=\"1\">USA</option>\n                    <option value=\"2\">Canada</option>\n                </select>\n            </div>\n\n            <input class=\"signup-form-submit\" type=\"button\" value=\"Start for free\">\n\n            <div class=\"signup-form-group has-error\">\n                <label class=\"signup-form-error\" id=\"defaultError\"></label>\n            </div>\n        </form>\n\n        <svg class=\"signup-form-icon-sprite\" viewBox=\"0 0 512 512\">\n            <g id=\"eye-open\">\n                <path d=\"M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687   c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818   c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68   c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699   C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554   c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704   c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971   c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999   c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04   c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222   c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362   s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362   c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04   z\"/>\n            </g>\n            <g id=\"eye-slash\">\n                <path d=\"M361.161,291.652c15.037-21.796,22.56-45.922,22.56-72.375c0-7.422-0.76-15.417-2.286-23.984l-79.938,143.321    C326.235,329.101,346.125,313.438,361.161,291.652z\"/>\n                <path d=\"M372.872,94.221c0.191-0.378,0.28-1.235,0.28-2.568c0-3.237-1.522-5.802-4.571-7.715c-0.568-0.38-2.423-1.475-5.568-3.287    c-3.138-1.805-6.14-3.567-8.989-5.282c-2.854-1.713-5.989-3.472-9.422-5.28c-3.426-1.809-6.375-3.284-8.846-4.427    c-2.479-1.141-4.189-1.713-5.141-1.713c-3.426,0-6.092,1.525-7.994,4.569l-15.413,27.696c-17.316-3.234-34.451-4.854-51.391-4.854    c-51.201,0-98.404,12.946-141.613,38.831C70.998,156.08,34.836,191.385,5.711,236.114C1.903,242.019,0,248.586,0,255.819    c0,7.231,1.903,13.801,5.711,19.698c16.748,26.073,36.592,49.396,59.528,69.949c22.936,20.561,48.011,37.018,75.229,49.396    c-8.375,14.273-12.562,22.556-12.562,24.842c0,3.425,1.524,6.088,4.57,7.99c23.219,13.329,35.97,19.985,38.256,19.985    c3.422,0,6.089-1.529,7.992-4.575l13.99-25.406c20.177-35.967,50.248-89.931,90.222-161.878    C322.908,183.871,352.886,130.005,372.872,94.221z M158.456,362.885C108.97,340.616,68.33,304.93,36.547,255.822    c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.206-17.417,64.237c0,20.365,4.661,39.68,13.99,57.955    c9.327,18.274,22.27,33.4,38.83,45.392L158.456,362.885z M265.525,155.887c-2.662,2.667-5.906,3.999-9.712,3.999    c-16.368,0-30.361,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971c0,3.811-1.336,7.044-3.999,9.71    c-2.668,2.667-5.902,3.999-9.707,3.999c-3.809,0-7.045-1.334-9.71-3.999c-2.667-2.666-3.999-5.903-3.999-9.71    c0-23.79,8.52-44.206,25.553-61.242c17.034-17.034,37.447-25.553,61.241-25.553c3.806,0,7.043,1.336,9.713,3.999    c2.662,2.664,3.996,5.901,3.996,9.707C269.515,149.992,268.181,153.228,265.525,155.887z\"/>\n                <path d=\"M505.916,236.114c-10.853-18.08-24.603-35.594-41.255-52.534c-16.646-16.939-34.022-31.496-52.105-43.68l-17.987,31.977    c31.785,21.888,58.625,49.87,80.51,83.939c-23.024,35.782-51.723,65-86.07,87.648c-34.358,22.661-71.712,35.693-112.065,39.115    l-21.129,37.688c42.257,0,82.18-9.038,119.769-27.121c37.59-18.076,70.668-43.488,99.216-76.225    c13.322-15.421,23.695-29.219,31.121-41.401c3.806-6.476,5.708-13.046,5.708-19.702    C511.626,249.157,509.724,242.59,505.916,236.114z\"/>\n            </g>\n        </svg>\n    </div>\n        ";
    var widgetTemplate = createElementFromHTML(widgetTemplateString);
    var widgetStyles = createElementFromHTML(widgetStylesString);
    document.head.appendChild(widgetStyles);
    container.appendChild(widgetTemplate);
    return widgetTemplate;
  }

  function initializeWidgetReferences(widgetTemplate) {
    SignupWidget.template = widgetTemplate;
    SignupWidget.fullNameEl = widgetTemplate.querySelector('#fullName');
    SignupWidget.fullNameGroupEl = SignupWidget.fullNameEl.parentElement;
    SignupWidget.fullNameErrorEl = SignupWidget.fullNameGroupEl.querySelector('label.signup-form-error');
    SignupWidget.emailEl = widgetTemplate.querySelector('#email');
    SignupWidget.emailGroupEl = SignupWidget.emailEl.parentElement;
    SignupWidget.emailErrorEl = SignupWidget.emailGroupEl.querySelector('label.signup-form-error');
    SignupWidget.passwordEl = widgetTemplate.querySelector('#password');
    SignupWidget.passwordGroupEl = SignupWidget.passwordEl.parentElement.parentElement;
    SignupWidget.passwordErrorEl = SignupWidget.passwordGroupEl.querySelector('label.signup-form-error');
    SignupWidget.countrySel = widgetTemplate.querySelector('#accountCountry');
    SignupWidget.submitBtn = widgetTemplate.querySelector('input.signup-form-submit');
    SignupWidget.defaultErrorEl = widgetTemplate.querySelector('#defaultError');
  }

  function initWidget(container, config) {
    // update config
    if (config && _typeof(config) === 'object') {
      Object.assign(SignupWidget.config, config);

      if (config.novaUrl || config.brand) {
        SignupWidget.config.signupUrl = SignupWidget.config.novaUrl + '/' + SignupWidget.config.brand + '/signup';
        SignupWidget.config.validateUsernameUrl = SignupWidget.config.novaUrl + '/' + SignupWidget.config.brand + '/signup/username/validate';
      }
    } // check required parameters novaUrl and brand


    if (!SignupWidget.config.brand) {
      console.warn("SignupWidget: brand is missing.\n            Please, provide the value as SignupWidget('containerSelector', { brand: BRAND })");
      return;
    }

    if (!SignupWidget.config.novaUrl) {
      console.warn("SignupWidget: novaUrl is missing.\n            Please, provide the value as SignupWidget('containerSelector', { novaUrl: URL })");
      return;
    } // find container


    if (!container) {
      console.warn('Signup Widget is loaded, but container not found');
      return;
    } // append Widget


    initializeWidgetReferences(insertWidgetContent(container));

    if (SignupWidget.config.isDebug) {
      console.log('Signup Widget template inserted!');
    }

    runSignupWidget();
    setInitialSignupPackageId();
  }

  function setInitialSignupPackageId() {
    var pidStr = getQueryVariable('pid');
    var hostname = location.hostname;
    var isCanada = getQueryVariable('country') === '2';

    if (hostname.indexOf(DOMAINS.GROUP) !== -1) {
      var defaultPackage = 107;

      if (pidStr) {
        var pidArray = [{
          name: 'paygo',
          usa: 107
        }, {
          name: 'starter',
          usa: 108
        }, {
          name: 'value',
          usa: 109
        }, {
          name: 'plus',
          usa: 110
        }, {
          name: 'select',
          usa: 111
        }, {
          name: 'elite',
          usa: 112
        }, {
          name: 'pro',
          usa: 113
        }, {
          name: 'bronze',
          usa: 114
        }, {
          name: 'silver',
          usa: 115
        }, {
          name: 'gold',
          usa: 116
        }];
        var pidToSet = pidArray.find(function (x) {
          return x.name === pidStr;
        });

        if (pidToSet) {
          signupPackageId = pidToSet.usa;
        } else if (isNumeric(pidStr)) {
          signupPackageId = +pidStr;
        } else {
          signupPackageId = defaultPackage;
        }
      } else {
        signupPackageId = defaultPackage;
      }
    } else if (hostname.indexOf(DOMAINS.CLUB) !== -1) {
      var _defaultPackage = {
        usa: 496,
        canada: 488
      };

      if (pidStr) {
        var _pidArray = [{
          name: 'paygo',
          usa: 496,
          canada: 488
        }, {
          name: 'starter',
          usa: 497
        }, {
          name: 'basic',
          usa: 481,
          canada: 489
        }, {
          name: 'plus',
          usa: 482,
          canada: 490
        }, {
          name: 'elite',
          usa: 483,
          canada: 491
        }, {
          name: 'premium',
          usa: 484,
          canada: 492
        }, {
          name: 'pro',
          usa: 485,
          canada: 493
        }, {
          name: 'txt30k',
          usa: 486,
          canada: 494
        }, {
          name: 'txt50k',
          usa: 487,
          canada: 495
        }];

        var _pidToSet = _pidArray.find(function (x) {
          return x.name === pidStr;
        });

        if (_pidToSet) {
          signupPackageId = isCanada ? _pidToSet.canada || _defaultPackage.canada : _pidToSet.usa;
        } else if (isNumeric(pidStr)) {
          signupPackageId = +pidStr;
        } else {
          signupPackageId = isCanada ? _defaultPackage.canada : _defaultPackage.usa;
        }
      } else {
        signupPackageId = isCanada ? _defaultPackage.canada : _defaultPackage.usa;
      }

      initCountryChangeHandler();
    } else if (hostname.indexOf(DOMAINS.NIGHT_LIFE) !== -1) {
      var _defaultPackage2 = 94;

      if (pidStr) {
        var _pidArray2 = [{
          name: 'paygo',
          usa: 94
        }, {
          name: 'lite',
          usa: 103
        }, {
          name: 'basic',
          usa: 104
        }, {
          name: 'plus',
          usa: 105
        }, {
          name: 'premium',
          usa: 106
        }, {
          name: 'pro',
          usa: 107
        }, {
          name: 'txt60k',
          usa: 108
        }, {
          name: 'txt100k',
          usa: 109
        }];

        var _pidToSet2 = _pidArray2.find(function (x) {
          return x.name === pidStr;
        });

        if (_pidToSet2) {
          signupPackageId = _pidToSet2.usa;
        } else if (isNumeric(pidStr)) {
          signupPackageId = +pidStr;
        } else {
          signupPackageId = _defaultPackage2;
        }
      } else {
        signupPackageId = _defaultPackage2;
      }
    } else if (hostname.indexOf(DOMAINS.MOBOMIX) !== -1) {
      var _defaultPackage3 = 110;

      if (pidStr) {
        var _pidArray3 = [{
          name: 'paygo',
          usa: 110
        }, {
          name: 'starter',
          usa: 111
        }, {
          name: 'plus',
          usa: 112
        }, {
          name: 'premium',
          usa: 113
        }, {
          name: 'pro',
          usa: 114
        }, {
          name: 'bronze',
          usa: 115
        }, {
          name: 'silver',
          usa: 116
        }, {
          name: 'gold',
          usa: 117
        }, {
          name: 'max',
          usa: 118
        }];

        var _pidToSet3 = _pidArray3.find(function (x) {
          return x.name === pidStr;
        });

        if (_pidToSet3) {
          signupPackageId = _pidToSet3.usa;
        } else if (isNumeric(pidStr)) {
          signupPackageId = +pidStr;
        } else {
          signupPackageId = _defaultPackage3;
        }
      } else {
        signupPackageId = _defaultPackage3;
      }
    } else if (hostname.indexOf(DOMAINS.TMC) !== -1) {
      var _defaultPackage4 = 77;

      if (pidStr) {
        var _pidArray4 = [{
          name: 'paygo',
          usa: 77
        }, {
          name: 'starter',
          usa: 125
        }, {
          name: 'value',
          usa: 79
        }, {
          name: 'plus',
          usa: 80
        }, {
          name: 'select',
          usa: 81
        }, {
          name: 'elite',
          usa: 82
        }, {
          name: 'bronze',
          usa: 83
        }, {
          name: 'silver',
          usa: 84
        }, {
          name: 'gold',
          usa: 85
        }];

        var _pidToSet4 = _pidArray4.find(function (x) {
          return x.name === pidStr;
        });

        if (_pidToSet4) {
          signupPackageId = _pidToSet4.usa;
        } else if (isNumeric(pidStr)) {
          signupPackageId = +pidStr;
        } else {
          signupPackageId = _defaultPackage4;
        }
      } else {
        signupPackageId = _defaultPackage4;
      }
    } else {
      // assuming eztexting is default
      var _defaultPackage5 = {
        usa: 2180,
        canada: 2190
      };

      if (pidStr) {
        var _pidArray5 = [{
          name: 'free',
          usa: 1457,
          canada: 1942
        }, {
          name: 'freevolume',
          usa: 1975
        }, {
          name: 'freetrial',
          usa: 1957,
          canada: 1958
        }, {
          name: 'freetrial-new',
          usa: 2180,
          canada: 2190
        }, {
          name: 'starter',
          usa: 415
        }, {
          name: 'starter2',
          usa: 1846
        }, {
          name: 'gold',
          usa: 1103,
          canada: 1111
        }, {
          name: 'gold2',
          usa: 1853
        }, {
          name: 'goldvolume',
          usa: 1973
        }, {
          name: 'silver',
          usa: 1102,
          canada: 1110
        }, {
          name: 'silver2',
          usa: 1852
        }, {
          name: 'silvervolume',
          usa: 1972
        }, {
          name: 'bronze',
          usa: 1101,
          canada: 1109
        }, {
          name: 'bronze2',
          usa: 1851
        }, {
          name: 'bronzevolume',
          usa: 1971
        }, {
          name: 'pro',
          usa: 1100,
          canada: 1108
        }, {
          name: 'pro2',
          usa: 1850
        }, {
          name: 'provolume',
          usa: 1970
        }, {
          name: 'elite',
          usa: 1099,
          canada: 1107
        }, {
          name: 'elite2',
          usa: 1849
        }, {
          name: 'elitevolume',
          usa: 2009
        }, {
          name: 'elite-new',
          usa: 2186,
          canada: 2192
        }, {
          name: 'select',
          usa: 1098,
          canada: 1106
        }, {
          name: 'select2',
          usa: 1848
        }, {
          name: 'selectvolume',
          usa: 1969
        }, {
          name: 'select-new',
          usa: 2184,
          canada: 2188
        }, {
          name: 'plus',
          usa: 1097,
          canada: 1105
        }, {
          name: 'plus2',
          usa: 1847
        }, {
          name: 'plusvolume',
          usa: 1968
        }, {
          name: 'plus-new',
          usa: 2182,
          canada: 2189
        }, {
          name: 'paygo',
          usa: 1096,
          canada: 1104
        }, {
          name: 'paygo2',
          usa: 1845
        }, {
          name: 'paygovolume',
          usa: 1966
        }, {
          name: 'paygoslider',
          usa: 2072,
          canada: 2072
        }, {
          name: 'paygo-new',
          usa: 2178,
          canada: 2191
        }];

        var _pidToSet5 = _pidArray5.find(function (x) {
          return x.name === pidStr;
        });

        if (_pidToSet5) {
          signupPackageId = isCanada ? _pidToSet5.canada || _defaultPackage5.canada : _pidToSet5.usa;
        } else if (isNumeric(pidStr)) {
          signupPackageId = +pidStr;
        } else {
          signupPackageId = isCanada ? _defaultPackage5.canada : _defaultPackage5.usa;
        }
      } else {
        signupPackageId = isCanada ? _defaultPackage5.canada : _defaultPackage5.usa;
      }

      initCountryChangeHandler();
    }
  }

  function runSignupWidget() {
    initPasswordVisibilityToggle();
    initFullNameValidation();
    initEmailValidation();
    initUserNameBackendValidation();
    initPasswordValidation();
    initSelectedCountry();
    initSubmitButton();
  }

  function initPasswordVisibilityToggle() {
    var icon = SignupWidget.template.querySelector('div.signup-form-icon');
    var eye = SignupWidget.template.querySelector('svg use');

    if (icon && eye) {
      icon.addEventListener('click', function () {
        var isOpen = eye.getAttribute('xlink:href') === '#eye-open';
        eye.setAttribute('xlink:href', isOpen ? '#eye-slash' : '#eye-open');
        SignupWidget.passwordEl.type = isOpen ? 'text' : 'password';
      });
    }
  }

  function toggleGroupError(groupElement, isError) {
    if (isError && !groupElement.classList.contains('has-error')) {
      groupElement.classList.add('has-error');
    } else if (!isError && groupElement.classList.contains('has-error')) {
      groupElement.classList.remove('has-error');
    }
  }

  function setupInputTouchedValidation(element, validationFunc) {
    element.addEventListener('focus', function focusHandler() {
      var initialValue = element.value;
      element.addEventListener('keyup', function keyUpHandler() {
        var newValue = element.value;

        if (newValue !== initialValue) {
          element.removeEventListener('focus', focusHandler);
          element.removeEventListener('keyup', keyUpHandler);
          element.addEventListener('blur', function blurHandler() {
            element.removeEventListener('blur', blurHandler);
            validationFunc();
            element.addEventListener('keyup', function () {
              validationFunc();
            });
          });
        }
      });
    });
  }

  function setValidationError(errorElement, errorText, groupElement) {
    errorElement.innerHTML = errorText;
    toggleGroupError(groupElement, errorText.length > 0);
  }

  function validateFullName() {
    var currentValue = SignupWidget.fullNameEl.value; //required

    if (currentValue.length <= 0) {
      return setValidationError(SignupWidget.fullNameErrorEl, Errors.FullNameRequired, SignupWidget.fullNameGroupEl);
    } //minLength


    if (currentValue.length <= 2) {
      return setValidationError(SignupWidget.fullNameErrorEl, Errors.FullNameMin, SignupWidget.fullNameGroupEl);
    } //first+last


    var firstNameSplit = currentValue.split(' ').filter(function (x) {
      return x.trim().length > 0;
    });

    if (firstNameSplit.length < 2) {
      return setValidationError(SignupWidget.fullNameErrorEl, Errors.FullName, SignupWidget.fullNameGroupEl);
    } //valid


    toggleGroupError(SignupWidget.fullNameGroupEl, false);
  }

  function initFullNameValidation() {
    setupInputTouchedValidation(SignupWidget.fullNameEl, validateFullName);
  }

  function validateEmail() {
    var currentValue = SignupWidget.emailEl.value; //required or invalid

    var emailRegExp = new RegExp('^[a-z0-9.!#$%&â€™+/=?_`\'{|}~-]+@[a-z0-9-]+(\\.[a-z0-9-]+)+$', 'i');

    if (currentValue.length <= 0 || !emailRegExp.test(currentValue)) {
      return setValidationError(SignupWidget.emailErrorEl, Errors.Email, SignupWidget.emailGroupEl);
    } //valid


    toggleGroupError(SignupWidget.emailGroupEl, false);
  }

  function initEmailValidation() {
    setupInputTouchedValidation(SignupWidget.emailEl, validateEmail);
  }

  function initUserNameBackendValidation() {
    SignupWidget.emailEl.addEventListener('blur', function () {
      setTimeout(function () {
        var currentEmail = SignupWidget.emailEl.value;

        if (currentEmail) {
          validateUserNameBackend(false);
        }
      }, 100);
    });
  }

  function validatePassword() {
    var currentValue = SignupWidget.passwordEl.value; //required

    if (currentValue.length <= 0) {
      return setValidationError(SignupWidget.passwordErrorEl, Errors.PasswordRequired, SignupWidget.passwordGroupEl);
    } //minLength


    if (currentValue.length < 5) {
      return setValidationError(SignupWidget.passwordErrorEl, Errors.PasswordMin, SignupWidget.passwordGroupEl);
    } //maxLength


    if (currentValue.length > 20) {
      return setValidationError(SignupWidget.passwordErrorEl, Errors.PasswordMax, SignupWidget.passwordGroupEl);
    } //valid


    toggleGroupError(SignupWidget.passwordGroupEl, false);
  }

  function initPasswordValidation() {
    setupInputTouchedValidation(SignupWidget.passwordEl, validatePassword);
  }

  function initSelectedCountry() {
    if (SignupWidget.config.blockCountrySelection) {
      SignupWidget.countrySel.parentElement.style.display = 'none';
      return;
    }

    var selectedCountry = getQueryVariable('country');

    if (selectedCountry && (selectedCountry === '1' || selectedCountry === '2')) {
      SignupWidget.countrySel.value = selectedCountry;
    }
  }

  function initCountryChangeHandler() {
    SignupWidget.countrySel.addEventListener('change', function () {
      var hostname = location.hostname;
      var isCanada = SignupWidget.countrySel.value === '2';

      if (hostname.indexOf(DOMAINS.EZ) !== -1) {
        var defaultPackage = {
          usa: 2180,
          canada: 2190
        };

        if (signupPackageId) {
          var pidArray = [{
            usa: [1096, 1845, 1966, 6],
            canada: [1104, 66],
            name: "Pay & Go"
          }, {
            usa: [2178],
            canada: [2191],
            name: "Pay & Go"
          }, {
            usa: [1097, 1847, 1968, 49],
            canada: [1105, 54],
            name: "Plus"
          }, {
            usa: [2182],
            canada: [2189],
            name: "Plus"
          }, {
            usa: [1098, 1848, 1969, 50],
            canada: [1106, 55],
            name: "Select"
          }, {
            usa: [2184],
            canada: [2188],
            name: "Select"
          }, {
            usa: [1099, 1849, 2009, 51],
            canada: [1107, 56],
            name: "Elite"
          }, {
            usa: [2186],
            canada: [2192],
            name: "Elite"
          }, {
            usa: [1100, 1850, 1970, 164],
            canada: [1108, 165],
            name: "Pro"
          }, {
            usa: [1101, 1851, 1971, 58],
            canada: [1109, 59],
            name: "Bronze"
          }, {
            usa: [1102, 1852, 1972, 60],
            canada: [1110, 61],
            name: "Silver"
          }, {
            usa: [1103, 1853, 1973, 62],
            canada: [1111, 63],
            name: "Gold"
          }, {
            usa: [1475],
            canada: [1942],
            name: "Free & EZ"
          }, {
            usa: [1957],
            canada: [1958],
            name: "Free Trial"
          }, {
            usa: [2180],
            canada: [2190],
            name: "Free Trial"
          }];
          var pidToSet = pidArray.find(function (x) {
            return x[isCanada ? 'usa' : 'canada'].includes(signupPackageId);
          });

          if (pidToSet) {
            signupPackageId = isCanada ? pidToSet.canada[0] : pidToSet.usa[0];
          } else {
            signupPackageId = isCanada ? defaultPackage.canada : defaultPackage.usa;
          }
        } else {
          signupPackageId = isCanada ? defaultPackage.canada : defaultPackage.usa;
        }
      } else if (hostname.indexOf(DOMAINS.CLUB) !== -1) {
        var _defaultPackage6 = {
          usa: 496,
          canada: 488
        };

        if (signupPackageId) {
          var _pidArray6 = [{
            usa: [496],
            canada: [488],
            name: "Pay & Go"
          }, {
            usa: [481, 497],
            canada: [489],
            name: "Basic"
          }, {
            usa: [482],
            canada: [490],
            name: "Plus"
          }, {
            usa: [483],
            canada: [491],
            name: "Elite"
          }, {
            usa: [484],
            canada: [492],
            name: "Premium"
          }, {
            usa: [485],
            canada: [493],
            name: "Pro"
          }, {
            usa: [486],
            canada: [494],
            name: "txt30k"
          }, {
            usa: [487],
            canada: [495],
            name: "txt50k"
          }];

          var _pidToSet6 = _pidArray6.find(function (x) {
            return x[isCanada ? 'usa' : 'canada'].includes(signupPackageId);
          });

          if (_pidToSet6) {
            signupPackageId = isCanada ? _pidToSet6.canada[0] : _pidToSet6.usa[0];
          } else {
            signupPackageId = isCanada ? _defaultPackage6.canada : _defaultPackage6.usa;
          }
        } else {
          signupPackageId = isCanada ? _defaultPackage6.canada : _defaultPackage6.usa;
        }
      }
    });
  }

  function validateSignupForm() {
    validateFullName();
    validateEmail();
    validatePassword();
  }

  function getSignUpPackageId() {
    var signupPackageCookieValue = getCookie('SignUpPackage');
    return signupPackageId ? signupPackageId : signupPackageCookieValue ? +signupPackageCookieValue : 0;
  }

  function getSignUpPrepaidDiscount() {
    var signupPrepaidDiscountCookieValue = getCookie('SignUpPrepaidDiscount');
    var prepaidQuery = getQueryVariable('prepaid');
    return prepaidQuery && isNumeric(prepaidQuery) ? +prepaidQuery : signupPrepaidDiscountCookieValue ? +signupPrepaidDiscountCookieValue : 0;
  }

  function getSignupFormSubmitValue() {
    return {
      userName: SignupWidget.emailEl.value,
      fullName: SignupWidget.fullNameEl.value,
      email: SignupWidget.emailEl.value,
      password: SignupWidget.passwordEl.value,
      country: +SignupWidget.countrySel.value,
      params: {
        extendedSignupFlow: true,
        packageId: getSignUpPackageId(),
        prepaidDiscountId: getSignUpPrepaidDiscount()
      },
      cookies: getAllCookies()
    };
  }

  function initSubmitButton() {
    SignupWidget.submitBtn.addEventListener('click', function () {
      if (!isUsernameValid) {
        return validateUserNameBackend(true);
      }

      makeSignupRequest();
    });
  }

  function validateUserNameBackend(submitSignupIfValid) {
    if (SignupWidget.emailGroupEl.classList.contains('has-error')) {
      return false;
    }

    getRequest("".concat(SignupWidget.config.validateUsernameUrl, "?username=").concat(encodeURIComponent(SignupWidget.emailEl.value)), function onSuccess() {
      isUsernameValid = true;

      if (submitSignupIfValid) {
        makeSignupRequest();
      }
    }, function onError(xhrResponseText) {
      isUsernameValid = false;
      handleSignupError(xhrResponseText);
    });
    return true;
  }

  function isFormValid() {
    return !SignupWidget.fullNameGroupEl.classList.contains('has-error') && !SignupWidget.emailGroupEl.classList.contains('has-error') && !SignupWidget.passwordGroupEl.classList.contains('has-error');
  }

  function makeSignupRequest() {
    validateSignupForm();

    if (!isRequestInProgress && isFormValid()) {
      isRequestInProgress = true;
      postRequest(SignupWidget.config.signupUrl, JSON.stringify(getSignupFormSubmitValue()), handleSignupSuccess, handleSignupError);
    }
  }

  function updateTokenFromResponse(response) {
    ['accessToken', 'refreshToken', 'rememberMe'].forEach(function (cookieKey) {
      if (cookieKey in response) {
        removeCookie(CookieNames[cookieKey]);
        var expireDate = new Date();

        if (cookieKey === 'accessToken') {
          expireDate.setSeconds(expireDate.getSeconds() + response['expiresIn']);
        } else {
          expireDate.setFullYear(expireDate.getFullYear() + 1);
        }

        setCookie(CookieNames[cookieKey], response[cookieKey], expireDate);
      } else {
        if (SignupWidget.config.isDebug) {
          console.log("".concat(CookieNames[cookieKey], " not found in auth response"), response);
        }
      }
    });
  }

  function handleSignupSuccess(xhrResponseText) {
    isRequestInProgress = false;
    setDefaultErrorMessage(''); //Set account activation tracking cookie

    var activationTrackingExpireDate = new Date();
    activationTrackingExpireDate.setFullYear(activationTrackingExpireDate.getFullYear() + 1);
    setCookie(SignupWidget.config.trackingCookieName, 'no', activationTrackingExpireDate); //Handle authentication

    if (isJsonString(xhrResponseText)) {
      updateTokenFromResponse(JSON.parse(xhrResponseText));
    }

    if (location.href.indexOf('eztexting.com/start/partners') !== -1 && SignupWidget.config.drupalUrl) {
      sendToDrupal();
    }

    redirectToIndexPage();
  }

  function handleSignupError(xhrErrorResponseText) {
    isRequestInProgress = false;
    setDefaultErrorMessage('');

    if (isJsonString(xhrErrorResponseText)) {
      var errorResponse = JSON.parse(xhrErrorResponseText);

      if ('errors' in errorResponse) {
        errorResponse.errors.forEach(function (error) {
          return parseError(error);
        });
      }
    }
  }

  function sendToDrupal() {
    var fullName = SignupWidget.fullNameEl.value;
    var pos = fullName.indexOf(" ");
    var firstName = fullName.substring(0, pos);
    var lastName = fullName.substring(pos).trim();
    postRequest(SignupWidget.config.drupalUrl + 'partnerspage_ajax', {
      firstname: firstName,
      lastname: lastName,
      email: SignupWidget.emailEl.value
    }, redirectToIndexPage, redirectToIndexPage);
  }

  function setDefaultErrorMessage(errorMessage) {
    SignupWidget.defaultErrorEl.innerHTML = errorMessage;
  }

  function parseError(error) {
    if (error.code in GuestSignupFormExceptionMapping) {
      return setValidationError(SignupWidget.emailErrorEl, GuestSignupFormExceptionMapping[error.code], SignupWidget.emailGroupEl);
    }

    switch (+error.code) {
      case 451:
      case 452:
      case 453:
      case 454:
      case 455:
      case 456:
        setValidationError(SignupWidget.emailErrorEl, GuestSignupFormMapping[+error.code], SignupWidget.emailGroupEl);
        break;

      case 460:
      case 461:
      case 462:
      case 463:
        setValidationError(SignupWidget.passwordErrorEl, GuestSignupFormMapping[+error.code], SignupWidget.passwordGroupEl);
        break;

      case 470:
      case 471:
      case 472:
      case 473:
      case 474:
      case 475:
        setValidationError(SignupWidget.fullNameErrorEl, GuestSignupFormMapping[+error.code], SignupWidget.fullNameGroupEl);
        break;

      default:
        setDefaultErrorMessage(defaultErrorMessage);
    }
  }
  /* Utils */


  function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim(); // Change this to div.childNodes to support multiple top-level nodes

    return div.firstChild;
  }

  function getDomainForCookie() {
    return "".concat(location.hostname === 'localhost' ? 'localhost' : SignupWidget.config.cookieDomain);
  }

  function redirectToIndexPage() {
    var redirectUrl = SignupWidget.config.redirectUrl;
    var queryString = location.search;

    if (queryString.length > 0) {
      queryString = queryString.substring(1);
      var urlParams = {};
      var hrefString = '?';
      var pairs = queryString.split('&').forEach(function (pair) {
        var splitted = pair.split('=');
        urlParams[splitted[0]] = splitted[1];
      });
      var param = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'c3ch', 'c3nid', 'c3apidt', 'medium', 'ppc_keyword', 'ds_rl', 'gclid', 'gclsrc', 'msclkid', 'hsCtaTracking'];
      Object.keys(urlParams).forEach(function (urlParam) {
        if (param.indexOf(urlParam) >= 0) {
          hrefString += urlParam + '=' + urlParams[urlParam];
        }
      });
      redirectUrl += hrefString.slice(0, -1);
    }

    window.location.href = redirectUrl;
  }

  function request(method, url, params, success, error) {
    var errorTriggered = false;
    var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.withCredentials = true;

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          success(xhr.responseText);
        } else {
          if (!errorTriggered) {
            errorTriggered = true;
            error(xhr.responseText, xhr.status);
          }
        }
      }
    };

    xhr.onerror = function () {
      if (!errorTriggered) {
        errorTriggered = true;
        error(xhr.responseText, xhr.status);
      }
    };

    xhr.send(params);
  }

  function postRequest(url, params, success, error) {
    return request('POST', url, params, success, error);
  }

  function getRequest(url, success, error) {
    return request('GET', url, null, success, error);
  }

  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }

  function getAllCookies() {
    return document.cookie.split('; ').reduce(function (prev, current) {
      var _current$split = current.split('='),
          _current$split2 = _slicedToArray(_current$split, 2),
          name = _current$split2[0],
          value = _current$split2[1];

      prev[name] = value;
      return prev;
    }, {});
  }

  function setCookie(name, value, expireDate) {
    var expires = "; expires=" + expireDate.toUTCString();
    var domain = "; domain=" + getDomainForCookie();
    var path = "; path=/";
    document.cookie = name + "=" + (value || "") + expires + domain + path;
  }

  function removeCookie(cookieName) {
    if (getCookie(cookieName)) {
      document.cookie = encodeURIComponent(cookieName) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + "; domain=" + getDomainForCookie() + "; path=/";
    }
  }

  function isJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }

    return true;
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (decodeURIComponent(pair[0]) == variable) {
        return decodeURIComponent(pair[1]);
      }
    }

    return null;
  }

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  /* Initialization */


  window['SignupWidget'] = function (selector, config) {
    window.addEventListener('load', function () {
      initWidget(document.querySelector(selector), config);
    });
  };
})();
//# sourceMappingURL=signup-widget.js.map