import React from 'react'

const Ecommerce = () => {
  return (
    <div className="row py-5">
      <div className="col-sm-6 pb-2 width">
        <img
          className="d-block w-100 h-100"
          src="https://i.ibb.co/48gNwJY/Ecommerce.png"
          alt="E commerce"
        />
      </div>
      <div className="col-sm-6 d-flex align-items-center width">
        <div className="project-card bg-black">
          <div className="face1">
            <div className="content">
              <p className="ecommerce">
                An E commerce platform with some basic features. It's an on going project, more features to be added.
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>E commerce website</h2>
          </div>
        </div>
      </div>

      <div className="row my-4 mx-auto">
        <button
          type="button"
          className="btn btn-primary rounded p-2 text-left disabled"
        >
          HTML | CSS | Bootstrap 5 | React | javaScript | API
        </button>
      </div>

      <div className="row gap-4 mx-auto btn-width">
          <a className="btn btn-primary px-4 fsize button-link" href="https://oluwacyna-ecommerce.netlify.app/" target="_blank">View Live</a>
          <a className="btn btn-primary px-4 fsize button-link" href="https://github.com/oluwaCyna/e-commerce" target="_blank">GitHub Repo</a>
      </div>
    </div>
  )
}

export default Ecommerce