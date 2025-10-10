import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Navbars = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-4">
      <Navbar.Brand href="#home" className="fw-bold text-primary">
        🛍️ MyShop
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">หน้าแรก</Nav.Link>
          <Nav.Link href="#features">โปรโมชั่น</Nav.Link>
          <Nav.Link href="#pricing">ติดต่อเรา</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl type="text" placeholder="ค้นหาสินค้า..." className="me-2" />
          <Button variant="outline-primary">ค้นหา</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbars;
