!(function() {
  const SignupWidget = {
      config: {
        brand: "",
        isDebug: !1,
        novaUrl: "",
        signupUrl: "",
        validateUsernameUrl: "",
        trackingCookieName: "AccountCreationTracked",
        redirectUrl: "/",
        cookieDomain: ".eztexting.com"
      }
    },
    n = {
      accessToken: "AccessToken",
      refreshToken: "RefreshToken",
      rememberMe: "RememberMe"
    };
  let e = !1,
    r = !0;
  const o = {
      FullNameRequired: "Please enter a Full Name.",
      FullNameMin: "You name must be at least 3 characters.",
      FullName: "Please enter your first and last name.",
      Email: "Please enter a valid email address",
      PasswordMin: "Your password must be at least 5 characters long",
      PasswordMax: "Please enter max 20 characters",
      PasswordRequired: "Please provide a password"
    },
    s = {
      BadUserNameException: "Invalid email.",
      BadWordInUserNameException: "Email may not contain prohibited words.",
      DuplicateUserNameException: "Email you entered is already in use."
    },
    a = {
      451: "Username already exists",
      452: "Username must be between 5 and 100 characters",
      453: "Username contains illegal characters",
      454: "Email must be between 5 and 100 characters",
      455: "Email contains illegal characters",
      456: "Email address is invalid",
      460: "Password must be between 5 and 20 characters",
      461: "Password contains illegal characters",
      462: "Password cannot match username",
      463: "Password cannot match email",
      470: "Full name must be between 3 and 30 characters",
      471: "Please enter your first and last name",
      472: "First name must be between 1 and 15 characters",
      473: "First name contains illegal characters",
      474: "Last name must be between 1 and 15 characters",
      475: "Last name contains illegal characters"
    },
    i = "Oops! Something went wrong";
  function t(n, e) {
    var o;
    (e &&
      "object" == typeof e &&
      (Object.assign(SignupWidget.config, e),
      (e.novaUrl || e.brand) &&
        ((SignupWidget.config.signupUrl =
          SignupWidget.config.novaUrl +
          "/" +
          SignupWidget.config.brand +
          "/signup"),
        (SignupWidget.config.validateUsernameUrl =
          SignupWidget.config.novaUrl +
          "/" +
          SignupWidget.config.brand +
          "/signup/username/validate"))),
    SignupWidget.config.brand)
      ? SignupWidget.config.novaUrl
        ? n
          ? ((o = (function(n) {
              const e = v(
                  '\n<div id="signup-widget">\n        <form class="signup-form" novalidate>\n            <div class="signup-form-group">\n                <label class="signup-form-label" for="fullName">Full Name</label>\n                <input class="signup-form-control" type="text" id="fullName" placeholder="e.g. Jane Smith" maxlength="30">\n                <label class="signup-form-error" for="fullName">Please enter a Full Name</label>\n            </div>\n\n            <div class="signup-form-group">\n                <label class="signup-form-label" for="email">Email</label>\n                <input class="signup-form-control" type="text" id="email" maxlength="100">\n                <label class="signup-form-error" for="email">Please enter a valid email address</label>\n            </div>\n\n            <div class="signup-form-group">\n                <label class="signup-form-label" for="password">Password</label>\n                <div class="signup-form-input-wrapper">\n                    <input class="signup-form-control" id="password" type="password"\n                           placeholder="5 characters or more">\n                    <label class="signup-form-error" for="password">Please provide a password</label>\n                    <div class="signup-form-icon">\n                        <svg class="signup-form-eye" viewBox="0 0 512 512">\n                            <use xlink:href="#eye-open"/>\n                            \x3c!-- To show eye-slash change attribute \'xlink:href\' to \'#eye-slash\' --\x3e\n                        </svg>\n                    </div>\n                </div>\n            </div>\n\n            <div class="signup-form-group">\n                <label class="signup-form-label" for="accountCountry">Deliver My Texts To</label>\n                <select class="signup-form-control" id="accountCountry">\n                    <option value="1">USA</option>\n                    <option value="2">Canada</option>\n                </select>\n            </div>\n\n            <input class="signup-form-submit" type="button" value="Start for free">\n\n            <div class="signup-form-group has-error">\n                <label class="signup-form-error" id="defaultError"></label>\n            </div>\n        </form>\n\n        <svg class="signup-form-icon-sprite" viewBox="0 0 512 512">\n            <g id="eye-open">\n                <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687   c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818   c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68   c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699   C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554   c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704   c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971   c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999   c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04   c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222   c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362   s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362   c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04   z"/>\n            </g>\n            <g id="eye-slash">\n                <path d="M361.161,291.652c15.037-21.796,22.56-45.922,22.56-72.375c0-7.422-0.76-15.417-2.286-23.984l-79.938,143.321    C326.235,329.101,346.125,313.438,361.161,291.652z"/>\n                <path d="M372.872,94.221c0.191-0.378,0.28-1.235,0.28-2.568c0-3.237-1.522-5.802-4.571-7.715c-0.568-0.38-2.423-1.475-5.568-3.287    c-3.138-1.805-6.14-3.567-8.989-5.282c-2.854-1.713-5.989-3.472-9.422-5.28c-3.426-1.809-6.375-3.284-8.846-4.427    c-2.479-1.141-4.189-1.713-5.141-1.713c-3.426,0-6.092,1.525-7.994,4.569l-15.413,27.696c-17.316-3.234-34.451-4.854-51.391-4.854    c-51.201,0-98.404,12.946-141.613,38.831C70.998,156.08,34.836,191.385,5.711,236.114C1.903,242.019,0,248.586,0,255.819    c0,7.231,1.903,13.801,5.711,19.698c16.748,26.073,36.592,49.396,59.528,69.949c22.936,20.561,48.011,37.018,75.229,49.396    c-8.375,14.273-12.562,22.556-12.562,24.842c0,3.425,1.524,6.088,4.57,7.99c23.219,13.329,35.97,19.985,38.256,19.985    c3.422,0,6.089-1.529,7.992-4.575l13.99-25.406c20.177-35.967,50.248-89.931,90.222-161.878    C322.908,183.871,352.886,130.005,372.872,94.221z M158.456,362.885C108.97,340.616,68.33,304.93,36.547,255.822    c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.206-17.417,64.237c0,20.365,4.661,39.68,13.99,57.955    c9.327,18.274,22.27,33.4,38.83,45.392L158.456,362.885z M265.525,155.887c-2.662,2.667-5.906,3.999-9.712,3.999    c-16.368,0-30.361,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971c0,3.811-1.336,7.044-3.999,9.71    c-2.668,2.667-5.902,3.999-9.707,3.999c-3.809,0-7.045-1.334-9.71-3.999c-2.667-2.666-3.999-5.903-3.999-9.71    c0-23.79,8.52-44.206,25.553-61.242c17.034-17.034,37.447-25.553,61.241-25.553c3.806,0,7.043,1.336,9.713,3.999    c2.662,2.664,3.996,5.901,3.996,9.707C269.515,149.992,268.181,153.228,265.525,155.887z"/>\n                <path d="M505.916,236.114c-10.853-18.08-24.603-35.594-41.255-52.534c-16.646-16.939-34.022-31.496-52.105-43.68l-17.987,31.977    c31.785,21.888,58.625,49.87,80.51,83.939c-23.024,35.782-51.723,65-86.07,87.648c-34.358,22.661-71.712,35.693-112.065,39.115    l-21.129,37.688c42.257,0,82.18-9.038,119.769-27.121c37.59-18.076,70.668-43.488,99.216-76.225    c13.322-15.421,23.695-29.219,31.121-41.401c3.806-6.476,5.708-13.046,5.708-19.702    C511.626,249.157,509.724,242.59,505.916,236.114z"/>\n            </g>\n        </svg>\n    </div>\n        '
                ),
                r = v(
                  "\n<style>\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');\n\n#signup-widget .signup-form {\n    font-family: 'Open Sans', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    display: block;\n    color: rgb(132, 145, 163);\n    line-height: 1.8;\n}\n\n#signup-widget .signup-form-group {\n    margin-bottom: 15px;\n}\n\n#signup-widget .signup-form-group.has-error .signup-form-error {\n    display: block;\n    color: rgb(140, 46, 11);\n}\n\n#signup-widget .signup-form-group.has-error .signup-form-label {\n    color: rgb(140, 46, 11);\n}\n\n#signup-widget .signup-form-group.has-error .signup-form-control {\n    border-color: rgb(169, 68, 66);\n    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n}\n\n#signup-widget .signup-form-group.has-error .signup-form-control:focus {\n    border-color: rgb(132, 53, 52);\n    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 6px rgb(206, 132, 131);\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 6px rgb(206, 132, 131);\n}\n\n#signup-widget .signup-form-label {\n    display: inline-block;\n    margin-bottom: 5px;\n    font-weight: 700;\n}\n\n#signup-widget .signup-form-control {\n    display: block;\n    width: 100%;\n    height: 34px;\n    padding: 6px 12px;\n    background-color: rgb(255, 255, 255);\n    border: 1px solid rgb(204, 204, 204);\n    border-radius: 4px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    font-size: 14px;\n    color: rgb(85, 85, 85);\n    -webkit-transition: .15s ease-in-out;\n    -o-transition: .15s ease-in-out;\n    transition: .15s ease-in-out;\n}\n\n#signup-widget .signup-form-control:focus {\n    border-color: rgb(102, 175, 233);\n    outline: 0;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);\n}\n\n#signup-widget .signup-form-input-wrapper {\n    position: relative;\n}\n\n#signup-widget .signup-form-icon {\n    position: absolute;\n    top: 1px;\n    right: 1px;\n    width: 32px;\n    height: 32px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    padding: 6px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    cursor: pointer;\n    fill: rgb(132, 145, 163);\n\n}\n\n#signup-widget .signup-form-eye {\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n}\n\n#signup-widget .signup-form-icon-sprite {\n    display: none;\n}\n\n#signup-widget .signup-form-submit {\n    margin-top: 5px;\n    padding: 12px 18px;\n    background-color: rgb(47, 201, 127);\n    border: 1px solid rgb(47, 201, 127);\n    border-radius: 3px;\n    color: rgb(255, 255, 255);\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 24px;\n    text-transform: uppercase;\n    cursor: pointer;\n    -webkit-transition: background-color .3s;\n    -o-transition: background-color .3s;\n    transition: background-color .3s;\n}\n\n#signup-widget .signup-form-submit:hover {\n    color: rgb(47, 201, 127);\n    background-color: transparent;\n}\n\n#signup-widget .signup-form-submit:focus {\n    outline: 0;\n    -webkit-box-shadow: 0 0 6px rgb(133, 138, 155);\n    box-shadow: 0 0 6px rgb(133, 138, 155);\n}\n\n#signup-widget .signup-form-submit:active {\n    outline: 0;\n    -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125);\n    box-shadow: inset 0 3px 5px rgba(0,0,0,.125);\n}\n\n#signup-widget .signup-form-error {\n    display: none;\n    font-weight: 700;\n    margin-bottom: 5px;\n}\n\n#signup-widget .signup-form-control::-moz-placeholder {\n    color: rgb(153, 153, 153);\n    opacity: 1\n}\n\n#signup-widget .signup-form-control:-ms-input-placeholder {\n    color: rgb(153, 153, 153)\n}\n\n#signup-widget .signup-form-control::-webkit-input-placeholder {\n    color: rgb(153, 153, 153)\n}\n\n#signup-widget .signup-form-control::-ms-expand {\n    border: 0;\n    background-color: transparent\n}\n</style>"
                );
              return document.head.appendChild(r), n.appendChild(e), e;
            })(n)),
            (SignupWidget.template = o),
            (SignupWidget.fullNameEl = o.querySelector("#fullName")),
            (SignupWidget.fullNameGroupEl =
              SignupWidget.fullNameEl.parentElement),
            (SignupWidget.fullNameErrorEl = SignupWidget.fullNameGroupEl.querySelector(
              "label.signup-form-error"
            )),
            (SignupWidget.emailEl = o.querySelector("#email")),
            (SignupWidget.emailGroupEl = SignupWidget.emailEl.parentElement),
            (SignupWidget.emailErrorEl = SignupWidget.emailGroupEl.querySelector(
              "label.signup-form-error"
            )),
            (SignupWidget.passwordEl = o.querySelector("#password")),
            (SignupWidget.passwordGroupEl =
              SignupWidget.passwordEl.parentElement.parentElement),
            (SignupWidget.passwordErrorEl = SignupWidget.passwordGroupEl.querySelector(
              "label.signup-form-error"
            )),
            (SignupWidget.countrySel = o.querySelector("#accountCountry")),
            (SignupWidget.submitBtn = o.querySelector(
              "input.signup-form-submit"
            )),
            (SignupWidget.defaultErrorEl = o.querySelector("#defaultError")),
            SignupWidget.config.isDebug &&
              console.log("Signup Widget template inserted!"),
            (function() {
              const n = SignupWidget.template.querySelector(
                  "div.signup-form-icon"
                ),
                e = SignupWidget.template.querySelector("svg use");
              n &&
                e &&
                n.addEventListener("click", function() {
                  const n = "#eye-open" === e.getAttribute("xlink:href");
                  e.setAttribute("xlink:href", n ? "#eye-slash" : "#eye-open"),
                    (SignupWidget.passwordEl.type = n ? "text" : "password");
                });
            })(),
            c(SignupWidget.fullNameEl, p),
            c(SignupWidget.emailEl, d),
            SignupWidget.emailEl.addEventListener("blur", function() {
              setTimeout(function() {
                const n = SignupWidget.emailEl.value;
                n && f(!1);
              }, 100);
            }),
            c(SignupWidget.passwordEl, g),
            SignupWidget.submitBtn.addEventListener("click", function() {
              if (!r) return f(!0);
              b();
            }))
          : console.warn("Signup Widget is loaded, but container not found")
        : console.warn(
            "SignupWidget: novaUrl is missing.\n            Please, provide the value as SignupWidget('containerSelector', { novaUrl: URL })"
          )
      : console.warn(
          "SignupWidget: brand is missing.\n            Please, provide the value as SignupWidget('containerSelector', { brand: BRAND })"
        );
  }
  function l(n, e) {
    e && !n.classList.contains("has-error")
      ? n.classList.add("has-error")
      : !e &&
        n.classList.contains("has-error") &&
        n.classList.remove("has-error");
  }
  function c(n, e) {
    n.addEventListener("focus", function r() {
      const o = n.value;
      n.addEventListener("keyup", function s() {
        n.value !== o &&
          (n.removeEventListener("focus", r),
          n.removeEventListener("keyup", s),
          n.addEventListener("blur", function r() {
            n.removeEventListener("blur", r),
              e(),
              n.addEventListener("keyup", function() {
                e();
              });
          }));
      });
    });
  }
  function u(n, e, r) {
    (n.innerHTML = e), l(r, e.length > 0);
  }
  function p() {
    const n = SignupWidget.fullNameEl.value;
    return n.length <= 0
      ? u(
          SignupWidget.fullNameErrorEl,
          o.FullNameRequired,
          SignupWidget.fullNameGroupEl
        )
      : n.length <= 2
      ? u(
          SignupWidget.fullNameErrorEl,
          o.FullNameMin,
          SignupWidget.fullNameGroupEl
        )
      : n.split(" ").filter(n => n.trim().length > 0).length < 2
      ? u(
          SignupWidget.fullNameErrorEl,
          o.FullName,
          SignupWidget.fullNameGroupEl
        )
      : void l(SignupWidget.fullNameGroupEl, !1);
  }
  function d() {
    const n = SignupWidget.emailEl.value,
      e = new RegExp(
        "^[a-z0-9.!#$%&â€™+/=?_`'{|}~-]+@[a-z0-9-]+(\\.[a-z0-9-]+)+$",
        "i"
      );
    if (n.length <= 0 || !e.test(n))
      return u(SignupWidget.emailErrorEl, o.Email, SignupWidget.emailGroupEl);
    l(SignupWidget.emailGroupEl, !1);
  }
  function g() {
    const n = SignupWidget.passwordEl.value;
    return n.length <= 0
      ? u(
          SignupWidget.passwordErrorEl,
          o.PasswordRequired,
          SignupWidget.passwordGroupEl
        )
      : n.length < 5
      ? u(
          SignupWidget.passwordErrorEl,
          o.PasswordMin,
          SignupWidget.passwordGroupEl
        )
      : n.length > 20
      ? u(
          SignupWidget.passwordErrorEl,
          o.PasswordMax,
          SignupWidget.passwordGroupEl
        )
      : void l(SignupWidget.passwordGroupEl, !1);
  }
  function m() {
    return {
      userName: SignupWidget.emailEl.value,
      fullName: SignupWidget.fullNameEl.value,
      email: SignupWidget.emailEl.value,
      password: SignupWidget.passwordEl.value,
      country: +SignupWidget.countrySel.value,
      params: {
        extendedSignupFlow: !0,
        packageId: (function() {
          const n = N("SignUpPackage");
          return n ? +n : 0;
        })(),
        prepaidDiscountId: (function() {
          const n = N("SignUpPrepaidDiscount");
          return n ? +n : 0;
        })()
      },
      cookies: document.cookie.split("; ").reduce((n, e) => {
        const [r, o] = e.split("=");
        return (n[r] = o), n;
      }, {})
    };
  }
  function f(n) {
    return (
      !SignupWidget.emailGroupEl.classList.contains("has-error") &&
      (k(
        "GET",
        `${
          SignupWidget.config.validateUsernameUrl
        }?username=${encodeURIComponent(SignupWidget.emailEl.value)}`,
        null,
        function() {
          (r = !0), n && b();
        },
        function(n) {
          (r = !1), E(n);
        }
      ),
      !0)
    );
  }
  function b() {
    var n, r;
    p(),
      d(),
      g(),
      e ||
        SignupWidget.fullNameGroupEl.classList.contains("has-error") ||
        SignupWidget.emailGroupEl.classList.contains("has-error") ||
        SignupWidget.passwordGroupEl.classList.contains("has-error") ||
        ((e = !0),
        (n = SignupWidget.config.signupUrl),
        (r = JSON.stringify(m())),
        k("POST", n, r, h, E));
  }
  function w(e) {
    var r;
    ["accessToken", "refreshToken", "rememberMe"].forEach(o => {
      if (o in e) {
        N((r = n[o])) &&
          (document.cookie =
            encodeURIComponent(r) +
            "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=" +
            y() +
            "; path=/");
        const s = new Date();
        "accessToken" === o
          ? s.setSeconds(s.getSeconds() + e.expiresIn)
          : s.setFullYear(s.getFullYear() + 1),
          S(n[o], e[o], s);
      } else
        SignupWidget.config.isDebug &&
          console.log(`${n[o]} not found in auth response`, e);
    });
  }
  function h(n) {
    (e = !1), x("");
    const r = new Date();
    r.setFullYear(r.getFullYear() + 1),
      S(SignupWidget.config.trackingCookieName, "no", r),
      U(n) && w(JSON.parse(n)),
      (window.location.href = SignupWidget.config.redirectUrl);
  }
  function E(n) {
    if (((e = !1), x(""), U(n))) {
      const e = JSON.parse(n);
      "errors" in e &&
        e.errors.forEach(n =>
          (function(n) {
            if (n.code in s)
              return u(
                SignupWidget.emailErrorEl,
                s[n.code],
                SignupWidget.emailGroupEl
              );
            switch (+n.code) {
              case 451:
              case 452:
              case 453:
              case 454:
              case 455:
              case 456:
                u(
                  SignupWidget.emailErrorEl,
                  a[+n.code],
                  SignupWidget.emailGroupEl
                );
                break;
              case 460:
              case 461:
              case 462:
              case 463:
                u(
                  SignupWidget.passwordErrorEl,
                  a[+n.code],
                  SignupWidget.passwordGroupEl
                );
                break;
              case 470:
              case 471:
              case 472:
              case 473:
              case 474:
              case 475:
                u(
                  SignupWidget.fullNameErrorEl,
                  a[+n.code],
                  SignupWidget.fullNameGroupEl
                );
                break;
              default:
                x(i);
            }
          })(n)
        );
    }
  }
  function x(n) {
    SignupWidget.defaultErrorEl.innerHTML = n;
  }
  function v(n) {
    var e = document.createElement("div");
    return (e.innerHTML = n.trim()), e.firstChild;
  }
  function y() {
    return `${
      "localhost" === location.hostname
        ? "localhost"
        : SignupWidget.config.cookieDomain
    }`;
  }
  function k(n, e, r, o, s) {
    let a = !1;
    const i = XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
    i.open(n, e, !0),
      i.setRequestHeader("Content-Type", "application/json"),
      (i.withCredentials = !0),
      (i.onreadystatechange = function() {
        4 === i.readyState &&
          (200 === i.status
            ? o(i.responseText)
            : a || ((a = !0), s(i.responseText, i.status)));
      }),
      (i.onerror = function() {
        a || ((a = !0), s(i.responseText, i.status));
      }),
      i.send(r);
  }
  function N(n) {
    const e = document.cookie.match(new RegExp("(^| )" + n + "=([^;]+)"));
    return e ? e[2] : null;
  }
  function S(n, e, r) {
    const o = "; expires=" + r.toUTCString(),
      s = "; domain=" + y();
    document.cookie = n + "=" + (e || "") + o + s + "; path=/";
  }
  function U(n) {
    try {
      JSON.parse(n);
    } catch (n) {
      return !1;
    }
    return !0;
  }
  window.SignupWidget = function(n, e) {
    window.addEventListener("load", function() {
      t(document.querySelector(n), e);
    });
  };
})();
