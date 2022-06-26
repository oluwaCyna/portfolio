import React from 'react'

const Calculator = () => {
  return (
    <div className="row py-5">
      <div className="col-sm-6 pb-2 width">
        <img
          className="d-block w-100 h-100"
          src="https://i.ibb.co/4MPNdmM/Calculator.png"
          alt="Calculator"
        />
      </div>
      <div className="col-sm-6 d-flex align-items-center width">
        <div className="project-card bg-black">
          <div className="face1">
            <div className="content">
              <p className="calculator">
                A Simple Calculator that performs basic mathematical operations.
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>Calculator</h2>
          </div>
        </div>
      </div>

      <div className="row my-4 mx-auto">
        <button
          type="button"
          className="btn btn-primary rounded p-2 text-left disabled"
        >
          HTML | CSS | javaScript
        </button>
      </div>

      <div className="row gap-4 mx-auto btn-width">
          <a className="btn btn-primary px-4 fsize button-link" href="https://oluwacyna-calculator.netlify.app/" target="_blank">View Live</a>
          <a className="btn btn-primary px-4 fsize button-link" href="https://github.com/oluwaCyna/Calculator-" target="_blank">GitHub Repo</a>
      </div>
    </div>
  )
}

export default Calculator