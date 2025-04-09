const API_BASE_URL = "http://localhost:8000";

export async function uploadFile(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_BASE_URL}/upload/`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Upload failed");
  }

  return await response.json(); // { image_path, category }
}

export const generateMetadata = async (imagePath, category) => {
  const res = await fetch('http://localhost:8000/generate/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ image_path: imagePath, category }), // ✅ this is correct
  });

  const data = await res.json();

  if (!res.ok) {
    console.error('[Metadata Error]', data);
    throw new Error(data.error || 'Metadata generation failed');
  }

  return data;
};

