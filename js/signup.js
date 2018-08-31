(function ($) { 
    var firstName = $('#firstName');
    var lastName = $('#lastName');
    var userName = $('#userName');
    var userNameVal = userName.val();
    var userNameLength = 0;
    var random4Digit = Math.floor(1000 + Math.random() * 9000);
    var userNameReg = /^[a-zA-Z0-9.\-_$@*!]{5,12}$/;
    var validUsername = false;
    $('#firstName').on('input', function() {
        console.log(firstName.val());
        userName.val(firstName.val());
        userNameLength = userName.val().length;
        console.log(userNameLength);
    });
    $('#lastName').on('input', function() {
        console.log(firstName.val() + lastName.val() + random4Digit);
        userName.val(firstName.val() + lastName.val() + random4Digit);
        userNameLength = userName.val().length;
        console.log(userNameLength);
        console.log('Regex = ' + userName.val().search(userNameReg));
        if (userNameLength >= 13) {
            userName.val(userName.val().substr(0, 12));
        }
        $("#userName").rules("add", { regex: "^[a-zA-Z0-9.\-_$@*!]{5,12}$" });
    });
    console.log('user name length = ' + userNameLength);
  })(jQuery);
