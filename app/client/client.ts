import { Bid, Task } from "../interfaces/interfaces";

export const createTask = async (task: Task) => {
  console.log('In createTask')
    // const exampleTask : Task = {
    //     taskid: 1,
    //     userid: 1, // Defaulut Customer
    //     title: "Test Task",
    //     description: "Test Description",
    //     address: "123 Main Street",
    //     duration: "1 hour",
    //     location: "123 Main Street",
    //     available: true,
    //     budget: 100,
    //     providerId: null
    // }
    const response = await fetch("/api/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify(
         task
      ),
    });
    console.log('Finished createTask')
}

export const createBid = async (bid: Bid) => {
  console.log('In createBid')
  // const exampleBid: Bid = {
  //   biddingid: 1,
  //   taskid: 1,
  //   price: 45.00,
  //   userid: 2, // Default Provider
  //   }
  console.log(bid)

    const response = await fetch("/api/bid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify(
         bid
        //  exampleBid
      ),
    });
    console.log('Finished createBid')
}