
import React from "react"
import Card from "react-bootstrap/Card"


function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Body>
            <Card.Title>Ronnie Sanchez</Card.Title>
            <Card.Text>
            I am a student at NC State and i am studying software development.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard