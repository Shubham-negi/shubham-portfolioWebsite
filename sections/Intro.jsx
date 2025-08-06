"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";

const Intro = () => {
  const [isHome, setIsHome] = useState(false);

  const homeRef = useRef();
  const introRef = useRef();
  const profileRef = useRef();

  // Intersection observer animation on scroll
  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    // Scroll Animation
    if (homeRef.current) {
      const homeObserver = new IntersectionObserver(
        ([homeEntry]) => {
          setIsHome(homeEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 600 ? "-100px" : "-300px"}`,
        }
      );

      homeObserver.observe(homeRef.current);

      if (isHome) {
        profileRef.current.classList.add("slide-in");
        introRef.current.classList.add("slide-in");
      } else {
        profileRef.current.classList.remove("slide-in");
        introRef.current.classList.remove("slide-in");
      }
    }
  }, [homeRef, isHome]);

  return (
    <Fragment>
      <Head>
        <title>Shubham&apos;s Portfolio</title>
      </Head>
      <section id='home'>
        <div
          className='min-h-[100vh] overflow-x-hidden px-[50px] md:px-[50px] lg:px-[50px] pt-[80px] md:pt-10 md:flex items-center justify-between shadow-zinc-300 dark:shadow-zinc-700 shadow-sm'
          ref={homeRef}
        >
          <div
            className='translate-x-[-500px] transition-all duration-700 opacity-0'
            ref={introRef}
          >
            <p className=' text-4xl md:text-4xl font-semibold font-sans'>
              Hi There !
            </p>
            {/* Profile Name */}
            <p className='text-2xl md:text-4xl py-2 font-semibold font-sans'>
              I&apos;m a Unity
              <span className='text-[#c72c6c] dark:text-[#07d0e5]'>
                {" "}
                developer <span className='text-white'>|</span>
              </span>
            </p>
            <div className='mt-5 md:mt-10 flex gap-3'>
              {/* Hire Me Button */}
              {/* <Link
                className='text-white text-xl font-semibold rounded bg-red-400 hover:bg-red-500 px-2 py-1'
                href={"#getInTouch"}
              >
                Hire me
              </Link> */}
              {/* Download CV Button */}
              <Link
                className='text-xl font-semibold rounded border border-red-500 hover:text-white hover:bg-red-500 px-2 py-1'
                href='https://drive.google.com/file/d/1a-mtyGScwG3ZaUJ0S1eUezzh5kpt-ckD/view?usp=drive_link'
                target='_blank'
              >
                Download CV
              </Link>
            </div>
          </div>

          {/* Image */}
          <div
            className={
              "translate-x-[500px] transition-all opacity-0 duration-700 w-[350px] h-[300px] md:w-[600px] md:h-[450px] bg-cover m-auto md:m-0 mt-[40px] md:mt-0 bg-no-repeat bg-center"
            }
            ref={profileRef}
            style={{ backgroundImage: "url(./images/developer.png)" }}
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;
