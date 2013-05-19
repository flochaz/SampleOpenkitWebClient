SampleOpenkitWebClient
======================

This application is a basic Javascript (jquery) sample of Openkit-server (openkit.io) web client.


## Register user

JQuery call to register a user.

<pre>

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
</pre>

**PS:** Here we can see that the current openkit-server implementation is a bit strange, api and app_key is the same and both need to be declare in order to pass the filters. A pull request will be done to modify it.
**PS2:** The way of generating custom_id is not production ready => no unicity of id

## Post score

JQuery call to add a score a a leaderboard

<pre>
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
     )
</pre>

