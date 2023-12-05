// AddStaffForm.jsx
import React from "react";
import { useState } from "react";
import { db, storage } from "@/database/firebase";

const AddStaffForm = () => {
    const [name, setName] = useState("");
    const [linkedInUrl, setLinkedInUrl] = useState("");
    const [photo, setPhoto] = useState(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setPhoto(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Upload photo to Firebase Storage
        const storageRef = storage.ref(`staff-photos/${photo.name}`);
        const photoSnapshot = await storageRef.put(photo);
        const photoUrl = await photoSnapshot.ref.getDownloadURL();

        // Add staff member details to Firestore
        await db.collection("staff").add({
            name,
            linkedInUrl,
            photoUrl,
        });

        // Reset form
        setName("");
        setLinkedInUrl("");
        setPhoto(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br />
            <label>
                LinkedIn URL:
                <input
                    type="text"
                    value={linkedInUrl}
                    onChange={(e) => setLinkedInUrl(e.target.value)}
                />
            </label>
            <br />
            <label>
                Photo:
                <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                />
            </label>
            <br />
            <button type="submit">Add Staff Member</button>
        </form>
    );
};

export default AddStaffForm;
