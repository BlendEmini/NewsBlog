import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Table from "./Table";
import CreateNewPost from "./CreateNewPost";

const Dashboard = ({ handleLogout }) => {
    const [showTable, setShowTable] = useState(false);
    return (
        <div className="flex flex-wrap">
            <Sidebar
                showTable={showTable}
                setShowTable={setShowTable}
                handleLogout={handleLogout}
            />
            <div className="flex flex-col">
                <CreateNewPost />

                {showTable ? <Table /> : null}
            </div>
        </div>
    );
};

export default Dashboard;
