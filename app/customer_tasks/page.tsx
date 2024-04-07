import NavBar from "../components/Navbar";


function Customer_Tasks () {
    return (<main className="min-h-screen p-24 flex flex-col justify-center">
        <NavBar/>
        <div className="w-fit">
            <h1>Active Tasks</h1>
            <div className="grid grid-flow-col grid-cols-3 gap-5">
                <div className="bg-slate-300 w-64 h-96 rounded-md">
                    <h1>Card</h1>
                </div>
                <div className="bg-slate-300 w-64 h-96 rounded-md">
                    <h1>Card</h1>
                </div>
                <div className="bg-slate-300 w-64 h-96 rounded-md">
                    <h1>Card</h1>
                </div>
                <div className="bg-slate-300 w-64 h-96 rounded-md">
                    <h1>Card</h1>
                </div>
            </div>
        </div>
        
        <div className="w-fit">
            <h1>Pending Tasks</h1>
            <div className="grid grid-rows-3 gap-5">
                <div className="bg-slate-300 w-64 h-96 rounded-md">
                    <h1>Card</h1>
                </div>
                <div className="bg-slate-300 w-64 h-96 rounded-md">
                    <h1>Card</h1>
                </div>
                <div className="bg-slate-300 w-64 h-96 rounded-md">
                    <h1>Card</h1>
                </div>
                <div className="bg-slate-300 w-64 h-96 rounded-md">
                    <h1>Card</h1>
                </div>
            </div>
        </div>
    </main>)
}

export default Customer_Tasks;