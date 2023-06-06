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
        <div className='h-4 rounded-lg '>
          <h1 className='text-5xl font-extrabold '>Load...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className='container flex w-full min-h-screen mx-auto mb-2 overflow-hidden md:justify-between md:px-8 lg:px-20'>
      <div>
        <SingleJob />
      </div>
      <div className='w-full'>
        {jobList?.map((job) => {
          const { created_at, company_name, description, location, title, url, tags, slug } = job;

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
                  <h3 className='mb-3 capitalize'>
                    Company Name:<span className='font-semibold'> {company_name}</span>
                  </h3>
                  <p className='uppercase'>
                    {" "}
                    Job Information:<span className='capitalize'> {slug}</span>
                  </p>
                  <p className='uppercase'>
                    {" "}
                    Job Role: <span className='font-semibold'>{title}</span>
                  </p>
                  <p className='py-2 uppercase'>
                    {" "}
                    Pay:{" "}
                    <span className='font-semibold'>${Math.ceil(+created_at / 10000)} / year</span>
                  </p>
                  <p className='uppercase'>
                    Contact:<span className='font-semibold capitalize'>{tags[0]}</span>
                  </p>
                </div>
                <div className='flex items-center px-4'>
                  <p className='capitalize'>
                    Location: <span className='text-gray-900'>{location}</span>{" "}
                  </p>
                </div>
                <div className='flex items-center px-4 pb-4'>
                  <p className='p-2 bg-black border-blue-500 rounded-lg'>
                    <Link href={url}>Apply here</Link>
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
