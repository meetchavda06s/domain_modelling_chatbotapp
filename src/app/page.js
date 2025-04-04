"use client";
import ChatSection from "./ChatSection";
import ScenarioText from "./ScenarioText";
import UmlDiagram from "./UmlDiagram";

export default function MainChatbot() {
  return (
    <div>
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-4 gap-4">
      <ChatSection />
      <div className="flex flex-col w-full md:w-1/2 bg-white shadow-lg p-4 ">
        <ScenarioText />
        <UmlDiagram />
      </div>
    </div>
    </div>
  );
}
