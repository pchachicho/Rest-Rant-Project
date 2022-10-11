const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>Home</h1>
        <div>
          <img
            src="../images/Queso-Image.jpeg"
            alt="Queso Dip With Chips"
            className="Queso"
          ></img>
          <div>
            Photo by{" "}
            <a href="https://barefeetinthekitchen.com/about/">Mary Younkin</a>{" "}
            on{" "}
            <a href="https://barefeetinthekitchen.com/the-best-queso-blanco-dip-recipe/">
              Barefeet in the kitchen
            </a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
