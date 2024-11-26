import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function CardManager() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://10.115.1.45:8055/items/people");
        const data = await response.json();
        setPeople(data.data);  
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="bg-lime-950 w-screen h-full p-24">
      <h1 className="text-white text-right text-4xl font-mono m-10">
        HTL Dornbirn 5bWI
      </h1>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))]">
        {people.length > 0 ? (
          people.map((person) => {
            console.log(person.image);  // Log the image ID or any other data
            return (
              <Card
                key={person.id}
                imageUrl={`http://10.115.1.45:8055/assets/${person.image}`} 
                name={person.name}
                text={person.text} 
              />
            );
          })
        ) : (
          <p className="text-white">Loading...</p>
        )}
      </div>
    </div>
  );
}
