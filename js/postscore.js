$(function() {
 $('button#postScore').click(function() {
    //var gameId = $('input:text#gameId').val();
    var gameKey = 'sMeQMYVh1jSJZZ62l2';
     var score = $('input:text#score').val();
    $.post("http://openkit-server.cloudfoundry.com/scores", 
         { "app_key": gameKey,
         score: { 
             "leaderboard_id": 1, 
             user_id: 11, 
             value: score, 
             display_string: score + " seconds!"}
         },
         null,
         "json"
     ).done(function(data) {
  alert("Data Loaded: " + data);
});
 });
})