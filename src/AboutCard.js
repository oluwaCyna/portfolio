import React from 'react'
import { Carousel } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AboutCard.css"
import { faAnchor } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

  const AboutCard = () =>{
  return (
  <>
    <Carousel controls={false}>
      <Carousel.Item>
        <div className='d-flex justify-content-center height'>
        <div className="card card-1">
          <div className="card__icon">
            <FontAwesomeIcon icon={faAnchor} />
          <FontAwesomeIcon icon={faAnchor} />
          </div>
          <h2 className="card__title">I love providing solutions with my web development skills.</h2>
          <p className="card__apply">
            <a className="card__link" href="https://www.linkedin.com/in/shinaa">Contact Now <FontAwesomeIcon icon={faArrowAltCircleRight}/></a>
          </p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex justify-content-center height'>
        <div className="card card-4">
          <div className="card__icon">
            <FontAwesomeIcon icon={faAnchor} />
          <FontAwesomeIcon icon={faAnchor} />
          </div>
          <h2 className="card__title">Expirienced in designing and maintaining CMS website for real time clients.</h2>
          <p className="card__apply">
            <a className="card__link" href="https://www.linkedin.com/in/shinaa">Contact Now <FontAwesomeIcon icon={faArrowAltCircleRight}/></a>
          </p>
        </div>
        </div>
        </Carousel.Item>
        <Carousel.Item>
      <div className='d-flex justify-content-center height'>
        <div className="card card-4">
          <div className="card__icon">
            <FontAwesomeIcon icon={faAnchor} />
          <FontAwesomeIcon icon={faAnchor} />
          </div>
          <h2 className="card__title">Have basic SEO knowledge.</h2>
          <p className="card__apply">
            <a className="card__link" href="https://www.linkedin.com/in/shinaa">Contact Now <FontAwesomeIcon icon={faArrowAltCircleRight}/></a>
          </p>
        </div>
        </div>
        </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex justify-content-center height'>
        <div className="card card-2">
          <div className="card__icon">
            <FontAwesomeIcon icon={faAnchor} />
          <FontAwesomeIcon icon={faAnchor} />
          </div>
          <h2 className="card__title">Active, Dedicated, Commmitted and Ready to learn.</h2>
          <p className="card__apply">
            <a className="card__link" href="https://www.linkedin.com/in/shinaa">Contact Now <FontAwesomeIcon icon={faArrowAltCircleRight}/></a>
          </p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex justify-content-center height'>
        <div className="card card-3">
          <div className="card__icon">
            <FontAwesomeIcon icon={faAnchor} />
          <FontAwesomeIcon icon={faAnchor} />
          </div>
          <h2 className="card__title">Excellent problem-solving skills.</h2>
          <p className="card__apply">
            <a className="card__link" href="https://www.linkedin.com/in/shinaa">Contact Now <FontAwesomeIcon icon={faArrowAltCircleRight}/></a>
          </p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex justify-content-center height'>
        <div className="card card-4">
          <div className="card__icon">
            <FontAwesomeIcon icon={faAnchor} />
          <FontAwesomeIcon icon={faAnchor} />
          </div>
          <h2 className="card__title">Friendly and Timely Communication.</h2>
          <p className="card__apply">
            <a className="card__link" href="https://www.linkedin.com/in/shinaa">Contact Now <FontAwesomeIcon icon={faArrowAltCircleRight}/></a>
          </p>
        </div>
        </div>
        </Carousel.Item>
    </Carousel> 
  </>
  )
  }

  export default AboutCard