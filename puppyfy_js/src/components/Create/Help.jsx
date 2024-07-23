import React, { useState, useEffect } from "react";
import { BsFillSendFill } from "react-icons/bs";
import profilePic from "../assets/puppy1.jpg";
import "../notifications/Notifications.css";
import Notimage1 from "../assets/puppy2.jpg";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios";
import "./Create.css";
import { BlobServiceClient } from '@azure/storage-blob';

function Help() {
    const [newFeedback, setNewFeedback] = useState("");
    const [feedbacks, setFeedbacks] = useState([]);
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [imageurl, setImageurl] = useState("");
    const [file, setFile] = useState(null);
    const [fileUrl, setFileUrl] = useState("");

    useEffect(() => {
        fetchHelp();
    }, []);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (error) => {
                    console.error("Error fetching geolocation: ", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    const fetchHelp = async () => {
        try {
            const response = await axios.get("http://localhost:3001/help_db");
            setFeedbacks(response.data);
        } catch (error) {
            console.error("Error fetching feedbacks:", error);
        }
    };

    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setFileUrl(URL.createObjectURL(selectedFile));
    };

    const handleUpload = async () => {

        const response = await fetch('http://localhost:3001/generateSasTokenHelp');
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
        const containerClient = blobServiceClient.getContainerClient('help-section');
        const blobClient = containerClient.getBlockBlobClient(newFileName);

        try {
            const uploadBlobResponse = await blobClient.uploadBrowserData(file);
            console.log(`Upload block blob ${newFileName} successfully`, uploadBlobResponse);

            // Construct the URL based on your blob storage account and container name
            const imageUrl = `https://puppyfystorage.blob.core.windows.net/help-section/${newFileName}`;
            setImageurl(imageUrl); // Update the state with the new image URL
            return imageUrl;
        } catch (error) {
            console.error("Error uploading image:", error);
            return "";
        }
    };

    const handleSendHelp = async () => {
        const author = "test112233"; // Replace with actual author from your authentication context

        // If a file is selected, upload it first and wait for the URL
        let uploadedImageUrl = imageurl;
        if (file) {
            uploadedImageUrl = await handleUpload();
        }

        try {
            const response = await axios.post(
                "http://localhost:3001/help_db/help",
                { text: newFeedback, author, latitude, longitude, imageurl: uploadedImageUrl }
            );
            if (response.status === 200) {
                setNewFeedback(""); // Clear the input
                setImageurl(""); // Clear the image URL
                setFile(null); // Clear the file
                setFileUrl(""); // Clear the file URL preview
                fetchHelp(); // Refresh feedbacks
            }
        } catch (error) {
            console.error("Error sending help:", error);
        }
    };

    return (
        <div className="notifications">
            <div className="heading">
                <h5 className="back-to-feedback">
                    <IoMdArrowRoundBack />
                </h5>
                <h5>Help</h5>
            </div>
            <div className="help-content">
                {feedbacks.map((feedback) => (
                    <div className="notification-content-menu" key={feedback.help_id}>
                        <div className="info">
                            <div className="profile-picture">
                                <img src={feedback.profilepic_url} alt="Profile" />
                            </div>
                            <div className="friend-requester-info">
                                <p>
                                    {feedback.text}
                                    
                                </p>
                                <p><small className="text-gry"> -  {feedback.time_since_posted}</small></p>
                            </div>
                        </div>
                        {feedback.imageurl && (
                            <div className="help-image notification-action">
                                <img src={feedback.imageurl} alt="Help" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="feedback-input">
                <input
                    type="file"
                    onChange={handleChange}
                    id="image-selection"
                    placeholder="Img"
                />
                <input
                    className="form-control"
                    placeholder="Write your feedback..."
                    value={newFeedback}
                    onChange={(e) => setNewFeedback(e.target.value)}
                />
                <h5 className="feedback-insert-icon" onClick={handleSendHelp}>
                    <BsFillSendFill />
                </h5>
            </div>
        </div>
    );
}

export default Help;
