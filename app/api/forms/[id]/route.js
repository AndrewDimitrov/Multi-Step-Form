import connectMongo from "../../../../libs/mongoose";
import Form from "../../../../models/Form";

export async function DELETE(request, context) {
  try {
    await connectMongo();
    const { id } = await context.params;
    const deletedForm = await Form.findByIdAndDelete(id);
    if (!deletedForm) {
      return new Response("Form not found", { status: 404 });
    }
    return new Response("Form deleted", { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response("Server error", { status: 500 });
  }
}

export async function PATCH(request, context) {
  try {
    await connectMongo();
    const { id } = await context.params; // 👈 await here
    const updates = await request.json();
    const updatedForm = await Form.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedForm) {
      return new Response("Form not found", { status: 404 });
    }
    return Response.json(updatedForm);
  } catch (e) {
    console.error(e);
    return new Response("Server error", { status: 500 });
  }
}
