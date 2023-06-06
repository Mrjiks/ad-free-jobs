"use client";
import { jobs } from "@/app/lib/data/links";
import Link from "next/link";
import React from "react";
import SingleJob from "./[jobId]/[url]";
import { motion } from "framer-motion";
const Jobs = () => {
  return (
    <div className='container flex w-full min-h-screen mx-auto mb-2 overflow-hidden md:justify-between md:px-8 lg:px-20'>
      <div>
        <SingleJob />
      </div>
      <div className='w-full'>
        {jobs.map((job) => {
          return (
            <motion.div
              initial={{ opacity: 1 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.8 },
              }}
              className='flex justify-center md:mt-2 md:w-full hover:translate-y-1 '
              key={job.id}>
              <div className='flex flex-col justify-between w-full h-auto mx-2 mb-8 align-middle bg-white border rounded-lg shadow-lg md:w-full md:flex-row lg:flex-row 2xl:flex-row'>
                <div className='flex flex-col flex-wrap items-start w-full px-4 overflow-hidden text-black md:mr-3 md:p-4 md:w-1/2'>
                  <h3 className='mb-3 capitalize'>
                    Company Name:<span className='font-semibold'> {job.company}</span>
                  </h3>
                  <p className='uppercase'>
                    {" "}
                    Job Information:<span className='capitalize'> {job.info}</span>
                  </p>
                  <p className='uppercase'>
                    {" "}
                    Job Role: <span className='font-semibold'>{job.role}</span>
                  </p>
                  <p className='py-2 uppercase'>
                    {" "}
                    Pay: <span className='font-semibold'>{job.pay}</span>
                  </p>
                  <p className='uppercase'>
                    Contact:<span className='lowercase'>{job.email}</span>
                  </p>
                </div>
                <div className='flex items-center px-4'>
                  <p className='capitalize'>
                    Location: <span className='text-gray-900'>{job.location}</span>{" "}
                  </p>
                </div>
                <div className='flex items-center px-4 pb-4'>
                  <p className='p-2 bg-black border-blue-500 rounded-lg'>
                    <Link href='/'>Apply here</Link>
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
