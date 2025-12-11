import React from "react";
import "react-table-6/react-table.css";
function Table() {
  const data = [
    { name: "maneesh", age: 22, city: "hyd" },
    { name: "john", age: 21, city: "delhi" },
    { name: "doe", age: 23, city: "bangalore" },
  ];

  const columns = [
    { Header: "Name", accesspr: "name" },
    { Header: "Age", accesspr: "age" },
    { Header: "City", accesspr: "city" },
  ];
  return (
    <div>
      <ReactTable data={data} columns={columns} defaultPageSize={2} />
    </div>
  );
}

export default Table;
