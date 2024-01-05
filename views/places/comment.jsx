const React = require('react')
const Def = require('../default')

function comment_form (data) {

    return (
        <Def>
        <main>
          <h1>Leave a Comment</h1>
          <form method="POST" action={`/places/${data.id}/comment?_method=PUT`}>
            <div className="row">
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input  className="form-control col-sm-6" id="author" name="author" required />
            </div>
            <div className="form-group"> 
              <label htmlFor="content">Content</label>
              <input className="form-control col-sm-6"  id="content" name="content" />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Star Rating</label>
              <input className="form-control col-sm-6" id="rating" name="rating" />
            </div>
            <div className="form-group">
              <label htmlFor="rant">Rant</label>
              <input className="form-control col-sm-6" id="rant" name="rant" />
            </div>
            </div>
            
            <input className="btn btn-primary" type="submit"/>
          </form>
        </main>
      </Def>
    )
}

module.exports = comment_form
