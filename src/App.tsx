import React, { useState } from "react";
import Forms from "./components/Forms";
import TableComponent from "./components/Table";
import Filter from "./components/Filter";

interface FormData {
  name: string;
  amt: number;
  category: string;
}

const App: React.FC = () => {
  const [formDataList, setFormDataList] = useState<FormData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleAddRow = (formData: FormData) => {
    setFormDataList((prevList) => [...prevList, formData]);
  };

  const handleRemoveRow = (index: number) => {
    setFormDataList((prevList) => {
      const updatedList = [...prevList];
      updatedList.splice(index, 1);
      return updatedList;
    });
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Forms onAddRow={handleAddRow} />
      <Filter onCategoryChange={handleCategoryChange} />
      <TableComponent
        formDataList={formDataList}
        selectedCategory={selectedCategory || ""}
        onRemoveRow={handleRemoveRow}
      />
    </div>
  );
};

export default App;
