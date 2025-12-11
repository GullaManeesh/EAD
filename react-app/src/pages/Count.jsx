import React from "react";

function count() {
  const [name, setName] = React.useState("");
  const [submittedName, setSubmittedName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
  };
  return (
    <div>
      <h1>submittedName:{submittedName}</h1>
      <form action="">
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button type="submit" onClick={handleSubmit}></button>
      </form>
    </div>
  );
}

export default count;
