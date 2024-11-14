import { dummyData } from "./dummyData";
import Table from 'react-bootstrap/Table';
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SearchFilter() {
  return (
    <div className="h-screen grid place-items-center">
        <h1 className="text-3xl font-bold">Search Filter</h1>
        <Container>
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
                {dummyData.map((item)=>{
                    return(
                        <tr key={item.id}>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
        </Container>
    </div>
  )
}
