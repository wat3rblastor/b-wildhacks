import Image from "next/image";
import NavBar from "./components/Navbar.tsx"

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <NavBar />
      <div className='bg-red-200 w-full h-96'>
        <h1>TEST</h1>
      </div>
      <div className='mt-10'>
        <p className='font-semibold'>
        GoodNeighbor is a platform designed to connect urban residents and property owners with skilled contractors 
        and service providers for small-scale urban development tasks. Whether it's fixing a pothole, painting a pedestrian 
        crosswalk, installing bike racks, or beautifying a neighborhood park, GoodNeighbor facilitates quick and efficient 
        transactions between those in need of services and those able to provide them.
        </p>
      </div>
      <div className='flex justify-center'>
        <button className='bg-red-400 rounded-md bordered p-1 bordered-slate-500 shadow-md'>Sign Up</button>
      </div>
    </main>
  );
}
