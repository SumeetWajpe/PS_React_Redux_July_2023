import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://www.reliancedigital.in/medias/Dell-5520-Laptops-492850230-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0NDQ0OTd8aW1hZ2UvanBlZ3xpbWFnZXMvaGE3L2hjNy85ODQ0NTMyMTgzMDcwLmpwZ3wwM2Y1ZDlkZDQ4NjJlYTI1MjBjMmI4YTEwNzYyODI1YWYyNTE0MmU0YjVjNjIzYmY4NTk0NWFiMDJiZWNmNmNh"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
