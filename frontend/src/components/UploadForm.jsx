import React, { useState } from 'react';
import { uploadFile, generateMetadata } from '../services/api';

const UploadForm = ({ setImagePath, setCategory, setMetadata, setLoading }) => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file.");
      return;
    }

    try {
      setLoading(true);
      setMetadata(null);
      setCategory(null);
      setImagePath(null);

      // Upload to backend
      const uploadRes = await uploadFile(file);
      const { image_path, category } = uploadRes;

      setImagePath(image_path);
      setCategory(category);

      // Generate metadata
      const generateRes = await generateMetadata(image_path, category);
      setMetadata(generateRes);
    } catch (err) {
      console.error(err);
      alert('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto flex flex-col items-center space-y-4"
    >
      <input
        type="file"
        accept="image/*,video/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition"
      >
        Upload & Generate
      </button>
    </form>
  );
};

export default UploadForm;
