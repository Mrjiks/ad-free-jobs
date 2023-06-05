"use client";
import Input from "./components/atoms/Input";
import Button from "./components/atoms/Button";
import { useState } from "react";

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
  return (
    <main className='flex flex-col justify-between min-h-screen gap-2 '>
      <section className='flex flex-col justify-center flex-1 p-2 place-content-center bg-black-500'>
        <div className='flex justify-center mb-7 '>
          <h1 className='text-2xl font-bold capitalize md:text-5xl lg:text-5xl'>
            The Easiest Way to Get Your New Job
          </h1>
        </div>
        <p className='mb-10 text-center capitalize md:text-3xl lg:text-3xl'>
          Latest Ad-free job board
        </p>
        <div className='flex justify-center'>
          <form className='flex flex-col justify-between gap-3 md:flex-row'>
            <Input
              placeholder='Job Title, Company name, or role'
              type='text'
              className='p-2 text-black rounded-sm'
              autoFocus='autoFocus'
              value={searchTerm}
              name='search-job'
              onChange={handleChange}
            />
            <Input
              placeholder='City, Province, or region'
              type='text'
              className='p-2 text-black rounded-sm'
              name='search-job'
              onChange={handleLocation}
            />

            <div className='flex flex-col w-full gap-3 md:flex-row'>
              <Button
                type='submit'
                className='w-auto p-2 text-black bg-white rounded-sm '
                text='Search'
              />
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
