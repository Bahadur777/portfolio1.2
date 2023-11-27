import React from "react";
import { styles } from "./styles";

const About = () => {
  return (
    <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
    
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
            <button type="button" className="py-4 px-5 bg-blue-500 rounded uppercase bold ">Download cv</button>
          </div>
    </div>
  );
};

export default About;