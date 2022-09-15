import React from "react";

function Dashboard({ loggedInStatus, handleLogout }) {

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Dashboard</h1>
      <h1>Status: {loggedInStatus}</h1>
      <button onClick={handleLogout} className="btn btn-primary">Logout</button>
    </div>
  );
}

export default Dashboard;
