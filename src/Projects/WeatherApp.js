import React from 'react'

const WeatherApp = () => {
  return (
    <div className="row py-5">
      <div className="col-sm-6 pb-2 width">
        <img
          className="d-block w-100 h-100"
          src="https://i.ibb.co/3zNq5QB/Weather-App.png"
          alt="Weather App"
        />
      </div>
      <div className="col-sm-6 d-flex align-items-center width">
        <div className="project-card bg-black">
          <div className="face1">
            <div className="content">
              <p className="weather-app">
                A web application where you can check the present weather condition of a place by searching by city. 
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>Weather App</h2>
          </div>
        </div>
      </div>

      <div className="row my-4 mx-auto">
        <button
          type="button"
          className="btn btn-primary rounded p-2 text-left disabled"
        >
          HTML | CSS | Bootstrap 5 | javaScript | API
        </button>
      </div>

      <div className="row gap-4 mx-auto btn-width">
          <a className="btn btn-primary px-4 fsize button-link" href="https://oluwacyna-weather-app.netlify.app/" target="_blank">View Live</a>
          <a className="btn btn-primary px-4 fsize button-link" href="https://github.com/oluwaCyna/Weather-App" target="_blank">GitHub Repo</a>
      </div>
    </div>
  )
}

export default WeatherApp