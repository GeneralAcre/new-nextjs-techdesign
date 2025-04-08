'use client'

import { useState, useEffect } from 'react';
import RandomJoke from "@/components/randomJoke";
import './globals.css'; 

export default function Home() {
  const [joke, setJoke] = useState(null);

  // Function to fetch a random joke
  const fetchRandomJoke = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const resJSON = await response.json();
      setJoke(resJSON); // Update the joke state
    } catch (error) {
      console.error('Error fetching the joke:', error);
    }
  };

  // Fetch joke when the page loads
  useEffect(() => {
    fetchRandomJoke();
  }, []); // Empty dependency array means this will run only once when the component mounts

  return (
    <div className="wrapper p-[16px]">
      {/* TOP BAR HEADER */}
      <header className="flex justify-between items-center mb-[16px]">
        <h1 className="text-[50px] font-bold">Your Task</h1>
        <img className="w-[24px] h-[24px]" src="/hamburger.png" />
      </header>

      <main className="flex flex-col gap-[16px]">
        <input type="text" placeholder="Search" className="p-[16px] pl-[24px] border-gray-500 border-[1px] rounded-[100px] w-[100%]" />

        {/* RandomJoke Component */}
        <RandomJoke joke={joke} />

        <button 
          onClick={fetchRandomJoke} 
          className="Button">
          Get Another Joke
        </button>
        
      </main>
    </div>
  );
}
