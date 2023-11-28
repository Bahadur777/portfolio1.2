import React from "react";
import './Footer.css'
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container flex flex-row justify-between p-10">
      <div className="footer-left">Bahadur @2023</div>
      <div className="footer-right">
        <ul className="flex gap-5 text-3xl">
          <li>
            <Link
              href={
                "https://www.linkedin.com/in/bahadur-mia-shihab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
              }
            >
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link
              href={
                "https://www.linkedin.com/in/bahadur-mia-shihab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
              }
            >
              <AiFillTwitterCircle />
            </Link>
          </li>
          <li>
            <Link
              href={
                "https://www.linkedin.com/in/bahadur-mia-shihab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
              }
            >
              <AiFillTwitterCircle />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
