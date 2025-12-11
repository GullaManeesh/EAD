import React, { useState } from "react";

function Pagination() {
  // 100 items
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <h1>Pagination Component</h1>

      {/* Display items */}
      {currentItems.map((item, index) => (
        <div key={index}>{item}</div>
      ))}

      {/* Pagination Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button
          disabled={currentPage === 0}
          onClick={() => setCurrentPage(currentPage - 1)}>
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
