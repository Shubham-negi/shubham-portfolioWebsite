"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaBlackTie, FaUserCheck } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { IoPerson } from "react-icons/io5";
import { BsMenuAppFill } from "react-icons/bs";

const About = () => {
  const [isAbout, setIsAbout] = useState(false);

  const aboutRef = useRef();
  const profile2Ref = useRef();
  const aboutInfoRef = useRef();

  // Scroll Animation
  useEffect(() => {
    if (aboutRef.current) {
      const getScreenWidth = () =>
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      const aboutObserver = new IntersectionObserver(
        ([aboutEntry]) => {
          setIsAbout(aboutEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      aboutObserver.observe(aboutRef.current);

      if (isAbout) {
        profile2Ref.current.classList.add("slide-in");
        aboutInfoRef.current.classList.add("slide-in");
      } else {
        profile2Ref.current.classList.remove("slide-in");
        aboutInfoRef.current.classList.remove("slide-in");
      }
    }
  }, [isAbout, aboutRef]);

  return (
    <Fragment>
      <section
        className=' shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden'
        id='about'
        ref={aboutRef}
      >
        <h2 className='text-3xl font-bold text-center pt-4 pb-8 flex justify-center items-center gap-3'>
          <FaUserCheck /> About me
        </h2>
        <div className='pb-[30px] px-[20px] md:px-[100px] lg:px-[200px] md:flex gap-[50px]'>
          {/* Person Image */}
          <Image
            alt='about image'
            className="shadow-zinc-300 dark:shadow-zinc-700 shadow-sm transition-all duration-700 translate-x-[-900px] bg-blue-200 m-auto bg-cover bg-no-repeat max-h-full rounded-full object-contain"
            height={500}
            ref={profile2Ref}
            src='/images/shubhamImg.png'
            width={500}
          />

          <div
            className='text-lg translate-x-[900px] opacity-0 transition-all duration-700 mt-4 md:mt-0 md:w-[50%] text-center md:text-left rounded'
            ref={aboutInfoRef}
          >
            {/* Full Name */}
            <p className='text-3xl text-center md:text-left font-semibold text-[#c72c6c] dark:text-[#07d0e5]'>
              Shubham negi
            </p>
            {/* Profil Name */}
            <p className='text-center md:text-left text-red-600 mt-1'>
              Unity developer
            </p>
            {/* Location */}
            <div className='flex flex-wrap justify-center md:justify-normal gap-5'>
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                    Location
                  </p>
                  <p>
                    <ImLocation />
                  </p>
                </div>
                <p className='text-center md:text-left text-[#0b0c0c] dark:text-[#07d0e5]'>
                  Dehradun , India{" "}
                </p>
              </div>
              {/* Age */}
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                    Age
                  </p>
                  <p>
                    <IoPerson />
                  </p>
                </div>
                <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                  30{" "}
                </p>
              </div>
              {/* Experience */}
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                    Experience
                  </p>
                  <p>
                    <FaBlackTie />
                  </p>
                </div>
                <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                  6 Year{" "}
                </p>
              </div>
              {/* Project */}
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                    Projects
                  </p>
                  <p>
                    <BsMenuAppFill />
                  </p>
                </div>
                <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                  15{" "}
                </p>
              </div>
            </div>

            <div className='mt-5 justify-evenly text-justify'>
              <p className='text-gray-600 dark:text-gray-300'>
                Experienced Unity Developer with over 5 years of expertise in building immersive AR, VR, and metaverse applications, as well as 2D and 3D physics-based games. Skilled in designing, developing, and deploying end-to-end solutions, integrating both front-end and back-end systems. Adept at delivering high-quality, scalable products with a focus on performance, user experience, and innovation. Proven track record in leading complex projects, including a metaverse e-commerce platform, while collaborating with cross-functional teams to meet business goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
