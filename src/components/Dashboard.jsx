import React from "react";
import Hello from "./dashboard/Hello";

function Dashboard({ userName }) {
  return (
    <section className="dashboard">
      <Hello name={userName} />
    </section>
  );
}

export default Dashboard;
