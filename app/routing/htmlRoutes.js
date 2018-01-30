// Your htmlRoutes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

// GET method route
app.get('/survey', function (req, res) {
  res.send('GET request to the survey')
})