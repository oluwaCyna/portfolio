import React from 'react'

const IDCard = () => {
  return (
    <div className="row py-5">
      <div className="col-sm-6 pb-2 width">
        <img
          className="d-block w-100 h-100"
          src="https://i.ibb.co/kxTjRJX/ID-Card.png"
          alt="ID Card"
        />
      </div>
      <div className="col-sm-6 d-flex align-items-center width">
        <div className="project-card bg-black">
          <div className="face1">
            <div className="content">
              <p className="id-card">
                A web application where users can submit details and generate printable ID Card with a default Avatar image.
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>ID Card</h2>
          </div>
        </div>
      </div>

      <div className="row my-4 mx-auto">
        <button
          type="button"
          className="btn btn-primary rounded p-2 text-left disabled"
        >
          HTML | CSS | javaScript | PHP | Bootstrap 5
        </button>
      </div>

      <div className="row gap-4 mx-auto btn-width">
          <a className="btn btn-primary px-4 fsize button-link" href="https://oluwacyna-id-generator.herokuapp.com/" target="_blank">View Live</a>
          <a className="btn btn-primary px-4 fsize button-link" href="https://github.com/oluwaCyna/id-card-generator" target="_blank">GitHub Repo</a>
      </div>
    </div>
  )
}

export default IDCard