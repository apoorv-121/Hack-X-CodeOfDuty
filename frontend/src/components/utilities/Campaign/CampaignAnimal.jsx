import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Campaign.css";
import Btn from "../Btn/Btn";

const CampaignPlant = () => {
  return (
    <div>
      <Container className="outer-box">
        <Row>
          <Col md={4}>
            <Image src="assets/sample.jpg" rounded className="image-box" />
          </Col>
          <Col md={8}>
            <div className="right-box">
              <div>
                <span className="heading">Animal Type: </span>
                <span className="head-value">Doggie</span>
              </div>
              <div>
                <span className="heading">Place: </span>
                <span className="head-value">IET Lucknow</span>
              </div>
              <div>
                <span className="heading">Problem Facing: </span>
                <span className="head-value">Its Alone</span>
              </div>
            </div>
            <div className="right-box-button">
              <Btn visible={true} type="animal" />
              <Button variant="primary" className="mx-4">
                Volunteer
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CampaignPlant;
