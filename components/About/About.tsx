"use client"

import React from "react";
import { styles } from "./styles";
import './About.css'
import resume from './resume/Bahadur.pdf'
import Tech from '../Tech/Tech'

const About = () => {
  const handleResume=()=>{
     window.open(resume, "_blank");
  }
  return (
    <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0" id="About">
    
      <h1 className="text-[45px] font-bold  uppercase">Introduction</h1>
      <h2 className={styles.sectionHeadText}>Overview.</h2>

      <p className='mt-4 mb-16 text-secondary text-[25px] max-w-3xl leading-[40px]'>
        I&apos;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I&apos;m a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&apos;s work together to bring your ideas to life!

      </p>
          <div className="button-div my-10">
            <button type="button" className="py-4 px-5 rounded uppercase bold button-btn" onClick={handleResume} >Download cv</button>
          </div>
          <Tech/>
    </div>
  );
};

export default About;
