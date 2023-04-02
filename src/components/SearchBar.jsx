import React, { useState } from "react";
import { Form } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <Form.Group controlId="formSearch">
      <Form.Control style={{ width: "300px" }}
        type="text"
        placeholder="Search by Title"
        value={searchTerm}
        onChange={handleChange}
      />
    </Form.Group>
  );
};

export default SearchBar;
