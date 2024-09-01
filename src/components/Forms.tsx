import React from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";

interface FormData {
  name: string;
  amt: number;
  category: string;
}

interface Props {
  onAddRow: (formData: FormData) => void;
}

const Forms: React.FC<Props> = ({ onAddRow }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const submitHandler = (values: FormData) => {
    onAddRow(values);
    reset();
  };

  return (
    <div className="container" style={{ margin: "0 auto", maxWidth: "800px" }}>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <h3>Form Component</h3>
        <Form.Group className="mb-3" controlId="product">
          <Form.Label>Product</Form.Label>
          <Form.Control
            type="text"
            {...register("name", { required: true, minLength: 5 })}
          />
          {errors.name && (
            <Form.Text>
              Please enter a valid product name (min. 5 characters).
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="amount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            {...register("amt", { required: true, min: 1, max: 10000 })}
          />
          {errors.amt && (
            <Form.Text>
              Please enter a valid amount (between 1 and 10000).
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Select {...register("category", { required: true })}>
            <option value="">Select One</option>
            <option value="Grocery">Grocery</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </Form.Select>
          {errors.category && <Form.Text>Please select a category.</Form.Text>}
        </Form.Group>

        <button className="btn btn-primary" type="submit">
          Add item
        </button>
      </Form>
    </div>
  );
};

export default Forms;
