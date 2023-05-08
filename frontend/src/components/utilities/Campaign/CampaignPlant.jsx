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
                <span className="heading">Campaign Name: </span>
                <span className="head-value">Go green</span>
              </div>
              <div>
                <span className="heading">Venue: </span>
                <span className="head-value">IET Lucknow</span>
              </div>
              <div>
                <span className="heading">Time: </span>
                <span className="head-value">10 Am on 29th Feb</span>
              </div>
            </div>
            <div className="right-box-button">
              <Btn visible={true} type="plant" />
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
