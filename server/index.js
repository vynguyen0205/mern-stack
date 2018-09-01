const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

require("./models/User");
require("./models/Survey");
require("./services/passport");

// Establish database connection
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

// Create express app
const app = express();

//Middilewares configuration
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 10 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

//Routes configuration
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

//Serve the front-end
if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static("client/build"));

  // Express will serve up index.html if it doesn't find any routes that match
  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//Start up the server
const PORT = process.env.PORT || 5000;
app.listen(PORT);
