function NavBar () {
    return (
        <div className='absolute inset-x-0 top-0 h-fit bg-slate-100 flex flex-row justify-between p-5 z-2'>
            <div>Logo</div>
            <div className='flex flex-row gap-4'>
                <div className='bg-slate-200 p-2 rounded-lg'>Sign Up</div>
                <div className='bg-slate-200 p-2 rounded-lg'>Log In</div>
            </div>
        </div>
    );
}

export default NavBar;