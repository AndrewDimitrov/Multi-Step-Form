export const dynamic = "force-dynamic";
import connectMongo from "../../../libs/mongoose";
import Form from "../../../models/Form";

const getData = async () => {
  try {
    await connectMongo();
    const forms = await Form.find();
    return forms;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default async function FormsPage() {
  const data = await getData();

  return (
    <div>
      <h1>All Forms</h1>
      <ul>
        {data.map((form) => (
          <li key={form._id} className="mb-6">
            <p>Name: {form.name}</p>
            <p>Email: {form.email}</p>
            <p>Phone: {form.phone}</p>
            <p>Yearly: {String(form.yearly)}</p>
            <p>Selected Plan: {form.selectedPlan}</p>
            <p>First Add: {String(form.firstAdd)}</p>
            <p>Second Add: {String(form.secondAdd)}</p>
            <p>Third Add: {String(form.thirdAdd)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
