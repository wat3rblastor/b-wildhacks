import Link from 'next/link';


function NavBar () {
    return (
        <div className='absolute inset-x-0 top-0 h-fit bg-slate-100 flex flex-row justify-between p-5 z-2'>
            <div>Logo</div>
            <div className='flex flex-row gap-4'>
                <div className='bg-slate-200 p-2 rounded-lg'>
                    <Link href="/signup">
                        Sign Up
                    </Link>
                </div>
                <div className='bg-slate-200 p-2 rounded-lg'>
                    <Link href="/login">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;