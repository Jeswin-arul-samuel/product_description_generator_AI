import React from "react";

const categoryStyles = {
  fashion: "bg-pink-100 text-pink-800 border-pink-300",
  electronics: "bg-blue-100 text-blue-800 border-blue-300",
  unknown: "bg-gray-100 text-gray-700 border-gray-300"
};

const ResultDisplay = ({ imagePath, category = 'unknown', metadata }) => {
  if (!metadata) return null;

  const fullImageUrl = imagePath ? `http://localhost:8000/${imagePath}` : null;
  const categoryStyle = categoryStyles[category] || categoryStyles.unknown;

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6">
        {fullImageUrl && (
          <img
            src={fullImageUrl}
            alt="Uploaded Product"
            className="w-full md:w-1/2 object-cover rounded-lg"
          />
        )}

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">{metadata.title}</h2>

          <span
            className={`inline-block px-3 py-1 text-xs font-semibold rounded border ${categoryStyle}`}
          >
            {category.toUpperCase()}
          </span>

          <p className="text-gray-700 mt-2">{metadata.description}</p>

          {Array.isArray(metadata.features) && metadata.features.length > 0 && (
            <ul className="list-disc list-inside mt-4">
              {metadata.features.map((feat, index) => (
                <li key={index}>{feat}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
