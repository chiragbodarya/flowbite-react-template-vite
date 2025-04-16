import React from "react";

const InputBoxPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Input Box Page</h1>
      <input
        type="text"
        placeholder="Enter text here"
        className="mt-4 w-full rounded border p-2"
      />
    </div>
  );
};

export default InputBoxPage;
