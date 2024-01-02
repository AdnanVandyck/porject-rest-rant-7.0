const React = require('react')
const Def = require('./default')


function home() {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>
        {/* <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a> */}
        <div>
            <img src="/images/bbq-plate.jpg" alt="BBQ Plate" />
        </div>
        <div>
                Photo by <a href="https://unsplash.com/@victoriakosmo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Victoria Shes</a> on <a href="https://unsplash.com/photos/grilled-meat-and-vegetable-on-the-table-UC0HZdUitWY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
      </main>
    </Def>
  );
}
  
  module.exports = home