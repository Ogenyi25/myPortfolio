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
          <div className="web-content col-md-4">
            <Card style={{ width: '15rem', height: '35rem' }}>
              <Card.Img variant="top" src={require("../assets/images/john.jpg")} alt="img" />
              <Card.Body>
                <Card.Title>ServicedPro</Card.Title>
                <Card.Text>
                  An official company site for an organisation that rents office spaces.
                </Card.Text>
                <Button variant="primary">Visit Site</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
          <Card style={{ width: '15rem', height: '35rem' }}>
              <Card.Img variant="top" src={require("../assets/images/john.jpg")} alt="img" />
              <Card.Body>
                <Card.Title>ServicedPro</Card.Title>
                <Card.Text>
                  An official company site for an organisation that rents office spaces.
                </Card.Text>
                <Button variant="primary">Visit Site</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
          <Card style={{ width: '15rem', height: '35rem' }}>
              <Card.Img variant="top" src={require("../assets/images/john.jpg")} alt="img" />
              <Card.Body>
                <Card.Title>ServicedPro</Card.Title>
                <Card.Text>
                  An official company site for an organisation that rents office spaces.
                </Card.Text>
                <Button variant="primary">Visit Site</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="modal-body-content row">
          <div className="web-content col-md-4">
            <Card style={{ width: '15rem', height: '35rem' }}>
              <Card.Img variant="top" src={require("../assets/images/john.jpg")} alt="img" />
              <Card.Body>
                <Card.Title>ServicedPro</Card.Title>
                <Card.Text>
                  An official company site for an organisation that rents office spaces.
                </Card.Text>
                <Button variant="primary">Visit Site</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
          <Card style={{ width: '15rem', height: '35rem' }}>
              <Card.Img variant="top" src={require("../assets/images/john.jpg")} alt="img" />
              <Card.Body>
                <Card.Title>ServicedPro</Card.Title>
                <Card.Text>
                  An official company site for an organisation that rents office spaces.
                </Card.Text>
                <Button variant="primary">Visit Site</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
          <Card style={{ width: '15rem', height: '35rem' }}>
              <Card.Img variant="top" src={require("../assets/images/john.jpg")} alt="img" />
              <Card.Body>
                <Card.Title>ServicedPro</Card.Title>
                <Card.Text>
                  An official company site for an organisation that rents office spaces.
                </Card.Text>
                <Button variant="primary">Visit Site</Button>
              </Card.Body>
            </Card>
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
              <Button className="see-work" onClick={() => setModalShow(true)}>
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
