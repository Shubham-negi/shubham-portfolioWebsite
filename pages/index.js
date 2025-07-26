import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import About from "@/sections/about";
import Education from "@/sections/education";
import Experience from "@/sections/experience";
const Navbar = dynamic(() => import("@/layout/navbar/Navbar"))
const Footer = dynamic(() => import("@/layout/footer/Footer"))
const Intro = dynamic(() => import("@/sections/Intro"))
const Skills = dynamic(() => import("@/sections/Skills"))
const Portfolio = dynamic(() => import("@/sections/Portfolio"))
const LatestBlogs = dynamic(() => import("@/sections/LatestBlogs"))
const Apps = dynamic(() => import("@/sections/Apps"))
const Testimonials = dynamic(() => import("@/sections/Testimonials"))

const SendMail = dynamic(() => import("@/utils/SendMail"))
const SocialMedia = dynamic(() => import("@/utils/SocialMedia"))
const ChatSystem = dynamic(() => import("@/utils/ChatSystem"))
const Feedback = dynamic(() => import("@/utils/Feedback"))

const Home = () => {

  return (
    <Fragment>
      <Head>
        <title>Shubham&apos;s Portfolio</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>
      <div>
        <div>
          {/* Desktop Navbar */}
          <Navbar />
          {/* Welcome Page */}
          <Intro />
          {/* About */}
          <About />
          {/* Skills  */}
          <Skills />
          {/* Education */}
          <Education />
          {/* Experience */}
          <Experience />
          {/* Projects */}
          <Portfolio />
          {/* SocialMedia */}
          <SocialMedia />

          {/* LatestBlog */}
          {/* <LatestBlogs /> */}
          {/* Apps */}
          {/* <Apps /> */}
          {/* Testimonials */}
          {/* <Testimonials /> */}
          {/* Send Mail */}
          <SendMail />
          {/* Footer */}
          <Footer />
         
          {/* Feedback Modal */}
          <Feedback />
          
        </div>
      </div>
    </Fragment>
  );
}

export default Home
