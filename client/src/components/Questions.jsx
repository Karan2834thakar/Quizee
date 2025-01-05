import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const Questions = () => {
    const [question, setQuestion] = useState({});
    const aRef = useRef(null);
    const bRef = useRef(null);
    const cRef = useRef(null);
    const dRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const getQuestion = async () => {
        setLoading(true);
        const q = await axios.get("https://quiz-api-pnd2.onrender.com/quizapi");
        setQuestion(q.data);
        setLoading(false);
        console.log(question);
    };

    const correct = () => {
        if (question.co === "a") {
            aRef.current.style.backgroundColor = "#27ff00";
        } else if (question.co === "b") {
            bRef.current.style.backgroundColor = "#27ff00";
        } else if (question.co === "c") {
            cRef.current.style.backgroundColor = "#27ff00";
        } else {
            dRef.current.style.backgroundColor = "#27ff00";
        }
    };

    const HandleNext = () => {
        aRef.current.style.backgroundColor = "#616572";
        bRef.current.style.backgroundColor = "#616572";
        cRef.current.style.backgroundColor = "#616572";
        dRef.current.style.backgroundColor = "#616572";
        getQuestion();
    };

    const HandleClick = (key) => {
        correct();
        console.log(question.co, key);
        if (key != question.co)
            if (key === "a") {
                aRef.current.style.backgroundColor = "#ff1313";
            } else if (key === "b") {
                bRef.current.style.backgroundColor = "#ff1313";
            } else if (key === "c") {
                cRef.current.style.backgroundColor = "#ff1313";
            } else if (key === "d") {
                dRef.current.style.backgroundColor = "#ff1313";
            }
    };

    useEffect(() => {
        getQuestion();
    }, []);

    return (
        <div className=" h-screen w-screen relative flex justify-center items-center flex-col">
            {loading && (
                <div className="bg-slate-300 absolute top-5 p-3 z-20 rounded mx-auto">
                    Loading ...
                </div>
            )}
            <img className="h-screen object-cover absolute z-10 top-0" src="/bg2.jpg" alt="Background" />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 mt-32 ">
        <h1 className="text-amber-400 text-2xl font-bold bg-black/50 px-6 py-4 rounded-lg">
          {question.question}
        </h1>
        <div className="flex flex-wrap justify-center items-center">
          <button
            ref={aRef}
            className="active:scale-95 p-5 m-5 rounded w-[40%] text-white bg-gray-600"
            onClick={() => {
              HandleClick("a");
            }}
          >
            {question.a}
          </button>
          <button
            ref={bRef}
            className=" active:scale-95 p-5 m-5 rounded w-[40%] text-white bg-gray-600"
            onClick={() => {
              HandleClick("b");
            }}
          >
            {question.b}
          </button>
          <button
            ref={cRef}
            className="active:scale-95 p-5 m-5 rounded w-[40%] text-white bg-gray-600"
            onClick={() => {
              HandleClick("c");
            }}
          >
            {question.c}
          </button>
          <button
            ref={dRef}
            className="active:scale-95 p-5 m-5 rounded w-[40%] text-white bg-gray-600"
            onClick={() => {
              HandleClick("d");
            }}
          >
            {question.d}
          </button>
        </div>
        <button onClick={HandleNext} className="bg-gray-600 p-5 m-5 rounded active:scale-95">
          Next
        </button>
      </div>
        </div>
    )
}

export default Questions