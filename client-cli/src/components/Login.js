import React from 'react'
import {Card, Container,Row, Col, Button, Form} from 'react-bootstrap';

export const Login = () => {
  return (
    <div>
        <Card>
        <Card.Header>Login</Card.Header>
        <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
            With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </div>
  )
}