const About = () => {
  return (
    <div className='container flex flex-col min-h-screen px-2 mx-auto mb-2 justify-evenly md:px-8 '>
      <div className='container w-full gap-3 py-5 mx-auto text-justify text-gray-400 2xlg:w-3/4'>
        <h1 className='py-4 pl-2 text-3xl'>
          Welcome to <span className='w-10 text-2xl text-blue-500'>لoBs</span>
        </h1>
        <p className='p-2 text-lg'>
          At <span className='w-10 text-2xl text-blue-500'>لoBs</span>, our mission is to connect
          talented individuals with exciting employment opportunities. We understand the challenges
          job seekers face when searching for the perfect position, and that's why we've created a
          platform dedicated to simplifying the job search process.
        </p>
        <p className='p-2 text-lg'>
          Our Job Board is designed to be user-friendly and efficient, ensuring that you have access
          to a wide range of available positions across various industries. Whether you're a recent
          graduate, an experienced professional, or someone looking to make a career change, we've
          got you covered.
        </p>
        <p className='p-2 text-lg'>
          What sets us apart from other job boards is our commitment to providing a seamless
          experience without the clutter of advertisements. We believe in keeping the focus solely
          on connecting job seekers with relevant job openings. You can trust that our platform is
          free from distractions, allowing you to concentrate on finding your dream job.
        </p>
        <div className='flex flex-col justify-around gap-2'>
          <h3 className='pl-2'>Here's what you can expect from our Job Board:</h3>
          <ul className='flex flex-col justify-around gap-2'>
            <li>
              <h4 className='pl-2 text-blue-500'> Comprehensive Job Listings:</h4>{" "}
              <p className='p-2 text-lg'>
                We collaborate with a diverse network of employers and companies to bring you a vast
                selection of job opportunities. Our listings span across different industries, job
                levels, and locations, ensuring that you can find positions that align with your
                skills and aspirations.
              </p>
            </li>
            <li>
              <h4 className='pl-2 text-blue-500 '> User-Friendly Interface:</h4>
              <p className='p-2 text-lg'>
                Our platform is designed with simplicity in mind. You can easily navigate through
                the website, search for specific positions, and filter results based on your
                preferences. Finding the right job has never been easier.
              </p>
            </li>
            <li>
              <h4 className='pl-2 text-blue-500'>Detailed Job Descriptions:</h4>{" "}
              <p className='p-2 text-lg'>
                We provide detailed job descriptions for each position, offering valuable insights
                into the responsibilities, requirements, and benefits. You'll have all the
                information you need to make informed decisions and tailor your applications
                accordingly.
              </p>
            </li>
            <li>
              {" "}
              <h4 className='pl-2 text-blue-500'> Personalized Job Alerts: </h4>
              <p className='p-2 text-lg'>
                Stay up to date with the latest opportunities by setting up personalized job alerts.
                Receive email notifications based on your preferred criteria, so you never miss out
                on a potential job match.
              </p>
            </li>
            <li>
              <h4 className='pl-2 text-blue-500 '> Easy Application Process:</h4>{" "}
              <p className='p-2 text-lg'>
                Applying for jobs through our Job Board is a breeze. With just a few clicks, you can
                submit your application and showcase your qualifications directly to the hiring
                companies. We strive to make the application process as seamless as possible, saving
                you time and effort.
              </p>
            </li>
          </ul>
          <p className='p-2 text-lg'>
            At <span className='w-10 text-2xl text-blue-500'>لoBs</span>, we believe that finding a
            job should be an exciting and rewarding journey. With our Job Board, we aim to empower
            job seekers like you with the tools and resources needed to explore the vast world of
            employment opportunities. Start your job search with us today and discover the next step
            in your career!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
