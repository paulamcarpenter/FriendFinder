// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
   
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var friends = [
  {
    friendsName: "paula",
    friendsPhoto: "https://www.google.com/search?q=photos+of+people&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjCp5mtpIXZAhUM6WMKHRELCiIQ_AUICigB&biw=1517&bih=735#imgrc=238OF2zKYEDY4M:",
    friendsScore: [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  },
  {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350
  }
];

// Routes
// =============================================================
// require(path.join(__dirname, './app/routing/apiRoutes'))(app);
// require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/survey.html"));
})

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Get all characters
app.get("/all", function(req, res) {
  res.json(friends);
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:friends?", function(req, res) {
  var chosen = req.params.friends;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }
    return res.json(false);
  }
  return res.json(friends);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newfriend = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newfriend);

  characters.push(newfriend);

  res.json(newfriend);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
