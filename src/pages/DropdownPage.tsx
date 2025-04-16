import React from "react";

const DropdownPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Dropdown Page</h1>
      <select className="mt-4 rounded border p-2">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

export default DropdownPage;
