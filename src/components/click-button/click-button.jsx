import { useState } from "react";
import "./click-button.css";

const ClickButton = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      className="bg-blue-500 text-white p-2 rounded"
      onClick={() => setCount((count) => count + 1)}
    >
      {`Click me [${count}]`}
    </button>
  );
};

export default ClickButton;
