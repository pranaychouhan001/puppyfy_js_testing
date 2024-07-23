import React, { useState } from 'react';
import "./Stories.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BlobServiceClient } from '@azure/storage-blob';
import preview from "../assets/preview.jpg"

function CreatePost({ onRemovePostClick }) {
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
     const response = await fetch('http://localhost:3001/generateSasTokenPosts');
     if (!response.ok) {
       alert("Failed to get SAS token.");
       return;
     }
     const data = await response.json();
     const sasToken = data.sasToken;

    const currentDate = new Date().toISOString().replace(/:/g, '-'); // Format datetime for filename
    const originalFileName = file.name;
    const newFileName = `test112233_${currentDate}_${originalFileName}`;

    const blobServiceClient = new BlobServiceClient(`https://puppyfystorage.blob.core.windows.net?${sasToken}`);
      const containerClient = blobServiceClient.getContainerClient('user-posts');
    const blobClient = containerClient.getBlockBlobClient(newFileName);

    try {
      const uploadBlobResponse = await blobClient.uploadBrowserData(file);
      console.log(`Upload block blob ${newFileName} successfully`, uploadBlobResponse);

      // Constructing the image URL
      const imageUrl = `https://puppyfystorage.blob.core.windows.net/user-posts/${newFileName}`;
      
      // Getting the description from input (replace with your actual input element ref)
      const description = document.querySelector('.form-control').value;
      
      // Author information
      const author = 'test112233'; // Replace with actual author information

      // Sending imageUrl, description, and author to backend
      const response = await fetch('http://localhost:3001/posts_upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageUrl,
          description,
          author,
        }),
      });

      if (response.ok) {
        alert("Post uploaded successfully!");
        // Call onRemovePostClick after successful upload
        onRemovePostClick();
      } else {
        alert("Failed to upload Post.");
      }
    } catch (error) {
      console.error("Error uploading post: ", error.message);
      alert("Failed to upload Post.");
    }
  }

  return (
    <div className="post-adding active-story">
      <div className="close-button-storyfull">
        <h2 ><AiOutlineCloseCircle onClick={onRemovePostClick}/></h2>
      </div>
      <div className="content-storyfull">
        <div className="story-storyfull">
          <input type="file" onChange={handleChange} />
          <img src={fileUrl} alt="Preview" />
          <input
            className="form-control"
            placeholder="Write a description for your picture"
          />
          <button type="button" className="btn-add-story btn btn-info" onClick={handleUpload}>Create your Post</button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
