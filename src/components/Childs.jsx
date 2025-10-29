import React from "react";

const Childs = React.memo(({ onClick }) => {
  console.log("🟡 Child rendered");

  return (
    <div>
      <button onClick={onClick}>Child Button</button>
    </div>
  );
});

export default Childs;
