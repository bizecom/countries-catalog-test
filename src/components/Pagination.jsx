import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center gap-2 py-4">
    <button
      className="px-4 py-2 bg-gray-200 rounded"
      disabled={currentPage === 1}
      onClick={() => onPageChange(currentPage - 1)}
    >
      Previous
    </button>
    <span>Page {currentPage} of {totalPages}</span>
    <button
      className="px-4 py-2 bg-gray-200 rounded"
      disabled={currentPage === totalPages}
      onClick={() => onPageChange(currentPage + 1)}
    >
      Next
    </button>
  </div>
);

export default Pagination;
