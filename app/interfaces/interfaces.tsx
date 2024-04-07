export type Task  = {
    taskid: number;
    userid: number; // Assuming it references an existing user
    title: string;
    address: string;
    duration: string; // Represented as a string, but you might want a specific format or even a Date type
    location: string;
    description: string;
    available: boolean;
    budget: number;
    providerId: number; // Assuming it references an existing user, can be nullable if not always set
  }
  
export type ListTasksResponse = {
    data: Task[]
}
