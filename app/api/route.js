export async function GET(req, res) {
    // Check if the database instance has been initialized
    return new Response(JSON.stringify({
        data: [
            {
                message: "Health OK"
            }
        ]
    }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}