/*************************************************/
//    AJAX Call for High Volume Pricing Form     //
/*************************************************/

(function ($) {

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