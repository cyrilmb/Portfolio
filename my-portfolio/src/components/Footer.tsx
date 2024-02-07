import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3x1 px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-9 h-1 mx-auto my-4 bg-blue-600 border-0 rounded" />
      <div>
        <div>&#169; 2024 Cyril Malle-Barlow</div>
        <div>
          <a
            href="https://github.com/cyrilmb/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/cyril-malle-barlow/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
