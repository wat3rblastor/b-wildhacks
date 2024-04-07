
// create data type for response

// interface Task {
//     taskid: number;
//     userid: number; // Assuming it references an existing user
//     title: string;
//     address: string;
//     duration: string; // Represented as a string, but you might want a specific format or even a Date type
//     location: string;
//     description: string;
//     available: boolean;
//     budget: number;
//     providerid: number; // Assuming it references an existing user, can be nullable if not always set
//   }
  

export async function GET(req, res) {
    // Check if the database instance has been initialized
    const response: ListTasksResponse = {
        // use interface to create some mock data
        data: [
            {
                taskid: 1,
                userid: 1,
                title: "Task 1",
                address: "123 Main St",
                duration: "1 hour",
                location: "Location 1",
                description: "Description 1",
                available: true,
                budget: 100,
                providerid: 1
            },
            {
                taskid: 2,
                userid: 1,
                title: "Task 2",
                address: "543 Main St",
                duration: "1 hour",
                location: "Location 2",
                description: "Description 2",
                available: true,
                budget: 100,
                providerid: 1
            }
        ]
    }

    return new Response(JSON.stringify(response), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}