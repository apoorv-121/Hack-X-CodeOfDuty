import React from "react";
import { Form, Button } from "react-bootstrap";

const FormPlant = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label style={{ fontWeight: "bold" }}>Campaign Name</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter the name of your Campaign"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label style={{ fontWeight: "bold" }}>Address</Form.Label>
          <Form.Control type="text" placeholder="Where this campaign is held" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
          <Form.Label style={{ fontWeight: "bold" }}>
            Name of Organiser
          </Form.Label>
          <Form.Control type="text" placeholder="Who is the Organiser" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default FormPlant;
