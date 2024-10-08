import React, { Fragment, useState, useRef, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
  import { HiExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { ProjectsData } from "@/constants";
import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";

const Portfolio = () => {
  const [height1, setHeight1] = useState("");

  return (
    <Fragment>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Theme>

      <BackTo backTo={""} />
        <div className="p-[5%] pt-[2%] dark:bg-gray-700">
          <p className="font-bold text-2xl p-2 dark:text-white">Portfolio</p>

          <div className="pb-10">
          <ResponsiveMasonry
  columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
>
  <Masonry>
    {ProjectsData.map((project) => (
      <div
        className="dark:bg-black rounded-l-md border border-gray-400 border-solid m-2"
        key={project.projectName}
      >
        {/* Project Image */}
        <div
          className={
            "w-full shadow-md shadow-zinc-300 dark:shadow-zinc-700 bg-no-repeat bg-center bg-cover flex flex-col justify-end rounded overflow-hidden"
          }
          onMouseLeave={() => setHeight1("")}
          onMouseMove={() => setHeight1(project.projectName)}
          style={{
            backgroundImage: `url(${project?.projectImage?.imageUrl || ""})`,
            aspectRatio: '10/9', // Maintain aspect ratio
          }}
        >
          <div
            className='bg-red-600 p-1 cursor-pointer'
            onMouseLeave={() => setHeight1("")}
            onMouseMove={() => setHeight1(project.projectName)}
          >
            {/* Project Name */}
            <p
              className='text-white text-center'
              onClick={() =>
                setHeight1(height1 === "" ? project.projectName : "")
              }
            >
              {project.projectName}
            </p>
            <div
              className='overflow-hidden transition-all duration-500 h-[70px] flex gap-10 justify-center items-center'
              style={
                height1 === project.projectName
                  ? { maxHeight: "30px" }
                  : { maxHeight: "0" }
              }
            >
              {/* GitHub Link */}
              {project.liveUrl && (
                <Link
                  className='text-xl text-white p-1 bg-gray-700 hover:bg-gray-950 rounded'
                  href={project.liveUrl}
                  target='_blank'
                >
                  <HiExternalLink />
                </Link>
              )}
              {/* Live url */}
              {project.githubUrl && (
                <Link
                  className='text-xl text-white p-1 bg-gray-700 hover:bg-gray-950 rounded'
                  href={project.githubUrl}
                  target='_blank'
                >
                  <BsGithub />
                </Link>
              )}
            </div>
          </div>
        </div>
        {/* Tech Stack */}
        <div className='flex flex-wrap gap-1 mt-2'>
          {project.techs.map((tech, key) => (
            <p
              className='px-1 text-sm rounded bg-blue-500 text-white'
              key={key}
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
    ))}
  </Masonry>
</ResponsiveMasonry>

          </div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default Portfolio;
