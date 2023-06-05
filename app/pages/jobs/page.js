import { jobs } from "@/app/lib/data/links";
import Link from "next/link";
import React from "react";
import SingleJob from "./[jobId]/[url]";

const Jobs = () => {
  return (
    <div className='container flex w-full min-h-screen mx-auto mb-2 overflow-hidden md:justify-between md:px-8 lg:px-20'>
      <div>
        <SingleJob />
      </div>
      <div className='w-full'>
        {jobs.map((job) => {
          return (
            <div
              className='flex justify-center md:mt-20 md:w-full hover:translate-y-1 '
              key={job.id}>
              <div className='flex flex-col justify-between w-full h-auto mx-2 mb-8 align-middle border rounded-lg shadow-lg md:w-full md:flex-row lg:flex-row 2xl:flex-row'>
                <div className='flex flex-col flex-wrap items-start w-full px-4 overflow-hidden md:mr-3 md:p-4 md:w-1/2'>
                  <h3 className='mb-3 capitalize'>Company Name: {job.company}</h3>
                  <p className='capitalize'> Job Information: {job.info}</p>
                  <p className='capitalize'> Job Role: {job.role}</p>
                  <p className='py-2'> Pay: {job.pay}</p>
                  <p> Contact:{job.email}</p>
                </div>
                <div className='flex items-center px-4'>
                  <p className=''>Location: {job.location}</p>
                </div>
                <div className='flex items-center px-4 pb-4'>
                  <p className=''>
                    <Link href='/'>Apply here</Link>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
