import React, { useState, useEffect } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { getSubmissions } from "./services/localStorage";
import FavouritesTab from "./components/FavouritesTab";
import SearchBar from "./components/SearchBar";
import SubmissionsList from "./components/SubmissionList";


function App() {

  const [submissions, setSubmissions] = useState([]);
  const [orderBy, setOrderBy] = useState("newest");
  // const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");


  const handleSearch = (term) => {
    setSearchTerm(term);
  };


  useEffect(() => {
    setSubmissions(getSubmissions());
  }, []);

  // const handleAddSubmission = (submission) => {
  //   saveSubmission(submission);
  //   setSubmissions([...submissions, submission]);
  // };


  const handleOrderByChange = (e) => {
    setOrderBy(e.target.value);
  };

  const filteredSubmissions = [...submissions];
  if (orderBy === "newest") {
    filteredSubmissions.sort(
      (a, b) => new Date(b.submissionTime) - new Date(a.submissionTime)
    );
  } else {
    filteredSubmissions.sort(
      (a, b) => new Date(a.submissionTime) - new Date(b.submissionTime)
    );
  }



  return (
    <div className="App">

      

      <Container>
        <Col>
          <Row>
            <h1 className="text-center">Submissions</h1>
          </Row>
          <Row>
            <h1 className="text-center">Submissions</h1>
          </Row>
        </Col>
        <Col>
          <Row>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Col>
                <Row sm={3}>
                  <Col sm={5}>
                    <Row >
                      <Nav variant="pills" className="flex-col">
                        <Nav.Item>
                          <Nav.Link eventKey="first">All Submissions</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Favourite Submission</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Row>
                  </Col>
                  <Col sm={5}>
                    <Row>
                      <div className="flex-col">
                        <Col sm={2}>
                          <SearchBar
                            onSearch={handleSearch}
                          />
                        </Col>
                        <Col sm={2}>
                          <select
                            value={orderBy} onChange={handleOrderByChange}
                          >
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                          </select>
                        </Col>
                      </div>
                    </Row>
                  </Col>
                </Row>


                <Row sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      
                      <SubmissionsList searchTerm={searchTerm} />
                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">

                      <FavouritesTab submissions={filteredSubmissions} />
                    </Tab.Pane>
                  </Tab.Content>
                </Row>
              </Col>
            </Tab.Container>
          </Row>
        </Col>
      </Container>

    </div>
  );
}

export default App;
