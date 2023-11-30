// src/PaginationControl.js
import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchBeers } from './Actions';

const PaginationControl = ({ currentPage, totalPages }) => {
    const dispatch = useDispatch();

    const handlePageChange = (page) => {
        dispatch(fetchBeers(page, 10));
    };

    return (
        <div className="pagination-container">
            <Pagination className="pagination">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <Pagination.Item key={page} active={page === currentPage} onClick={() => handlePageChange(page)}>
                        {page}
                    </Pagination.Item>
                ))}
            </Pagination>
        </div>
    );
};

export default PaginationControl;
