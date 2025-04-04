"use client";

export default function UmlDiagram() {
  return (
    <div className="mt-4">
      <div className="flex gap-2">
        <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">PlantUML</button>
        <button className="bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600">Domain Model</button>
      </div>
      <div className="mt-2 p-4 bg-gray-50 border rounded-lg min-h-[150px]">
        <p className="text-gray-700">UML Visualization will be shown here...</p>
      </div>
      <div className="flex gap-2 mt-4">
        <button className="flex-1 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">Submit to Database</button>
        <button className="flex-1 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Search for Similar</button>
        <button className="flex-1 bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600">Export</button>
      </div>
    </div>
  );
}
