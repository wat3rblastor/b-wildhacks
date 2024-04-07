'use client';
import { useParams, useRouter } from "next/navigation.js";
import Footer from "../Footer.jsx";
import { useEffect, useState } from "react";
// import { createBid } from "@/app/client/client.js";
import { createBid } from "../../client/client";

const BidForm = () => {
    const { id } = useParams<{ id: string }>();
    const router = useRouter();

    const [taskData, setTaskData] = useState<Task[]>([]);
    // fetch task data
    useEffect(() => {
        const fetchTaskData = async () => {
            const response = await fetch("/api/tasks");
            const data: Task[] = await response.json();
            setTaskData([...data]);

        }
        fetchTaskData()
    }, [id])

    const myTask = taskData.find((task) => task.taskid === parseInt(id))

    const [bidAmount, setBidAmount] = useState('');
    const [message, setMessage] = useState('');



    // get the id from the URL
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold mb-4">Bid Form</h2>
        <h3 className="text-l font-bold mb-4">Task: {myTask?.title || ""}</h3>
              <form
              onSubmit={(e) => {
                e.preventDefault();
                
                const myBid = {
                    biddingid: 0,
                  taskid: myTask?.taskid || 0,
                    price: parseFloat(bidAmount),
                  userid: 2
                //   message: message,
                    
                }
                console.log("Bid submitted!");
                console.log(myBid)
                createBid(myBid)
                router.push('/tasks')
              }}
              >
          <div className="mb-4">
            <label
              htmlFor="bidAmount"
              className="block text-gray-700 font-bold mb-2"
            >
              How much do you want to bid?
            </label>
            <input
              type="text"
              id="bidAmount"
              name="bidAmount"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter bid amount"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Send a message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Submit Bid
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BidForm;
