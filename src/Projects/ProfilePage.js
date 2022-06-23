import React from 'react'

const ProfilePage = () => {
  return (
    <div className="row py-5">
      <div className="col-6">
        <img
          className="d-block w-100"
          src="https://i.ibb.co/6mCnFLS/Profile-Page.png"
          alt="Profile Page"
        />
      </div>
      <div className="col-6 d-flex align-items-end">
        <div className="project-card bg-black">
          <div className="face1">
            <div className="content">
              <span className="stars"></span>
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

      <div className="row w-25 gap-4 mx-auto ">
          <button className="btn btn-primary px-4"><a className="button-link" href="https://oluwacyna-profile-page.netlify.app/" target="_blank">View Live</a></button>
          <button className="btn btn-primary px-4"><a className="button-link" href="https://github.com/oluwaCyna/Profile-page" target="_blank">GitHub Repo</a></button>
      </div>
    </div>
  )
}

export default ProfilePage