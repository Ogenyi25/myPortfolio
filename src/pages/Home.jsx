import React from "react";
import Navbar from "../components/Navbar";
import { Modal, Button, ButtonToolbar, Card } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
          MY WORK
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <div className="modal-body-content row">
          <div className="web-content col-md-5">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require("../assets/images/john.jpg")} alt="img" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
    </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="design-content col-md-5">
            design work
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


const Home = () => {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="home">
      <Navbar />
      <div className="container-fluid">
        <div className="welcome row">
          <div className="welcome-words col-md-6">
            <h4 className="welcome-title">
              WELCOME!
          </h4>
            <h3 className="welcome-body">MY NAME IS OTOR JOHN STEPHEN</h3>
            <h5 className="welcome-body-note">Web-Developer and UIUX/Graphics Designer</h5>
            {/*<button className="hire-me">HIRE ME</button>*/}
            <ButtonToolbar>
              <Button className="see-work" href="./pages/Work.jsx">
                See MY WORK
      </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </ButtonToolbar>

          </div>
          <div className="welcome-image col-md-4">
            <div className="image">
              <img src={require("../assets/images/john.jpg")} alt="img" className="myimg" />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;
