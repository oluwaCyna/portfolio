import React from 'react'

const ProfilePage = () => {
  return (
    <div className="row py-5">
      <div className="col-sm-6 pb-2 width">
        <img
          className="d-block w-100 h-100"
          src="https://i.ibb.co/6mCnFLS/Profile-Page.png"
          alt="Profile Page"
        />
      </div>
      <div className="col-sm-6 d-flex align-items-center width">
        <div className="project-card bg-black">
          <div className="face1">
            <div className="content">
              <p className="profile-page">
                A one page login and profile page. You can only login with the email address availble on the page. 
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>Login & Profile Page</h2>
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
          <a className="btn btn-primary px-4 fsize button-link" href="https://oluwacyna-profile-page.netlify.app/" target="_blank">View Live</a>
          <a className="btn btn-primary px-4 fsize button-link" href="https://github.com/oluwaCyna/Profile-page" target="_blank">GitHub Repo</a>
      </div>
    </div>
  )
}

export default ProfilePage