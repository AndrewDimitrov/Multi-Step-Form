import connectMongo from "../../libs/mongoose";
import Form from "../../models/Form";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await connectMongo();

    const newForm = await Form.create(req.body);
    res.status(200).json({ success: true, data: newForm });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
