function driftChat(){!function(){function e(e){"loading"!=document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",function(){"loading"!=document.readyState&&e()})}function t(e,t){for(var n=document.querySelectorAll(e),o=0;o<n.length;o++)t(n[o],o)}function n(e,t){return t.preventDefault(),e.sidebar.open(),!1}var o=".drift-open-chat";e(function(){drift.on("ready",function(e){var o=n.bind(this,e);t(".drift-open-chat",function(e){e.addEventListener("click",o)})})})}()}!function($){function e(){$(".microsite .pricing4 .boxes a.price-arrow.price-arrow-right.fa.fa-arrow-right").attr("href","/sms/high-volume-pricing")}function t(){$(".microsite .pricing4 .boxes a.price-arrow.price-arrow-left.fa.fa-arrow-left").attr("href","/sms/pricing")}function n(e,t,n){$(".slider-suggestion h3 span").text(e),$(".pkg-desc span.text-amount").text(t)}function o(e){$("#sign-up-btn").attr("href","/start?pid="+e)}function i(){var e=Cookies.get("_vis_opt_exp_376_combi"),t=Cookies.get("_vis_opt_exp_378_combi");"1"==e?(console.log("Volume: none, FreeTrial: 1"),$("a.btn.btn-rounded.btn-orange.btn-sign-up").attr("href","/start?pid=free"),$("a.header-btns--try").attr("href","/start?pid=free"),$(".form-sect8-btn a").attr("href","/start?pid=free")):"2"==e&&(console.log("Volume: none, FreeTrial: 2"),$("a.btn.btn-rounded.btn-orange.btn-sign-up").attr("href","/start?pid=freetrial"),$("a.header-btns--try").attr("href","/start?pid=freetrial"),$(".form-sect8-btn a").attr("href","/start?pid=freetrial"),$("#freeEZ").attr("style","display: none"),$("#freetrial").attr("style","display: block")),"1"==t?"1"==e?(console.log("Volume: 1, FreeTrial: 1"),$("a.btn.btn-rounded.btn-orange.btn-sign-up").attr("href","/start?pid=free"),$("a.header-btns--try").attr("href","/start?pid=free"),$(".form-sect8-btn a").attr("href","/start?pid=free")):"2"==e&&(console.log("Volume: 1, FreeTrial: 2"),$("a.btn.btn-rounded.btn-orange.btn-sign-up").attr("href","/start?pid=freetrial"),$("a.header-btns--try").attr("href","/start?pid=freetrial"),$(".form-sect8-btn a").attr("href","/start?pid=freetrial"),$("#freeEZ").attr("style","display: none"),$("#freetrial").attr("style","display: block")):"2"==t&&($("body").addClass("free-volume-pricing"),$('a[href="/start"').attr("href","/start?pid=paygovolume"),"1"==e?(console.log("Volume: 2, FreeTrial: 1"),$("#freeEZ").attr("style","display: none"),$("#freetrial").attr("style","display: none"),$("#volumefreeEZ").attr("style","display: block"),$("#volumefreetrial").attr("style","display: none")):"2"==e&&(console.log("Volume: 2, FreeTrial: 2"),$("#freeEZ").attr("style","display: none"),$("#freetrial").attr("style","display: none"),$("#volumefreeEZ").attr("style","display: none"),$("#volumefreetrial").attr("style","display: block")))}function a(){var e=2147483648;return Math.floor(Math.random()*e).toString(36)+Math.abs(Math.floor(Math.random()*e)^Date.now).toString(36)}function r(e,t,n,o){t(Cookies.get(e))&&Cookies.set(e,n(),o)}$(".micro-home .wrapper_v7_int div").addClass("header-titles"),$(".micro-home .header-titles").append('<div class="header-btns"></div>'),$(".micro-home .header-btns").append('<a class="header-btns--watch"><img alt="play icon" class="play-icon" src="/sites/default/files/Images/microsite/play-icon-header.png"> <span>Watch the Video</span></a>'),$(".micro-home .header-btns").append('<a class="header-btns--try" href="/start"><div class="header-btns--try-btn" name="button" type="button">Try It For Free</div></a>'),$(".micro-home div.header-btns").after('<h2 class="subtitle">Text </h2>'),$(".micro-home h2.subtitle").append("<b>TRY</b>").append(" to ").append("<b>858585</b>").append(" to see how it works"),console.log("header buttons loaded"),$(".micro-home .learn-more").on("click",function(){$("#overlay").show(500)}),$(".micro-home #overlay").on("click",function(){$("#overlay").css("display","none")}),$(".micro-home .header-btns--watch").on("click",function(){$("#header-overlay").show(300)}),$(".micro-home #header-overlay").on("click",function(){$("#header-overlay").hide();var e=$(".video-home").attr("src");$(".video-home").attr("src",""),$(".video-home").attr("src",e)}),$(".micro-home .timer").countTo({from:4078023246,to:4078028e3,speed:1e6,formatter:function(e,t){return e=e.toFixed(t.decimals),e=e.replace(/\B(?=(\d{3})+(?!\d))/g,",")}});var s=["/sites/all/themes/ez/dist/images/micro-home/iphone-promote.jpg","/sites/all/themes/ez/dist/images/micro-home/iphone-notify.jpg","/sites/all/themes/ez/dist/images/micro-home/iphone-coordinate.jpg"],l=$(".cta-sect1 div.right-image"),c=0;setInterval(function(){l.css("background-image","url("+s[c]+")"),(c+=1)==s.length&&(c=0)},7e3),$(".see-more-btn").on("click",function(){$(".business-row.education, .business-row.fitness, .business-row.health").toggle(500),console.log("business section toggled"),"see more"==document.getElementsByClassName("see-more-btn--span")[0].innerText?(document.getElementsByClassName("see-more-btn--span")[0].innerText="see less",document.getElementsByClassName("btn-caret")[0].style.transform="rotate(-135deg)",document.getElementsByClassName("btn-caret")[0].style["-webkit-transform"]="rotate(-135deg)",document.getElementsByClassName("btn-caret")[0].style.bottom="-0.2vw"):"see less"==document.getElementsByClassName("see-more-btn--span")[0].innerText&&(document.getElementsByClassName("see-more-btn--span")[0].innerText="see more",document.getElementsByClassName("btn-caret")[0].style.transform="rotate(45deg)",document.getElementsByClassName("btn-caret")[0].style["-webkit-transform"]="rotate(45deg)")}),$(".section").on("click",".feat-right--bottom-content h2",function(){console.log("link clicked"),console.log(this),$(this).parent().parent().parent().parent().parent().siblings(".iframe-full-bg").show("200")}),$(".section").on("click",".feat-right--bottom-img img.play-icon",function(){console.log("link clicked"),console.log(this),$(this).parent().parent().parent().parent().parent().siblings(".iframe-full-bg").show("200")}),$(".section").on("click",".iframe-exit-btn",function(){console.log("exit button clicked"),console.log(this),$(this).parent(".iframe-container").parent(".iframe-full-bg").hide("100");var e=$(this).siblings(".video").attr("src");$(this).siblings(".video").attr("src",""),$(this).siblings(".video").attr("src",e)}),setTimeout(e,800),setTimeout(t,800),$(document).on("scroll",function(){$(window).width()<=1280?$(document).scrollTop()>850?$("#sub-header-container").removeClass("fixed-position"):$("#sub-header-container").addClass("fixed-position"):$(window).width()<=1920&&($(document).scrollTop()>780?$("#sub-header-container").removeClass("fixed-position"):$("#sub-header-container").addClass("fixed-position"))}),$(".radio-container.monthly").on("click",function(){console.log("monthly button clicked"),$(".skinny-column .column-header--price").text("$10").append("<span>/month</span>"),$(".core-column .column-header--price").text("$20").append("<span>/month</span>"),$(".pro-column .column-header--price").text("$40").append("<span>/month</span>")}),$(".radio-container.annual").on("click",function(){console.log("annual button clicked"),$(".skinny-column .column-header--price").text("$9").append("<span>/month</span>"),$(".core-column .column-header--price").text("$18").append("<span>/month</span>"),$(".pro-column .column-header--price").text("$36").append("<span>/month</span>")});var d="monthly";$(".monthly-plan").click(function(){d="monthly",$(".alert-annual").addClass("not-visible"),$(".text-amount").text("1,000"),$(".slider-list li.active").trigger("click")}),$(".annual-plan").click(function(){d="annually",$(".alert-annual").removeClass("not-visible"),$(".text-amount").text("12,000"),$(".slider-list li.active").trigger("click")}),$("#pa").click(function(){"monthly"===d?(n("$49","500"),o("plus")):(n("$37","6,000"),o("plusvolume"))}),$("#pb").click(function(){"monthly"===d?(n("$94","1,000"),o("select")):(n("$71","12,000"),o("selectvolume"))}),$("#pc").click(function(){"monthly"===d?(n("$149","3,000"),o("elite")):(n("$112","36,000"),o("elitevolume"))}),$("#pd").click(function(){"monthly"===d?(n("$129"),o("pro")):(n("$97"),o("provolume"))}),$("#pe").click(function(){"monthly"===d?(n("$250","5,000"),o("pro")):(n("$188","60,000"),o("provolume"))}),$("#pf").click(function(){"monthly"===d?(n("$450","10,000"),o("bronze")):(n("$338","120,000"),o("bronzevolume"))}),$("#pg").click(function(){"monthly"===d?(n("$1100","20,000"),o("silver")):(n("$825","240,000"),o("silvervolume"))}),$("#ph").click(function(){"monthly"===d?(n("$2000","50,000"),o("gold")):(n("$1500","600,000"),o("goldvolume"))}),$(".slider-list li").click(function(){$(".slider-list li").removeClass("active"),$(this).addClass("active"),$(".slider-suggestion, .slider-actions").removeClass("hide"),$("#more").addClass("hide")}),$("#pi").click(function(){$(".slider-suggestion, .slider-actions").addClass("hide"),$("#more").removeClass("hide")}),$(".annual-plan").click(function(){$(".alert-annual").removeClass("not-visible"),$(".text-amount").text("12,000")}),$(".monthly-plan").click(function(){$(".alert-annual").addClass("not-visible"),$(".text-amount").text("1,000")}),$(".slider-list li").click(function(){$(".slider-list li").removeClass("active"),$(this).addClass("active"),$(".slider-suggestion, .slider-actions").removeClass("hide"),$("#more").addClass("hide")}),$("#pa").click(function(){$(".slider-suggestion h3 span").text("$49")}),$("#pb").click(function(){$(".slider-suggestion h3 span").text("$94")}),$("#pc").click(function(){$(".slider-suggestion h3 span").text("$149")}),$("#pd").click(function(){$(".slider-suggestion h3 span").text("$129")}),$("#pe").click(function(){$(".slider-suggestion h3 span").text("$250")}),$("#pf").click(function(){$(".slider-suggestion h3 span").text("$450")}),$("#pg").click(function(){$(".slider-suggestion h3 span").text("$1100")}),$("#ph").click(function(){$(".slider-suggestion h3 span").text("$2000")}),$("#pi").click(function(){$(".slider-suggestion, .slider-actions").addClass("hide"),$("#more").removeClass("hide")}),i();var m="EZID",u=36500,p="/";r("EZID",function(e){return void 0===e||e.length<=0},a,{expires:36500,path:"/",domain:".eztexting.com",secure:!0})}(jQuery),setTimeout(driftChat,1e3);