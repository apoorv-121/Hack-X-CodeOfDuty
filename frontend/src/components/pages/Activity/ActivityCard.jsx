import React, { useState } from "react";
import "./Activity.css";
import { Modal, Button } from "react-bootstrap";
import { format, parseISO } from "date-fns";
import Resizer from "react-image-file-resizer";
import axios from "axios";
const ActivityCard = ({ activity, onRefresh }) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCardLayerClick = () => {
    handleShow();
    // setIsCompleted(true);
  };
  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        500,
        500,
        "JPEG",
        60,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const uploadAvatar = async (event) => {
    try {
      const file = event.target.files[0];
      const img = await resizeFile(file);
      setImage(img);
    } catch (err) {
      console.log(err);
    }
  };

  const uploadPic = async (id) => {
    await axios.patch("http://localhost:8000/activities", {
      _id: id,
      imageURL: image,
    });
    handleClose();
    onRefresh();
  };
  return (
    <div>
      <div
        className={`day-card ${activity.completed ? "done" : "pending"}`}
        style={{ backgroundImage: `url(${activity.imageURL})` }}
      >
        <div className="day-card-content">
          {activity.completed ? <div className="done-mark-tick"></div> : null}
          <div className="day-card-content-day">
            {format(parseISO(activity.createdAt), "MMM")}
          </div>
          <div>{format(parseISO(activity.createdAt), "dd")}</div>
        </div>
        <div
          className="card-layer card-layer-pending"
          onClick={handleCardLayerClick}
        >
          {activity.title}
        </div>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload your Today's Activity Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="file" accept="image/*" onChange={uploadAvatar} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              uploadPic(activity._id);
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ActivityCard;
