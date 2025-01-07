import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase
const supabase = createClient(
  "https://qbfrjfaucjpatbmhcvkn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZnJqZmF1Y2pwYXRibWhjdmtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNDExNDQsImV4cCI6MjA1MTgxNzE0NH0.oTnQAX9biQTl26dsx27G8XSl7s9fzB4SZxaHd9qOIko"
);

export default function Homework() {
  const [homeworks, setHomeworks] = useState<any[]>([]); 

  // Fetch homeworks from Supabase
  async function getHomeworks() {
    try {
      const { data, error } = await supabase.from("homeworks").select("*");
      if (error) throw error;
      setHomeworks(data || []); 
      console.log(data);
      
    } catch (error) {
      console.error("Error fetching homeworks:", error);
    }
  }

  useEffect(() => {
    getHomeworks(); 
  }, []);

  return (
    <ul>
      {homeworks.map((homework, index) => (
        <li key={index}>
          <strong>{homework.subject}</strong>: {homework.topic} - {homework.description}
        </li>
      ))}
    </ul>
  );
}
