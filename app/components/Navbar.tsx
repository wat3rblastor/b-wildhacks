import Link from 'next/link';


function NavBar ({ loggedIn }) {

    if (loggedIn)
    {
        return (
            <div className='sticky inset-x-0 top-0 h-fit bg-blue-400 flex flex-row justify-between p-5 z-2'>
                <div>
                    <Link href="/" className='text-blue-950 font-semibold hover:text-blue-800'>
                        Home
                    </Link>
                </div>
                <div className='flex flex-row gap-4'>
                    <div className='bg-slate-200 p-2 rounded-lg'>
                        <Link href="/add_task" className="text-blue-950 font-semibold hover:text-blue-800">
                            Add Tasks
                        </Link>
                    </div>
                    <div className='bg-slate-200 p-2 rounded-lg'>
                        <Link href="/profile" className="text-blue-950 font-semibold hover:text-blue-800">
                            Profile
                        </Link>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='sticky inset-x-0 top-0 h-fit bg-blue-300 flex flex-row justify-between p-5 z-2'>
                <div className="mt-2">
                    <Link href="/" className='text-blue-950 font-extrabold hover:text-blue-800'>
                        Home
                    </Link>
                </div>
                <div className='flex flex-row gap-4'>
                    <div className='bg-gray-100 p-2 rounded-lg'>
                        <Link href="/signup" className="text-blue-950 font-semibold hover:text-blue-800">
                            Sign Up
                        </Link>
                    </div>
                    <div className='bg-gray-100 p-2 rounded-lg'>
                        <Link href="/login" className="text-blue-950 font-semibold hover:text-blue-800">
                            Log In
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;