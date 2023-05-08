import React, { useState } from 'react';
import './Activity.css';
import { Modal, Button } from 'react-bootstrap';

const Activity = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [show, setShow] = useState(false);

  const handleCardLayerClick = () => {
    handleShow()
    setIsCompleted(true);
  };

  const uploadPic = () => {

  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className='day-container'>
      <div className={`day-card ${isCompleted ? 'done' : 'pending'}`}>
        <div className="day-card-content">
            {isCompleted ? (
                <div className="done-mark-tick"></div>
            )
           : null}
          <div className="day-card-content-day">Day</div>
          <div>1</div>
        </div>
        <div
          className="card-layer card-layer-pending"
          onClick={handleCardLayerClick}
        >
          {isCompleted ? 'Activity Done' : 'Do your Task Today'}
        </div>
      </div>


      

{/* Modal */}
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload your Today's Activity Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type='file' />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={uploadPic}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
    </>
  );
};

export default Activity;

