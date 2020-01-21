import React from "react";
import Navbar from "../components/Navbar";
import { Card } from 'react-bootstrap';

const Work = () => {
    return (
        <div className="home">
            <Navbar />
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
    );
}


export default Work;