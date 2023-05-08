import React from "react";
import { Form, Button } from "react-bootstrap";

const FormAnimal = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label style={{ fontWeight: "bold" }}>Animal Name</Form.Label>
          <Form.Control type="email" placeholder="Enter the type of animal" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label style={{ fontWeight: "bold" }}>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Where you see the animal suffering"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
          <Form.Label style={{ fontWeight: "bold" }}>
            Problem with Animal
          </Form.Label>
          <Form.Control type="text" placeholder="What problem is it facing" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={{ fontWeight: "bold" }}>
            Upload the picture of Animal
          </Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default FormAnimal;
