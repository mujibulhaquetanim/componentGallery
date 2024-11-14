import { dummyData } from "./dummyData";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function SearchFilter() {
  const [search, setSearch] = useState("");
  return (
    <Container>
      <h1 className="text-3xl font-bold text-center mt-1">Search Filter</h1>
      <Form>
        <Form.Group className="m-4">
          <Form.Control
            size="lg"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />
        </Form.Group>
      </Form>

      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {dummyData
            .filter((item) =>
              item.first_name === ""
                ? item
                : item.first_name.toLowerCase().includes(search)
            )
            .map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
}
