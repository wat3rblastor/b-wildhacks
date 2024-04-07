import Link from 'next/link';


function NavBar ({ loggedIn }) {

    if (loggedIn)
    {
        return (
            <div className='absolute inset-x-0 top-0 h-fit bg-slate-100 flex flex-row justify-between p-5 z-2'>
                <div>
                    <Link href="/">
                        Home
                    </Link>
                </div>
                <div className='flex flex-row gap-4'>
                    <div className='bg-slate-200 p-2 rounded-lg'>
                        <Link href="/add_task">
                            Add Tasks
                        </Link>
                    </div>
                    <div className='bg-slate-200 p-2 rounded-lg'>
                        <Link href="/profile">
                            Profile
                        </Link>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='absolute inset-x-0 top-0 h-fit bg-slate-100 flex flex-row justify-between p-5 z-2'>
                <div>
                    <Link href="/">
                        Home
                    </Link>
                </div>
                <div className='flex flex-row gap-4'>
                    <div className='bg-slate-200 p-2 rounded-lg'>
                        <Link href="/signup">
                            Sign Up
                        </Link>
                    </div>
                    <div className='bg-slate-200 p-2 rounded-lg'>
                        <Link href="/login">
                            Log In
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;