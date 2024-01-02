const React = require('react')
const Def = require('../default')

function edit_form (data) {

    return (
        <Def>
        <main>
          <h1>Edit a Place</h1>
          <form method="POST" action={`/places/${data.id}?_method=PUT`}>
            <div className="row">
            <div className="form-group">
              <label htmlFor="name">Place Name</label>
              <input  className="form-control col-sm-6" id="name"  defaultValue={data.place.name} name="name" required />
            </div>
            <div className="form-group"> 
              <label htmlFor="pic">Place Picture</label>
              <input className="form-control col-sm-6"  id="pic" defaultValue={data.place.pic} name="pic" />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input className="form-control col-sm-6" id="city" defaultValue={data.place.city} name="city" />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input className="form-control col-sm-6" id="state" defaultValue={data.place.state} name="state" />
            </div>
            <div className="form-group">
              <label htmlFor="cuisines">Cuisines</label>
              <input className="form-control col-sm-6" id="cuisines" defaultValue={data.place.cuisines} name="cuisines" required />
            </div>
            </div>
            
            <input className="btn btn-primary" type="submit"/>
          </form>
        </main>
      </Def>
    )
}

module.exports = edit_form
