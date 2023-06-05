import { jobs } from "@/app/lib/data/links";
import Link from "next/link";
import React from "react";
import SingleJob from "./[jobId]/[url]";

const Jobs = () => {
  return (
    <div className='container flex min-h-screen px-5 mx-auto mb-2 md:justify-between md:px-8 lg:px-20'>
      <div>
        <SingleJob />
      </div>
      <div className='flex-1'>
        {jobs.map((job) => {
          {
            /* const url = job.url; */
          }
          return (
            <div className='flex justify-around w-full mt-20 hover:translate-y-1' key={job.id}>
              <div className='flex flex-col justify-between w-full h-auto gap-3 align-middle border rounded-lg shadow-lg md:flex-row lg:flex-row 2xl:flex-row'>
                <div className='flex flex-col flex-wrap items-start w-full p-4 px-4 mr-3 space-x-2 overflow-hidden md:w-3/12 '>
                  <h3 className='px-2 mb-3 capitalize'>Company Name: {job.company}</h3>
                  <p className='capitalize'> Job Information: {job.info}</p>
                  <p className='capitalize'> Job Role: {job.role}</p>
                  <p className='py-2'> Pay: {job.pay}</p>
                  <p> Contact:{job.email}</p>
                </div>
                <div className='flex items-center px-4'>
                  <p className='px-4'>Location: {job.location}</p>
                </div>
                <div className='flex items-center px-4 '>
                  <p className='px-4 mb-4'>
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
