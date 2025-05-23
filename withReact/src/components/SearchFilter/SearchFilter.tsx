import { dummyData } from "./dummyData";
import Table from "react-bootstrap/Table";
import { Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
// import { useEffect } from "react";

//difference between debounce and throttle is that debounce waits for a specific time interval before executing the function while throttle executes the function at regular intervals. for example, debounce waits for a specific time interval before executing the function and throttle executes the function at regular intervals like every 100ms.

// unknown[] is a generic type that represents an array of unknown elements of any type that is passed to the function as an argument. This is useful when you don't know the exact type of the arguments that are passed to the function. difference between unknown and any is that unknown is a type that is not known at compile time, while any is a type that is known at compile time. here we are using unknown because we don't know the type of the arguments that are passed to the function.
type Procedure<T extends unknown[]> = (...args: T) => void;

export default function SearchFilter() {
  const [search, setSearch] = useState("");
  // const [data, setData] = useState([]);

  // useEffect(()=>{
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`https://jsonplaceholder.typicode.com/api/users?search=${search}`);
  //       const data = await response.json();
  //       // setData(data.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   fetchData();
  // },[search])

  const debounce = <T extends unknown[]>(
    fn: Procedure<T>,
    delay: number
  ): Procedure<T> => {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: T): void => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  };

  // Inline the debounced function
  const debouncedSearch = debounce((value: string) => {
    setSearch(value);
  }, 1000);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    debouncedSearch(value); // Debounced function is invoked here
  };

  // Filter data based on the search input
  const filteredData = dummyData.filter((item) =>
    item.first_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <h1 className="text-3xl font-bold text-center mt-1">Search Filter</h1>
      <Form>
        <Form.Group className="m-4">
          <Form.Control
            size="lg"
            type="text"
            onChange={handleInputChange} // Debounced input handler
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
          {filteredData.length > 0 ? (
            // for fetched data, map through data.map()
            filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>"{search}" doesn't exist</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}
