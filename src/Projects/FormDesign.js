import React from 'react'

const FormDesign = () => {
  return (
    <div className="row py-5">
      <div className="col-6">
        <img
          className="d-block w-100"
          src="https://i.ibb.co/4NXrfL6/Form-Design.png"
          alt="Form Design"
        />
      </div>
      <div className="col-6 d-flex align-items-end">
        <div className="project-card bg-black">
          <div className="face1">
            <div className="content">
              <span className="stars"></span>
              <p className="form-design">
                A Simple Form Design with several input types.
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>Form Design</h2>
          </div>
        </div>
      </div>

      <div className="row my-4 mx-auto">
        <button
          type="button"
          className="btn btn-primary rounded p-2 text-left disabled"
        >
          HTML | CSS 
        </button>
      </div>

      <div className="row w-25 gap-4 mx-auto ">
          <button className="btn btn-primary px-4"><a className="button-link" href="https://oluwacyna-survey-form.netlify.app/" target="_blank">View Live</a></button>
          <button className="btn btn-primary px-4"><a className="button-link" href="https://github.com/oluwaCyna/freeCodeCamp-Survey-Form" target="_blank">GitHub Repo</a></button>
      </div>
    </div>
  )
}

export default FormDesign