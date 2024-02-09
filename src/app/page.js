"use client";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [input, setInput] = useState("");
  const [wordCloudUrl, setWordCloudUrl] = useState("");
  const generateWordCloud = () => {
    const encodedText = encodeURIComponent(input);
    const apiUrl = `https://quickchart.io/wordcloud?text=${encodedText}`;
    setWordCloudUrl(apiUrl);
  };
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="font-bold text-2xl my-2">Word Cloud Generator</h1>
      <textarea
        className="w-full h-40 p-2 border border-gray-300 text-[#171717] rounded"
        placeholder="Enter your text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      <button
        className="mt-4 bg-blue-500 text-white p-2 rounded"
        onClick={generateWordCloud}
      >
        Generate Word Cloud
      </button>

      {wordCloudUrl && (
        <div className="mt-8 bg-white rounded-md backdrop-blur-3xl">
          <h2 className="text-xl font-bold text-center text-black mb-2">
            Generated Word Cloud
          </h2>
          <Image
            src={wordCloudUrl}
            alt="Word Cloud"
            className="w-full"
            width={300}
            height={300}
          />
        </div>
      )}
    </main>
  );
}
