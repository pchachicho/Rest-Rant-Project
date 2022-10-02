const router = require("express").Router();

router.get("/", (req, res) => {
  let places = [
    {
      name: "Mi Cancun",
      city: "Cary",
      state: "NC",
      cuisines: "Mexican",
      pic: "http://placekitten.com/250/250",
    },
    {
      name: "Taziki's Mediterranean Cafe",
      city: "Cary",
      state: "NC",
      cuisines: "Mediterranean, Cafe",
      pic: "http://placekitten.com/250/250",
    },
  ];
  res.render("places/index", { places });
});

module.exports = router;
