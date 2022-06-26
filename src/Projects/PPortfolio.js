import React from 'react'

const PPortfolio = () => {
  return (
    <div className="row py-5">
      <div className="col-sm-6 pb-2 width">
        <img
          className="d-block w-100 h-100"
          src="https://i.ibb.co/4NpFR8y/Portfolio.png"
          alt="Portfolio"
        />
      </div>
      <div className="col-sm-6 d-flex align-items-center width">
        <div className="project-card bg-black">
          <div className="face1">
            <div className="content">
              <p className="portfolio">
                A Portfolio website to showcase my skills and projects. 
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>Portfolio</h2>
          </div>
        </div>
      </div>

      <div className="row my-4 mx-auto">
        <button
          type="button"
          className="btn btn-primary rounded p-2 text-left disabled"
        >
          HTML | CSS | Bootstrap 5 | React
        </button>
      </div>

      <div className="row gap-4 mx-auto btn-width">
          <a className="btn btn-primary px-4 fsize button-link" href="https://oluwacyna-portfolio.netlify.app/" target="_blank">View Live</a>
          <a className="btn btn-primary px-4 fsize button-link" href="https://github.com/oluwaCyna/portfolio" target="_blank">GitHub Repo</a>
      </div>
    </div>
  )
}

export default PPortfolio