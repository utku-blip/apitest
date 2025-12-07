
export default async function handler(request, context) {
  return new Response(
    JSON.stringify({ success: true, message: "API is working!" }),
    { headers: { "Content-Type": "application/json" } }
  );
}
