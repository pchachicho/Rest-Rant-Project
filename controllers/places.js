const router = require("express").Router();

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

module.exports = router;
