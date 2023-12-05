"use client";

import React from "react";
import AddStaffForm from "@/components/teampage/AddStaffForm";
import StaffList from "@/components/teampage/StaffList";

export default function Home() {
    return (
        <div>
            <h1>Your Web App</h1>
            <StaffList />
            <AddStaffForm />
        </div>
    );
}
