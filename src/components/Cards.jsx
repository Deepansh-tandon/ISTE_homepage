import React from 'react'
import styles from "./Cards.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import {faChevronRight } from "@fortawesome/free-solid-svg-icons";

// import { useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';


export const Cards = () => {
  // gsap.registerPlugin(useGSAP);

  // const gsapRef = useRef()

  // useGSAP(() =>{
  //   gsap.to(gsapRef.current,{
  //     opacity: 1,
  //     duration:1.5,
  //     delay: 1,
  //   })
  // })
  return (
    <>
    <div className={styles.container}>
      <div className={styles.column1}>
      <div className={styles.events} id='card'>
        <div className={styles.eventstext} >
        <h3>ISTE</h3>
        <h2>Events</h2>
        <p>Delve into this section to relive our past events, such as hackathons, coding challenges, and guest lectures. Explore the highlights of these occasions to gain valuable insights and see how our community has evolved over time.</p>
        <div className={styles.buttoncontainer2}>
        <button> View More
        <FontAwesomeIcon icon={faChevronRight} id={styles.right} />
        </button>
        </div>
        </div>
        <div className={styles.eventsimg}></div>
      </div>
      
      
      <div className={styles.bottomcards}>
        <div className={styles.team} id='card'>
          <div className={styles.icon} >
        <FontAwesomeIcon icon={faCube} />
          </div>
        <h1>TEAM</h1>
        <p>"The strength of the team is each individual member. The strength of each member is the team." 
        Our team is a dedicated group of enthusiastic learners, committed... to advancing the goals and mission of our society. Each member brings a unique set of skills and expertise, working together to create a positive impact in the tech community.</p>
        <div className={styles.buttoncontainer}>
        <button> View More
        <FontAwesomeIcon icon={faChevronRight} id={styles.right} />
        </button>
        </div>
        </div>
        
        
        <div className={styles.alumni} id='card'>
        <div className={styles.icon} >
        <FontAwesomeIcon icon={faCube} />
        </div>
        <h1>Alumni</h1>
        <p>Our alumni are the trailblazers who have shaped the legacy of our society. Their contributions and success stories continuously motivate us to pursue excellence... and innovation, fostering a community of passionate and driven individuals.</p>
        <div className={styles.buttoncontainer}>
        <button> View More
        <FontAwesomeIcon icon={faChevronRight} id={styles.right} />
        </button>
        </div>

        </div>
      </div>
      </div>
      <div className={styles.column2}>
      <div className={styles.about} id='card'>
        <div className={styles.image}>
          <img src="https://images.unsplash.com/photo-1720983590448-28b749bd403d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className={styles.textcontainer}>
      <h3>ISTE</h3>
      <h2>About Us</h2>
      <p>ISTE is home to a dedicated and enthusiastic tech community that envisions real solutions to complex problems , looking to educate , innovate and create a better world with the boundless potential of Technology.</p>
        <div className={styles.buttoncontainer2}>
        <button> View More
        <FontAwesomeIcon icon={faChevronRight} id={styles.right} />
        </button>
        </div>
        </div>
        
      </div>
      <div className={styles.pastprojects} id='card'>
        <div className={styles.pastprojectstext}>
        <h3>ISTE</h3>
        <h2>Past Projects</h2>
        <p>
        We , as a technical community aim to innovate and solve problems faced by people. Our passionate team of tech enthusiasts come up with innovative real life solutions to tackle such problems.</p>
        <div className={styles.buttoncontainer}>
        <button> View More
        <FontAwesomeIcon icon={faChevronRight} id={styles.right} />
        </button>
        </div>
        </div>
        <div className={styles.pastprojectsimg}> </div>
      </div>
      </div>
     </div>
    </>
  )
}

export default Cards
