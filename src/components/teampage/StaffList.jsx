import React from "react";
import StaffMember from "./StaffMember";
import staffData from "./staff_data/staffData.json";

const StaffList = () => {
    return (
        <div>
            <h2>Our Staff</h2>
            {staffData.map((staffMember) => (
                <StaffMember key={staffMember.name} {...staffMember} />
            ))}
        </div>
    );
};

export default StaffList;
