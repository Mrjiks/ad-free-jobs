"use client";
import Input from "./components/atoms/Input";
import Button from "./components/atoms/Button";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState();
  const [location, setLocation] = useState();
  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(() => e.target.value);
  };
  const handleLocation = (e) => {
    e.preventDefault();
    setLocation(() => e.target.value);
  };

  const isDisabled = !searchTerm;
  return (
    <main className='flex flex-col justify-between min-h-screen gap-2 '>
      <section className='flex flex-col justify-start flex-1 w-full p-2'>
        <div className='flex justify-center w-full md:mt-20 mb-7 lg:mt-20 2xl:mt-20'>
          <h1 className='text-2xl font-bold text-center capitalize md:text-5xl lg:text-5xl '>
            The Easiest Way to Get <br className='md:hidden' />
            Your New Job
          </h1>
        </div>
        <p className='mb-10 text-center capitalize md:text-3xl lg:text-3xl'>
          Latest Ad-free job board
        </p>
        <div className='flex justify-center'>
          <form className='flex flex-col justify-between w-full gap-3 px-4 md:w-1/2 md:flex-row'>
            <Input
              placeholder='Activate search button by typing something...'
              type='text'
              className='p-2 text-black rounded-sm '
              autoFocus='autoFocus'
              value={searchTerm}
              name='search-job'
              onChange={handleChange}
            />
            {/* <Input
              placeholder='City, Province, or region'
              type='text'
              className='hidden w-full p-2 text-black rounded-sm md:block lg:block 2xl:block'
              name='search-job'
              onChange={handleLocation}
            /> */}

            <div className='flex flex-col w-full gap-3 md:flex-row'>
              <Link href='/pages/jobs' className='justify-center'>
                <Button
                  type='submit'
                  className={`${
                    isDisabled
                      ? "w-auto p-2 text-black bg-gray-700 rounded-sm  md:block "
                      : "w-auto p-2 text-black bg-gray-300 rounded-sm"
                  }`}
                  text='Search'
                  disabled={isDisabled}
                />
              </Link>
            </div>
          </form>
        </div>
      </section>
      <section className='py-10 bg-white flex-2'>
        <div className='flex flex-col justify-center'>
          <h2 className='font-bold text-center text-black capitalize md:text-5xl lg:text-5xl'>
            Popular Categories
          </h2>
          <p className='mt-6 text-center text-black capitalize md:text-2xl lg:text-2xl'>
            Latest Ad-free job board
          </p>
        </div>
        <div className='w-full h-24'></div>
      </section>
    </main>
  );
}
