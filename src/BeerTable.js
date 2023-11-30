// src/BeerTable.js
import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBeers } from './Actions';

const BeerTable = () => {
    const dispatch = useDispatch();
    const beers = useSelector((state) => state.beers);

    useEffect(() => {
        dispatch(fetchBeers(1, 10));
    }, [dispatch]);

    return (
        <div className="table-container">
            <Table striped bordered hover className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Tagline</th>
                        {/* Add more columns based on your API response */}
                    </tr>
                </thead>
                <tbody>
                    {beers.map((beer) => (
                        <tr key={beer.id}>
                            <td>{beer.name}</td>
                            <td>{beer.tagline}</td>
                            {/* Add more cells based on your API response */}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default BeerTable;
