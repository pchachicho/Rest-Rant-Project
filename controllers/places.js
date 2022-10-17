const router = require("express").Router();
const places = require("../models/places.js");

router.get("/new", (req, res) => {
  res.render("places/new");
});
router.get("/", (req, res) => {
  let places = [
    {
      name: "Mi Cancun",
      city: "Cary",
      state: "NC",
      cuisines: "Mexican",
      pic: "/images/Cary.jpeg",
    },
    {
      name: "Taziki's Mediterranean Cafe",
      city: "Cary",
      state: "NC",
      cuisines: "Mediterranean, Cafe",
      pic: "/images/RTP.jpeg",
    },
  ];
  res.render("places/index", { places });
});
router.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body.pic) {
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = "USA"
  }
  places.push(req.body)
  res.redirect("/places");
});

module.exports = router;
