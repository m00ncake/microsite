/*******************/
// Contact Us Page //
/*******************/
function driftChat(){!function(){function e(e){"loading"!=document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",function(){"loading"!=document.readyState&&e()})}function n(e,t){for(var n=document.querySelectorAll(e),o=0;o<n.length;o++)t(n[o],o)}function o(e,t){return t.preventDefault(),e.sidebar.open(),!1}var i=".drift-open-chat";e(function(){drift.on("ready",function(e){var t=o.bind(this,e);n(i,function(e){e.addEventListener("click",t)})})})}()}!function(o){
/****************************/
//      Pricings Page       //
/****************************/
// Pricing Page Right Arrow link mod
function e(){o(".microsite .pricing4 .boxes a.price-arrow.price-arrow-right.fa.fa-arrow-right").attr("href","/sms/high-volume-pricing")}
// High Volume Pricing Page Left Arrow link mod
function t(){o(".microsite .pricing4 .boxes a.price-arrow.price-arrow-left.fa.fa-arrow-left").attr("href","/sms/pricing")}function n(e,t,n){o(".slider-suggestion h3 span").text(e),o(".pkg-desc span.text-amount").text(t)}function i(e){o("#sign-up-btn").attr("href","/start?pid="+e)}
/***********************************/
//          Sign Up Page           //
/***********************************/
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
function a(){var e=Cookies.get("_vis_opt_exp_376_combi"),t=Cookies.get("_vis_opt_exp_378_combi");
//  only Free Trial Cookie without Volume Cookie  //
"1"==e?(console.log("Volume: none, FreeTrial: 1"),
//   Home Page CTA href mods  //
o("a.btn.btn-rounded.btn-orange.btn-sign-up").attr("href","/start?pid=free"),o("a.header-btns--try").attr("href","/start?pid=free"),o(".form-sect8-btn a").attr("href","/start?pid=free")):"2"==e&&(console.log("Volume: none, FreeTrial: 2"),
//   Home Page CTA href mods  //
o("a.btn.btn-rounded.btn-orange.btn-sign-up").attr("href","/start?pid=freetrial"),o("a.header-btns--try").attr("href","/start?pid=freetrial"),o(".form-sect8-btn a").attr("href","/start?pid=freetrial"),
//   Pricing Page Pricing Block Toggle  //
o("#freeEZ").attr("style","display: none"),o("#freetrial").attr("style","display: block")),
//  VWO Control Group  //
"1"==t?
//  VWO Variation 1  //
"1"==e?(console.log("Volume: 1, FreeTrial: 1"),
//   Home Page CTA href mods  //
o("a.btn.btn-rounded.btn-orange.btn-sign-up").attr("href","/start?pid=free"),o("a.header-btns--try").attr("href","/start?pid=free"),o(".form-sect8-btn a").attr("href","/start?pid=free")):"2"==e&&(console.log("Volume: 1, FreeTrial: 2"),
//   Home Page CTA href mods  //
o("a.btn.btn-rounded.btn-orange.btn-sign-up").attr("href","/start?pid=freetrial"),o("a.header-btns--try").attr("href","/start?pid=freetrial"),o(".form-sect8-btn a").attr("href","/start?pid=freetrial"),
//   Pricing Page Pricing Block Toggle  //
o("#freeEZ").attr("style","display: none"),o("#freetrial").attr("style","display: block")):"2"==t&&(
//   Home Page CTA href mods  //
o("body").addClass("free-volume-pricing"),o('a[href="/start"').attr("href","/start?pid=paygovolume"),"1"==e?(console.log("Volume: 2, FreeTrial: 1"),o("#freeEZ").attr("style","display: none"),o("#freetrial").attr("style","display: none"),o("#volumefreeEZ").attr("style","display: block"),o("#volumefreetrial").attr("style","display: none")):"2"==e&&(console.log("Volume: 2, FreeTrial: 2"),o("#freeEZ").attr("style","display: none"),o("#freetrial").attr("style","display: none"),o("#volumefreeEZ").attr("style","display: none"),o("#volumefreetrial").attr("style","display: block")))}
// Taken from https://github.com/google/closure-library/blob/555e0138c83ed54d25a3e1cd82a7e789e88335a7/closure/goog/string/string.js#L1177
function s(){var e=2147483648;return Math.floor(Math.random()*e).toString(36)+Math.abs(Math.floor(Math.random()*e)^Date.now).toString(36)}
// shouldUpdateFn(cookieValue) and should return true or false
// cookieValueFn() and should return some string value
// cookieParams is an object with
// expires: string (days it will expire in)
// path: string
// domain: string
// secure: boolean
function r(e,t,n,o){t(Cookies.get(e))&&Cookies.set(e,n(),o)}
/***************************/
//        Home Page        //
/***************************/
// Microsite NavBar Mod
// $(".microsite a.navbar-brand").attr('href', '/sms');
// $(".microsite .menu-393 a, .microsite .menu-1832 a, .microsite .menu-3317 a, .microsite .menu-1566 a").css('opacity', '1');
// $(".microsite .menu-393 a").attr('href', '/sms/features');
// $(".microsite .menu-1832 a").text('how it works').attr('href', '/how-it-works');
// $(".microsite .menu-3317 a").text('pricing').attr('href', '/ez-texting-pricing');
// $(".microsite .menu-1566 a").text('faqs').attr('href', '/mass-texting-faqs');
// $(".microsite a.btn-sign-up").attr('href', '/sms/start');
// Micro-Home Header Button & H2 Add-Ons
o(".micro-home .wrapper_v7_int div").addClass("header-titles"),o(".micro-home .header-titles").append('<div class="header-btns"></div>'),o(".micro-home .header-btns").append('<a class="header-btns--watch"><img alt="play icon" class="play-icon" src="/sites/default/files/Images/microsite/play-icon-header.png"> <span>Watch the Video</span></a>'),o(".micro-home .header-btns").append('<a class="header-btns--try" href="/start"><div class="header-btns--try-btn" name="button" type="button">Try It For Free</div></a>'),o(".micro-home div.header-btns").after('<h2 class="subtitle">Text </h2>'),o(".micro-home h2.subtitle").append("<b>TRY</b>").append(" to ").append("<b>858585</b>").append(" to see how it works"),console.log("header buttons loaded"),
// Microsite Footer Mods
// $(".microsite .disclaimer-row .col-sm-8 .disclaimer:first-child a:first-child").attr('href', '/ez-texting-privacy-policy');
// $(".microsite .disclaimer-row .col-sm-8 .disclaimer:first-child a:nth-child(2)").attr('href', '/terms-service-0');
// $(".microsite .disclaimer-row .col-sm-8 .disclaimer:first-child a:nth-child(3)").attr('href', '/sms/services-privacy-policy');
// $(".microsite .disclaimer-row .col-sm-8 .disclaimer:first-child a:nth-child(4)").attr('href', '/anti-spam-policy-0');
// $(".microsite .disclaimer-row .col-sm-8 .disclaimer:nth-child(2) a").attr('href', '/ez-texting-help');
// $(".microsite .footer-brand div:nth-child(1) a").attr('href', '/sms');
// Micro-Home YouTube Overlays
o(".micro-home .learn-more").on("click",function(){o("#overlay").show(500)}),o(".micro-home #overlay").on("click",function(){o("#overlay").css("display","none")}),o(".micro-home .header-btns--watch").on("click",function(){o("#header-overlay").show(300)}),o(".micro-home #header-overlay").on("click",function(){o("#header-overlay").hide();var e=o(".video-home").attr("src");o(".video-home").attr("src",""),o(".video-home").attr("src",e)}),
// Micro-Home Counter
o(".micro-home .timer").countTo({from:4078023246,to:4078028e3,speed:1e6,formatter:function(e,t){return e=(e=e.toFixed(t.decimals)).replace(/\B(?=(\d{3})+(?!\d))/g,",")}});
// Promote Notify Coordinate Section Slide Show - image swaps every 7 seconds
var l=["/sites/all/themes/ez/dist/images/micro-home/iphone-promote.jpg","/sites/all/themes/ez/dist/images/micro-home/iphone-notify.jpg","/sites/all/themes/ez/dist/images/micro-home/iphone-coordinate.jpg"],c=o(".cta-sect1 div.right-image"),d=0;setInterval(function(){
// $(".cta-sect1 .right-image").removeClass('bounceInLeft').addClass('bounceInLeft');
c.css("background-image","url("+l[d]+")"),(d+=1)==l.length&&(d=0)},7e3),
// Micro-Home See More Button Toggle 
o(".see-more-btn").on("click",function(){o(".business-row.education, .business-row.fitness, .business-row.health").toggle(500),console.log("business section toggled"),
// $(".see-more-btn").css('display', 'none');
// console.log('button hidden now');
// if($(".see-more-btn").text() == "see more") {
//     console.log('text changed to "see less"');
//     $(".see-more-btn").text("see less");
// } else if ($(".see-more-btn").text() == "see less") {
//     console.log('text changed to "see more"');
//     $(".see-more-btn").text("see more");
// }
"see more"==document.getElementsByClassName("see-more-btn--span")[0].innerText?(document.getElementsByClassName("see-more-btn--span")[0].innerText="see less",document.getElementsByClassName("btn-caret")[0].style.transform="rotate(-135deg)",document.getElementsByClassName("btn-caret")[0].style["-webkit-transform"]="rotate(-135deg)",document.getElementsByClassName("btn-caret")[0].style.bottom="-0.2vw"):"see less"==document.getElementsByClassName("see-more-btn--span")[0].innerText&&(document.getElementsByClassName("see-more-btn--span")[0].innerText="see more",document.getElementsByClassName("btn-caret")[0].style.transform="rotate(45deg)",document.getElementsByClassName("btn-caret")[0].style["-webkit-transform"]="rotate(45deg)")}),
/****************************/
//      Features Page       //
/****************************/
o(".section").on("click",".feat-right--bottom-content h2",function(){console.log("link clicked"),console.log(this),o(this).parent().parent().parent().parent().parent().siblings(".iframe-full-bg").show("200")}),o(".section").on("click",".feat-right--bottom-img img.play-icon",function(){console.log("link clicked"),console.log(this),o(this).parent().parent().parent().parent().parent().siblings(".iframe-full-bg").show("200")}),o(".section").on("click",".iframe-exit-btn",function(){console.log("exit button clicked"),console.log(this),o(this).parent(".iframe-container").parent(".iframe-full-bg").hide("100");var e=o(this).siblings(".video").attr("src");o(this).siblings(".video").attr("src",""),o(this).siblings(".video").attr("src",e)}),setTimeout(e,800),setTimeout(t,800),o(document).on("scroll",function(){
// Scroll/fix feature for 1280px Resolution
o(window).width()<=1280?
// console.log('1280px reached');
850<o(document).scrollTop()?o("#sub-header-container").removeClass("fixed-position"):o("#sub-header-container").addClass("fixed-position"):o(window).width()<=1920&&(
// console.log('1980px reached');
780<o(document).scrollTop()?o("#sub-header-container").removeClass("fixed-position"):o("#sub-header-container").addClass("fixed-position"))}),o(".radio-container.monthly").on("click",function(){console.log("monthly button clicked"),o(".skinny-column .column-header--price").text("$10").append("<span>/month</span>"),o(".core-column .column-header--price").text("$20").append("<span>/month</span>"),o(".pro-column .column-header--price").text("$40").append("<span>/month</span>")}),o(".radio-container.annual").on("click",function(){console.log("annual button clicked"),o(".skinny-column .column-header--price").text("$9").append("<span>/month</span>"),o(".core-column .column-header--price").text("$18").append("<span>/month</span>"),o(".pro-column .column-header--price").text("$36").append("<span>/month</span>")});
/***********************************/
//     Pricing Selector Page       //
/***********************************/
var m="monthly",u,p,h,f;o(".monthly-plan").click(function(){m="monthly",o(".alert-annual").addClass("not-visible"),o(".text-amount").text("1,000"),o(".slider-list li.active").trigger("click")}),o(".annual-plan").click(function(){m="annually",o(".alert-annual").removeClass("not-visible"),o(".text-amount").text("12,000"),o(".slider-list li.active").trigger("click")}),o("#pa").click(function(){"monthly"===m?(n("$49","500"),i("plus")):(n("$37","6,000"),i("plusvolume"))}),o("#pb").click(function(){"monthly"===m?(n("$94","1,000"),i("select")):(n("$71","12,000"),i("selectvolume"))}),o("#pc").click(function(){"monthly"===m?(n("$149","3,000"),i("elite")):(n("$112","36,000"),i("elitevolume"))}),o("#pd").click(function(){"monthly"===m?(n("$129"),i("pro")):(n("$97"),i("provolume"))}),o("#pe").click(function(){"monthly"===m?(n("$250","5,000"),i("pro")):(n("$188","60,000"),i("provolume"))}),o("#pf").click(function(){"monthly"===m?(n("$450","10,000"),i("bronze")):(n("$338","120,000"),i("bronzevolume"))}),o("#pg").click(function(){"monthly"===m?(n("$1100","20,000"),i("silver")):(n("$825","240,000"),i("silvervolume"))}),o("#ph").click(function(){"monthly"===m?(n("$2000","50,000"),i("gold")):(n("$1500","600,000"),i("goldvolume"))}),o(".slider-list li").click(function(){o(".slider-list li").removeClass("active"),o(this).addClass("active"),o(".slider-suggestion, .slider-actions").removeClass("hide"),o("#more").addClass("hide")}),o("#pi").click(function(){o(".slider-suggestion, .slider-actions").addClass("hide"),o("#more").removeClass("hide")}),
/*********** Original CodePen Code from Skinner *************/
o(".annual-plan").click(function(){o(".alert-annual").removeClass("not-visible"),o(".text-amount").text("12,000")}),o(".monthly-plan").click(function(){o(".alert-annual").addClass("not-visible"),o(".text-amount").text("1,000")}),o(".slider-list li").click(function(){o(".slider-list li").removeClass("active"),o(this).addClass("active"),o(".slider-suggestion, .slider-actions").removeClass("hide"),o("#more").addClass("hide")}),o("#pa").click(function(){o(".slider-suggestion h3 span").text("$49")}),o("#pb").click(function(){o(".slider-suggestion h3 span").text("$94")}),o("#pc").click(function(){o(".slider-suggestion h3 span").text("$149")}),o("#pd").click(function(){o(".slider-suggestion h3 span").text("$129")}),o("#pe").click(function(){o(".slider-suggestion h3 span").text("$250")}),o("#pf").click(function(){o(".slider-suggestion h3 span").text("$450")}),o("#pg").click(function(){o(".slider-suggestion h3 span").text("$1100")}),o("#ph").click(function(){o(".slider-suggestion h3 span").text("$2000")}),o("#pi").click(function(){o(".slider-suggestion, .slider-actions").addClass("hide"),o("#more").removeClass("hide")}),a(),r("EZID",function(e){return void 0===e||e.length<=0},s,{expires:36500,path:"/",domain:".eztexting.com",secure:!0})}(jQuery),setTimeout(driftChat,1e3);