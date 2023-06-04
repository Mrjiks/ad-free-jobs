import Input from "./components/atoms/Input";
import Button from "./components/atoms/Button";

export default function Home() {
  return (
    <main className='flex flex-col justify-between min-h-screen gap-2 '>
      <section className='flex flex-col justify-center flex-1 p-2 place-content-center bg-black-500'>
        <div className='flex justify-center mb-7 '>
          <h1 className='text-2xl font-bold'>The Easiest Way to Get Your New Job</h1>
        </div>
        <p className='mb-3 text-center'>Latest Ad-free job board</p>
        <div className='flex justify-center'>
          <form className='flex flex-col justify-between gap-3 md:flex-row'>
            <Input
              placeholder='Job Title, Company name, or role'
              type='text'
              className='p-2 rounded-sm'
            />
            <Input placeholder='City, Province, or region' type='text' className='p-2 rounded-sm' />

            <div className='flex flex-col w-full gap-3 md:flex-row'>
              <Button
                type='submit'
                className='w-auto p-2 text-black bg-blue-300 rounded-sm '
                text='Search'
              />
            </div>
          </form>
        </div>
      </section>
      <section className='bg-white flex-2'>
        <div className='flex flex-col justify-center'>
          <p className='text-center text-black'>Popular Categories</p>
          <p className='mb-3 text-center text-black'>Latest Ad-free job board</p>
        </div>
        <div className='w-full h-24'></div>
      </section>
    </main>
  );
}
