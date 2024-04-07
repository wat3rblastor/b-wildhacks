import Image from "next/image";
import NavBar from "./components/Navbar.tsx"
import Customer_Tasks from './customer_tasks/page.tsx'
import Community from '../public/community.jpg'
import Link from 'next/link';

function Body ({ loggedIn }) {
	let body = (
		<div>
			<div className="bg-red-200 w-full h-80">
		        <Image src={Community} className="object-cover w-full h-80" />
		      </div>
		     <div className="my-10">
		        <p className="font-semibold">
		          GoodNeighbor is a platform designed to connect urban residents and property owners with skilled contractors and service providers for small-scale urban development tasks. Whether it's fixing a pothole, painting a pedestrian crosswalk, installing bike racks, or beautifying a neighborhood park, GoodNeighbor facilitates quick and efficient transactions between those in need of services and those able to provide them.
		        </p>
		     </div>
		     <div className="flex justify-center">
		        <button className="bg-red-400 rounded-md p-2 shadow-md text-white font-semibold hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
		          <Link href="/signup">
		          	Sign Up
		          </Link>
		        </button>
		 	</div>
		 </div>
	 );
	if (loggedIn){
		body = <Customer_Tasks loggedIn={loggedIn}/>
	};
	return (
			<main className="relative min-h-screen">
		      <NavBar loggedIn={loggedIn} />
		      <div className="p-24">
		      	{body}
		      </div>
		    </main>
	);
}

export default Body;

