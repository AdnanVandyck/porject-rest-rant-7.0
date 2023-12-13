const React = require("react");
const Def = require("../default");

function show({place}) {
  console.log(place.name);

  return (
    <Def>
      <main>
        <div>
        <h2>{place.name}</h2>
        <h3>Rating</h3>
        <p>Not Rated</p>
        </div>

        <div>
        <img src={place.pic} alt={place.name} />
        </div>

        <div>
          <h3>Comments</h3>
          <p>No comments yet!</p>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
