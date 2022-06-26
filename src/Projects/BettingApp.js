import React from "react";

const BettingApp = () => {
  return (
    <div className="row py-5">
      <div className="col-sm-6 pb-2 width">
        <img
          className="d-block w-100 h-100"
          src="https://i.ibb.co/QKgf90q/Betting-App.png"
          alt="Betting App"
        />
      </div>
      <div className="col-sm-6 d-flex align-items-center width">
        <div className="project-card bg-black card-height">
          <div className="face1">
            <div className="content">
              <p className="betting-app">
                Betting App is a guessing game app with two gane types
                <br />
                1. 2-Sure: You must have 2 correct guesses before you can win.
                <br />
                2. 3-Direct: You must have 3 correct guesses before you can win.
                <br />
                The game will generate 5 random numbers from 1 - 100 inclusive.
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>Betting App</h2>
          </div>
        </div>
      </div>

      <div className="row my-4 mx-auto">
        <button
          type="button"
          className="btn btn-primary rounded p-2 text-left disabled"
        >
          HTML | CSS | Bootstrap 5 | javaScript
        </button>
      </div>

      <div className="row gap-4 mx-auto btn-width">
          <a className="btn btn-primary px-4 fsize button-link" href="https://bucolic-dieffenbachia-b8e7d0.netlify.app/" target="_blank">View Live</a>
          <a className="btn btn-primary px-4 fsize button-link" href="https://github.com/oluwaCyna/betting-app" target="_blank">GitHub Repo</a>
      </div>
    </div>
  );
};

export default BettingApp;
