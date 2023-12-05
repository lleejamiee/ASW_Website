import React from "react";

const StaffMember = ({ name, imageUrl, linkedInUrl }) => {
    return (
        <div style={{ margin: "20px", textAlign: "center" }}>
            <img
                src={imageUrl}
                alt={`${name}'s headshot`}
                style={{ width: "100px", borderRadius: "50%" }}
            />
            <h3>{name}</h3>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
            </a>
        </div>
    );
};

export default StaffMember;
