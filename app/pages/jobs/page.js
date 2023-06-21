"use client";
import getData from "@/app/lib/data/links";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
const Jobs = () => {
  const url = "https://www.arbeitnow.com/api/job-board-api?page=1";

  const [jobList, setJobList] = useState([]);
  const [page, setPage] = useState(1);

  const handlePage = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= jobList.length / 10 && selectedPage !== page) {
      setPage(selectedPage);
    }
  };
  const getJob = async () => {
    const { data } = await getData(url);

    setJobList(data);
    return data;
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
      <div className='flex flex-col items-center fixed inset-x-0 right-0 w-full mx-auto mb-10 bg-black h-[80px]'>
        <p className='text-teal-900'> No of pages</p>
        <div className='flex items-center mx-auto bg-black'>
          <span
            onClick={() => handlePage(page - 1)}
            className={page > 1 ? "cursor-pointer" : "opacity-0"}>
            <BsFillArrowLeftCircleFill className='text-teal-600 hover:text-white' />
          </span>
          {[...Array(jobList.length / 10)].map((_, i) => {
            return (
              <span
                key={i}
                className={
                  page === i + 1 ? "p-1 text-white cursor-pointer" : "p-2 lg:mx-2 cursor-pointer"
                }
                onClick={() => handlePage(i + 1)}>
                {i + 1}
              </span>
            );
          })}
          <span
            onClick={() => handlePage(page + 1)}
            className={page < jobList.length / 10 ? "cursor-pointer" : "opacity-0"}>
            <BsFillArrowRightCircleFill className='text-teal-600 hover:text-white' />
          </span>
        </div>
      </div>
      <div className='w-full mt-20'>
        {jobList?.slice(page * 10 - 10, page * 10).map((job) => {
          const { created_at, company_name, description, location, title, url, tags, slug } = job;
          const desc = description.replaceAll(/(<([^>]+)>)/gi, "+").split("+");

          return (
            <motion.div
              initial={{ opacity: 1 }}
              whileHover={{
                transition: { duration: 0.8 },
              }}
              className='flex justify-center cursor-pointer md:mt-2 md:w-full'
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
                  <p className='font-semibold'>
                    {tags.length > 0 ? "Nature of Job :" : null}
                    {tags.length > 0 && (
                      <>
                        {tags.map((tag, index) => (
                          <span className='font-normal capitalize' key={index}>
                            <li>{tag}</li>
                          </span>
                        ))}
                      </>
                    )}
                  </p>
                </div>
                <div className='flex items-center px-4 pt-4'>
                  <p className='font-semibold text-gray-900 capitalize'>
                    Office Location: <span className='font-normal capitalize '>{location}</span>{" "}
                  </p>
                </div>
                <motion.div
                  className='flex items-center px-4 py-4 mx-auto'
                  initial={{ opacity: 1 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.8 },
                  }}>
                  <p className='p-2 bg-black border-blue-500 rounded-lg hover:text-white'>
                    <Link href={url}>
                      View details and <span className='text-teal-600 hover:text-white'>Apply</span>
                    </Link>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className='flex justify-center'>
        <Link
          href='https://www.arbeitnow.com/'
          className='p-2 text-teal-600 bg-black border-blue-500 rounded-lg'>
          See All Jobs
        </Link>
      </div>
    </div>
  );
};

export default Jobs;
