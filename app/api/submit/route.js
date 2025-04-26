import connectMongo from "../../../libs/mongoose";
import Form from "../../../models/Form";

export async function POST(request) {
  try {
    const body = await request.json();
    await connectMongo();
    const newForm = await Form.create(body);
    return new Response(JSON.stringify({ success: true, data: newForm }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
