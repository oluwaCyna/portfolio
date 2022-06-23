import React from 'react'

const Calculator = () => {
  return (
    <div className="row py-5">
      <div className="col-6">
        <img
          className="d-block w-100"
          src="https://i.ibb.co/4MPNdmM/Calculator.png"
          alt="Calculator"
        />
      </div>
      <div className="col-6 d-flex align-items-end">
        <div className="project-card bg-black">
          <div className="face1">
            <div className="content">
              <span className="stars"></span>
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

      <div className="row w-25 gap-4 mx-auto ">
          <button className="btn btn-primary px-4"><a className="button-link" href="https://oluwacyna-calculator.netlify.app/" target="_blank">View Live</a></button>
          <button className="btn btn-primary px-4"><a className="button-link" href="https://github.com/oluwaCyna/Calculator-" target="_blank">GitHub Repo</a></button>
      </div>
    </div>
  )
}

export default Calculator