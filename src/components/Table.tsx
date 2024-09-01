import React from "react";
import { Table, Button } from "react-bootstrap";

interface FormData {
  name: string;
  amt: number;
  category: string;
}

interface Props {
  formDataList: FormData[];
  selectedCategory: string;
  onRemoveRow: (index: number) => void;
}

const TableComponent: React.FC<Props> = ({
  formDataList,
  selectedCategory,
  onRemoveRow,
}) => {
  const filteredData = selectedCategory
    ? formDataList.filter((data) => data.category === selectedCategory)
    : formDataList;

  const totalAmount = filteredData.reduce(
    (total, data) => total + +data.amt,
    0
  );

  const handleRemoveRow = (index: number) => {
    onRemoveRow(index);
  };

  return (
    <div
      className="container"
      style={{ margin: "20px auto", maxWidth: "800px" }}
    >
      <div className="table mt-3 mb-3">
        <h3>List Component</h3>
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.category}</td>
                <td>{data.amt}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => handleRemoveRow(index)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={4}>Total</td>
              <td>{totalAmount}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TableComponent;
