import { ListTasksResponse, Task } from "../../interfaces/interfaces";

export async function POST(req, res) {
    // print the request body
    const text = await req.text();
    const task: Task = JSON.parse(text);
    console.log(task);

    // TODO: put in database

    return new Response(JSON.stringify(null), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}