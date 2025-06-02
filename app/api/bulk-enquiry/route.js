export async function POST(request) {
  const body = await request.json();
  const res = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/bulk-enqueries/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.API_TOKEN,
      },
      body: JSON.stringify(body),
    }
  );
  return res;
}
