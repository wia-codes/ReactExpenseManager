import React from "react";
import { Form } from "react-bootstrap";

interface Props {
  onCategoryChange: (category: string) => void;
}

const Filter: React.FC<Props> = ({ onCategoryChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    console.log("Selected category (Filter):", selectedCategory);
    onCategoryChange(selectedCategory);
  };

  return (
    <div
      className="container"
      style={{ margin: "20px auto", maxWidth: "800px" }}
    >
      <div className="mt-3 mb-3">
        <h3>Filter Component</h3>
        <label>Filter</label>
        <Form.Select aria-label="filter" onChange={handleChange}>
          <option value="">Select All</option>
          <option value="Grocery">Grocery</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default Filter;
