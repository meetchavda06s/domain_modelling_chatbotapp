"use client";
import { useState } from "react";

export default function ChatSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col w-full md:w-1/2 bg-white shadow-lg p-4 ">
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded-lg w-full mb-4"
      />
      <div className="flex-1 bg-gray-50 p-4 rounded-lg border h-64 overflow-auto">
        <p className="text-gray-500">Chatbot conversation will appear here...</p>
      </div>
      <div className="flex gap-2 mt-4">
        <button className="flex-1 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">Feedback</button>
        <button className="flex-1 bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600">Extend</button>
        <button className="flex-1 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600">Reduce</button>
      </div>
      <div className="flex mt-4">
        <textarea
          className="flex-1 p-2 border rounded-lg"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Send</button>
      </div>
    </div>
  );
}
