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
      <Form.Control
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={handleChange}
      />
    </Form.Group>
  );
};

export default SearchBar;
