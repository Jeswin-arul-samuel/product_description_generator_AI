import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [imagePath, setImagePath] = useState(null);
  const [category, setCategory] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Product Metadata Generator</h1>

      <UploadForm
        setImagePath={setImagePath}
        setCategory={setCategory}
        setMetadata={setMetadata}
        setLoading={setLoading}
      />

      <div className="mt-10">
        <ResultDisplay
          imagePath={imagePath}
          category={category}
          metadata={metadata}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default App;
