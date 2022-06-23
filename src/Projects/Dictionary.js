import React from 'react'

const Dictionary = () => {
  return (
    <div className="row py-5">
      <div className="col-6">
        <img
          className="d-block w-100"
          src="https://i.ibb.co/fM4KKj4/Dictionary.png"
          alt="Dictionary"
        />
      </div>
      <div className="col-6 d-flex align-items-end">
        <div className="project-card bg-black">
          <div className="face1">
            <div className="content">
              <span className="stars"></span>
              <p className="dictionary">
                A Dictonary where you can check meaning of words, sound, synonyns, antonyms, part of speech and examples of its usuage.
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>Dictionary</h2>
          </div>
        </div>
      </div>

      <div className="row my-4 mx-auto">
        <button
          type="button"
          className="btn btn-primary rounded p-2 text-left disabled"
        >
          HTML | CSS | javaScript | API
        </button>
      </div>

      <div className="row w-25 gap-4 mx-auto ">
          <button className="btn btn-primary px-4"><a className="button-link" href="https://cerulean-gecko-790125.netlify.app/" target="_blank">View Live</a></button>
          <button className="btn btn-primary px-4"><a className="button-link" href="https://github.com/oluwaCyna/Dictionary" target="_blank">GitHub Repo</a></button>
      </div>
    </div>
  )
}

export default Dictionary