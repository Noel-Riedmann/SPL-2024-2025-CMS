import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase
const supabase = createClient(
  "https://qbfrjfaucjpatbmhcvkn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZnJqZmF1Y2pwYXRibWhjdmtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNDExNDQsImV4cCI6MjA1MTgxNzE0NH0.oTnQAX9biQTl26dsx27G8XSl7s9fzB4SZxaHd9qOIko"
);

export default function Homework() {
  const [homeworks, setHomeworks] = useState<any[]>([]);
  const [newHomework, setNewHomework] = useState({
    subject: "",
    topic: "",
    description: "",
  });

  async function getHomeworks() {
    try {
      const { data, error } = await supabase.from("homeworks").select("*");
      if (error) throw error;
      setHomeworks(data || []);
    } catch (error) {
      console.error("Error fetching homeworks:", error);
    }
  }

  async function addHomework(event: React.FormEvent) {
    event.preventDefault();
    try {
      const { data, error } = await supabase.from("homeworks").insert([newHomework]);
      if (error) throw error;
      setHomeworks((prev) => [...prev, ...data]);
      setNewHomework({ subject: "", topic: "", description: "" });
    } catch (error) {
      console.error("Error adding homework:", error);
    }
  }

  useEffect(() => {
    getHomeworks();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Homework List</h1>
      <form onSubmit={addHomework} className="mb-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <input
            type="text"
            placeholder="Subject"
            value={newHomework.subject}
            onChange={(e) => setNewHomework({ ...newHomework, subject: e.target.value })}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Topic"
            value={newHomework.topic}
            onChange={(e) => setNewHomework({ ...newHomework, topic: e.target.value })}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={newHomework.description}
            onChange={(e) => setNewHomework({ ...newHomework, description: e.target.value })}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Homework
        </button>
      </form>
      <ul className="space-y-4">
        {homeworks.map((homework, index) => (
          <li
            key={index}
            className="p-4 border rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <strong className="block text-lg">{homework.subject}</strong>
            <span className="block text-sm text-gray-600">{homework.topic}</span>
            <p className="text-gray-800">{homework.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
