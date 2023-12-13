const React = require("react");
const Def = require("../default");

function show(data) {
  console.log(data.place.name);

  return (
    <Def>
      <main>
        <div>
          <h2>{data.place.name}</h2>
          <h3>Rating</h3>
          <p>Not Rated</p>
        </div>

        <div>
          <img src={data.place.pic} alt={data.place.name} />
        </div>

        <div>
          <h3>Comments</h3>
          <p>No comments yet!</p>
        </div>
        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>

        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
