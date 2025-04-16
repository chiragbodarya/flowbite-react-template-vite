import React from "react";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <div>
        <h1 className="mb-4 text-2xl font-bold">Welcome to the App</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div style={{ height: "2000px" }}>
          {/* Simulating long content */}
          <p>Scroll down to see the effect.</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default App;
