
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BeerTable from './BeerTable';
import PaginationControl from './PaginationControl';
import { useSelector } from 'react-redux';

const App = () => {
  const currentPage = 1; // Set initial page
  const totalPages = 10; // Set total pages based on your API response
  const beers = useSelector((state) => state.beers);

  return (
    <Container>
      <Row>
        <Col>
          <BeerTable />
          <PaginationControl currentPage={currentPage} totalPages={totalPages} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
