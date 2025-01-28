import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack,Button,Card} from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
const BootstrapExample = () => {
  return (
    <div className='p-3'>
    <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
            Button as link
        </Button>
        <Button as="a" variant="success">
            Button as link
        </Button>
        <Button as="a" variant="danger">
            Delete
        </Button>
        <button className='btn btn-warning'>ADd</button>
    </Stack>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default BootstrapExample
