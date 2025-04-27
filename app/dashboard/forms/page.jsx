"use client";

import { useState, useEffect } from "react";

export default function FormsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/forms");
      const forms = await res.json();
      setData(forms);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/forms/${id}`, { method: "DELETE" });
    setData(data.filter((form) => form._id !== id));
  };

  const handlePatch = async (id) => {
    const newName = prompt("Enter new name:");
    if (newName) {
      await fetch(`/api/forms/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName }),
      });
      setData(
        data.map((form) =>
          form._id === id ? { ...form, name: newName } : form
        )
      );
    }
  };

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

            <button
              onClick={() => handlePatch(form._id)}
              className="mr-2 bg-yellow-500 px-3 py-1 rounded"
            >
              Edit Name
            </button>
            <button
              onClick={() => handleDelete(form._id)}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
