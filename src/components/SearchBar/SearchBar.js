import React, { useState } from "react";
import { InputGroup, FormControl, Button, Form, Col } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchHeader } from "./styles";
import GetData from "../../productsCategory.json";

function SearchBar() {
  const [search, setSearch] = useState("");

  function handleFilter(event) {
    event.preventDefault();
    const result = GetData.data.nodes.filter(
      (item) => item.category.name.toLowerCase().indexOf(search) !== -1
    );
  }

  function handleFilterChange(event) {
    setSearch(event.target.value.toLowerCase());
  }

  return (
    <SearchHeader>
      <Form onSubmit={handleFilter}>
        <Form.Row>
          <Col className="col-xl-3">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Procure pela categoria"
                aria-label="Procure pela categoria"
                onChange={handleFilterChange}
              />
              <InputGroup.Append>
                <Button type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Form.Row>
      </Form>
    </SearchHeader>
  );
}

export default SearchBar;
