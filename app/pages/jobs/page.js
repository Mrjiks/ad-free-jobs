"use client";
import getData from "@/app/lib/data/links";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SingleJob from "./[jobId]/[url]";
import { motion } from "framer-motion";

const Jobs = () => {
  const url = "https://www.arbeitnow.com/api/job-board-api?page=1";

  const [jobList, setJobList] = useState([]);

  const getJob = async () => {
    const { data } = await getData(url);

    const sortedData = data.sort((a, b) => b.created_at - a.created_at).slice(1, 50);

    setJobList(sortedData);
    return sortedData;
  };

  useEffect(() => {
    getJob();
  }, []);

  if (jobList.length === 0) {
    return (
      <div className='flex justify-center min-h-screen align-middle '>
        <div className='h-4 mt-6 rounded-lg'>
          <h1 className='text-5xl font-extrabold '>Load...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className='container flex flex-col w-full min-h-screen mx-auto mb-2 overflow-hidden md:justify-between md:px-8 lg:px-20'>
      <div>
        <SingleJob />
      </div>
      <div className='w-full'>
        {jobList?.map((job) => {
          const { created_at, company_name, description, location, title, url, tags, slug } = job;
          const desc = description.replaceAll(/(<([^>]+)>)/gi, "+").split("+");

          return (
            <motion.div
              initial={{ opacity: 1 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.8 },
              }}
              className='flex justify-center md:mt-2 md:w-full hover:translate-y-1 '
              key={slug + description}>
              <div className='flex flex-col justify-between w-full h-auto mx-2 mb-8 align-middle bg-white border rounded-lg shadow-lg md:w-full md:flex-row lg:flex-row 2xl:flex-row'>
                <div className='flex flex-col flex-wrap items-start w-full px-4 overflow-hidden text-black md:mr-3 md:p-4 md:w-1/2'>
                  <h3 className='font-semibold capitalize '>
                    Company Name:<span className='font-normal capitalize'> {company_name}</span>
                  </h3>
                  <p className='font-semibold capitalize'>
                    {" "}
                    Job Title: <span className='font-normal capitalize '>{title}</span>
                  </p>
                  <p className='font-semibold capitalize'>
                    Type:<span className='font-normal capitalize'>{tags[0]}</span>
                  </p>
                </div>
                <div className='flex items-center px-4 pt-4'>
                  <p className='capitalize'>
                    Location: <span className='text-gray-900'>{location}</span>{" "}
                  </p>
                </div>
                <div className='flex items-center px-4 py-4'>
                  <p className='p-2 bg-black border-blue-500 rounded-lg'>
                    <Link href={url}>
                      Learn More and <span className='text-green-500'>Apply</span>
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className='flex justify-center'>
        <Link href='https://www.arbeitnow.com/' className='p-2 bg-black border-blue-500 rounded-lg'>
          See All Jobs
        </Link>
      </div>
    </div>
  );
};

export default Jobs;
