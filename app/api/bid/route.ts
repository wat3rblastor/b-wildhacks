import { Bid} from "../../interfaces/interfaces";
import { Database } from "sqlite3";
import { getDatabase} from "../../resources";

// // Assuming Task interface is already defined elsewhere as mentioned in your comment

let db: Database | null = null;

export async function POST(req, res) {
  const text = await req.text();
  const bid: Bid = JSON.parse(text);

  const { taskid, price, userid } = bid;

  console.log(bid);

  if (!db) {
    db = await getDatabase();
  }
  console.log("testing POST Bid function");
  const sql = `
  INSERT INTO biddings (taskid, price, userid) 
  VALUES 
    (?, ?, ?)
`;

  const result = await db!.run(sql, [taskid, price, userid]);

  return new Response(JSON.stringify(null), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
