"use client";
import Input from "./components/atoms/Input";
import Button from "./components/atoms/Button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import getData from "@/app/lib/data/links";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("Berlin");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(() => e.target.value);
  };

  const url = "https://www.arbeitnow.com/api/job-board-api?page=1";
  const getJob = async () => {
    const { data } = await getData(url);

    const sortedData = data.sort((a, b) => b.created_at - a.created_at);

    setSearchTerm(sortedData);
    return sortedData;
  };

  useEffect(() => {
    getJob();
  }, []);

  const isDisabled = !searchTerm;
  return (
    <main className='flex flex-col justify-between min-h-screen gap-2 '>
      <section className='flex flex-col justify-start flex-1 w-full p-2'>
        <div className='flex justify-center w-full md:mt-20 mb-7 lg:mt-20 2xl:mt-20'>
          <h1 className='text-3xl font-bold text-center capitalize md:text-5xl lg:text-5xl '>
            The Easiest Way to Get <br className='md:hidden' />
            Your New Job
          </h1>
        </div>
        <p className='mb-10 text-center capitalize md:text-3xl lg:text-3xl'>
          Latest Ad-free job board
        </p>
        <div className='flex justify-end align-middle'>
          <form className='flex flex-col justify-center w-full gap-3 px-4 md:w-3/4 md:flex-row'>
            <Input
              placeholder='Search with any keyword e,g job title, location, type etc'
              type='text'
              className='w-full p-2 text-black rounded-sm '
              autoFocus='autoFocus'
              value={searchTerm}
              name='search-job'
              onChange={handleChange}
              id='search'
            />

            <div className='flex flex-col w-full gap-3 md:flex-row'>
              <Link href='/pages/jobs' className='justify-center w-ull'>
                <Button
                  type='submit'
                  className={`${
                    isDisabled
                      ? " p-2 text-black bg-gray-700 rounded-sm  md:block w-full "
                      : "p-2 text-black bg-gray-300 rounded-sm w-full"
                  }`}
                  text='Search'
                  disabled={isDisabled}
                />
              </Link>
            </div>
          </form>
        </div>
      </section>
      <section className='flex flex-col justify-start flex-1 w-full p-3 bg-white'>
        <div className='container flex flex-col justify-center py-4 mx-auto lg:w-3/4'>
          <h2 className='text-3xl font-bold text-center text-black capitalize md:text-5xl lg:text-2xl'>
            Welcome to <span className='w-10 text-3xl text-teal-700'>لoBs</span>
          </h2>
          <p className='my-6 text-center text-black text-teal-700 capitalize md:text-2xl lg:text-2xl'>
            Your Gateway to Exciting Job Opportunities!
          </p>
          <p className='my-1 leading-6 text-justify text-black md:text-2xl lg:text-2xl'>
            Are you ready to take the next big step in your career? Look no further! Our job board
            is here to connect you with a world of incredible employment possibilities. With a
            user-friendly interface and a commitment to providing only the best job listings, we are
            your trusted partner in finding the perfect job.
          </p>
        </div>
      </section>
    </main>
  );
}
