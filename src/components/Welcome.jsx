import React from 'react'
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();
    const handleStart = () => {
        navigate("/questions");
      };
  return (
    <div className="flex flex-col items-center justify-start h-screen border-2 border-amber-300 px-10 py-10">
    <div className=" text-center mt-48  text-gradient bg-clip-text bg-gradient-to-r from-gradient-text-from via-gradient-text-via via-gradient-text-via2 to-gradient-text-to text-transparent">
      <h1 className="text-6xl font-bold mb-6">Welcome to the Quiz</h1>
      <p className="text-xl mb-12">
        Test your knowledge with our exciting quiz! Click the button below to start.
      </p>
      
    </div>
    <div className="flex items-center justify-center mt-32">
      <button onClick={handleStart} className="px-8 py-4 text-xl font-semibold border-2 border-amber-600  text-white rounded-lg hover:bg-amber-600 active:scale-95">
        Let's Go
      </button>
    </div>
  </div>
  
  )
}

export default Welcome