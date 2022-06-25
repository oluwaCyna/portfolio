import React from 'react'

const MultiplicationTable = () => {
  return (
    <div className="row py-5">
      <div className="col-sm-6 pb-2 width">
        <img
          className="d-block w-100 h-100"
          src="https://i.ibb.co/LJV01zR/Multiplication-Table.png"
          alt="Multiplication Table"
        />
      </div>
      <div className="col-sm-6 d-flex align-items-center width">
        <div className="project-card bg-black">
          <div className="face1">
            <div className="content">
              <p className="multiplication">
                Just a basic multiplication table.
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>Multiplication Table</h2>
          </div>
        </div>
      </div>

      <div className="row my-4 mx-auto">
        <button
          type="button"
          className="btn btn-primary rounded p-2 text-left disabled"
        >
          HTML | CSS | javaScript | Bootstrap 5
        </button>
      </div>

      <div className="row gap-4 mx-auto btn-width">
          <button className="btn btn-primary px-4 fsize"><a className="button-link" href="https://oluwacyna-multiplication-table.netlify.app/" target="_blank">View Live</a></button>
          <button className="btn btn-primary px-4 fsize"><a className="button-link" href="https://github.com/oluwaCyna/multiplication-table" target="_blank">GitHub Repo</a></button>
      </div>
    </div>
  )
}

export default MultiplicationTable