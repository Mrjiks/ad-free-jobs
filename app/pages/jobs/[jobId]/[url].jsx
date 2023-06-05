"use client";
import Button from "@/app/components/atoms/Button";
import Input from "@/app/components/atoms/Input";
import Link from "next/link";
import React, { useState } from "react";

const SingleJob = () => {
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
    <div className='relative w-1/3 mr-3 '>
      <form className='flex flex-col justify-between fixed gap-3 mt-0 md:flex-row'>
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
          <Link href='/'>
            {" "}
            <Button
              type='submit'
              className='w-auto p-2 text-black bg-white rounded-sm '
              text='Search'
            />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SingleJob;
