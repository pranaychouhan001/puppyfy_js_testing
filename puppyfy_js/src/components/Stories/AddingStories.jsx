import React, { useState } from 'react';
import './Stories.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BlobServiceClient } from '@azure/storage-blob';
import preview from "../assets/preview.jpg"

function AddingStories({ onRemoveStoryClick }) {
  const [file, setFile] = useState(preview);
  const [fileUrl, setFileUrl] = useState(preview);

  function handleChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileUrl(URL.createObjectURL(selectedFile));
  }

  async function handleUpload() {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    // Fetch SAS token from backend
    const response = await fetch('http://localhost:3001/generateSasTokenStory');
    if (!response.ok) {
      alert("Failed to get SAS token.");
      return;
    }
    const data = await response.json();
    const sasToken = data.sasToken;

    const currentDate = new Date().toISOString().replace(/:/g, '-');
    const originalFileName = file.name;
    const newFileName = `test112233_${currentDate}_${originalFileName}`;

    const blobServiceClient = new BlobServiceClient(`https://puppyfystorage.blob.core.windows.net?${sasToken}`);
    const containerClient = blobServiceClient.getContainerClient('user-stories');
    const blobClient = containerClient.getBlockBlobClient(newFileName);

    try {
      const uploadBlobResponse = await blobClient.uploadBrowserData(file);
      console.log(`Upload block blob ${newFileName} successfully`, uploadBlobResponse);

      const imageUrl = `https://puppyfystorage.blob.core.windows.net/user-stories/${newFileName}`;
      const author = 'test112233';

      const response = await fetch('http://localhost:3001/story_upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrl , author}),
      });

      if (response.ok) {
        alert("Story uploaded successfully!");
        onRemoveStoryClick();
      } else {
        alert("Failed to upload Story.");
      }
    } catch (error) {
      console.error("Error uploading file: ", error.message);
      alert("Failed to upload Story.");
    }
  }

  return (
    <div className="story-adding active-story">
      <div className="close-button-storyfull">
        <h2><AiOutlineCloseCircle onClick={onRemoveStoryClick} /></h2>
      </div>
      <div className="content-storyfull">
        <div className="story-storyfull">
          <input type="file" onChange={handleChange} />
          <img src={fileUrl} alt="Story" />
          <button type="button" className="btn-add-story btn btn-info" onClick={handleUpload}>
            Add to your Story
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddingStories;
