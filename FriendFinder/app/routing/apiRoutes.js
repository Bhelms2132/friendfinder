var friendData = require("../data/friends")
module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
      });
    app.post("/api/friends", function(req, res) {
        var userScore = req.body.scores;
        const scoresArr = [];
        var bestMatch = 0;
        for (var i = 0; i < friendData.length; i++) {
          var scoreDiff = 0;
          for (var j = 0; j < userScore.length; j++) {
              scoreDiff += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(userScore[j])))
          }
          scoresArr.push(scoreDiff);
      }
     // loop through ours scoresArr
      for (var i = 0; i < scoresArr.length; i++) {
          if (scoresArr[i] <= scoresArr[bestMatch]) {
              bestMatch = i;
          }
      }
     // return the best match
      var soulMate = friendData[bestMatch];
      res.json(soulMate);
      friendData.push(req.body)
  });
  app.post("/api/clear", function(req, res) {
      // Empty out the arrays of data
      friendData.length = [];
      res.json({
          ok: true
      });
      });
};