import connectMongo from "../../../libs/mongoose";
import Form from "../../../models/Form";

export async function GET() {
  try {
    await connectMongo();
    const forms = await Form.find();
    return Response.json(forms);
  } catch (e) {
    console.error(e);
    return new Response("Server error", { status: 500 });
  }
}
