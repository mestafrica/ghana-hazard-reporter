import { useState } from "react";
import { dummyHazards } from "../data/dummyData";
import { Hazard } from "../data/hazard";
import HazardForm from "../components/HazardForm";
import HazardMap from "../components/HazardMap";

export default function DashboardPage() {
  const [hazards, setHazards] = useState([...dummyHazards]);

  const handleHazardSubmit = (newHazard: Hazard) => {
    setHazards([...hazards, newHazard]);
  };

  console.log(hazards);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Hazard Reporter</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <HazardForm onAddHazard={handleHazardSubmit} />
        <HazardMap hazards={hazards} />
      </div>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Reported Hazards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hazards.map((hazard, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">{hazard.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {hazard.location.latitude}
            </p>
            <p className="text-sm text-gray-600 mb-4">{hazard.hazardType}</p>
            {hazard.images.length > 0 && (
              <div className="grid grid-cols-2 gap-2">
                {Array.from(hazard.images).map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt={hazard.title}
                    className="w-full h-auto object-cover rounded"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
