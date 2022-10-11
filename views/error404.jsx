const React = require("react");
const Def = require("./default");

function error404 () {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <div>
          <img
            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
            alt="404 Image"
            className="Pic404"
          ></img>
        </div>
        <p>Oops! sorry, we cannot find this page your looking for.</p>
      </main>
    </Def>
  );
}

module.exports = error404;
