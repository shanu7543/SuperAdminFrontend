// pages/dashboard.tsx

import { useState } from "react";

const dashboard = () => {
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <div
      id="simple-menu"
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        background: "#fff",
        zIndex: "1000",
        padding: "8px",
      }}
    >
      <div onClick={closeMenu}>Action</div>
      <div onClick={closeMenu}>Another action</div>
      <div onClick={closeMenu}>Something else</div>
    </div>
  );

  return (
    <div>
      {/* Orders Overview */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "16px",
          margin: "16px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>Orders overview</h2>
        {/* Insert your content here */}
      </div>

      {/* Projects */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "16px",
          margin: "16px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <div>
            <h2>Projects</h2>
            <p>30 done this month</p>
          </div>
          <div
            style={{
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={openMenu}
          >
            more_vert
          </div>
        </div>
        {/* Insert your content here */}
      </div>

      {/* You can add more sections/components here */}
    </div>
  );
};

export default dashboard;
