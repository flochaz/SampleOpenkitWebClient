$(function() {
 $('button#register').click(function() {
    var nickname = $('input:text#nickname').val();
    var gameKey = 'sMeQMYVh1jSJZZ62l2';
    $('#hellonickname').html(' the ' + nickname);
         $.post("http://openkit-server.cloudfoundry.com/users", 
         {
             "api":  gameKey,  
             "app_key": gameKey, 
             "user": { 
                 "nick": nickname,
                 "custom_id": Math.floor((Math.random()*100)+1)
                 }
             },
             null,
             "json"
         )
        .done(function(data) {
            alert("Data Loaded: " + data);
        });
    });
})