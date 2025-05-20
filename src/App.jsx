import React from "react";
import View from "./components/View";
import { TextContext } from "./components/TextContext";
import InputData from "./components/Input";
import background from "./assets/lava.jpg";

function App() {
  const [val, setVal] = React.useState([]);

  const handleAddItem = (inputText) => {
    const newItem = {
      value: inputText,
      packed: false,
    };
    setVal([...val, newItem]);
  };

  const handleToggle = (index) => {
    setVal((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDelete = (index) => {
    setVal((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <TextContext.Provider value={val}>
      <div
        className="w-full h-full bg-cover bg-center flex flex-col gap-5 absolute"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex flex-col max-w-full mx-auto my-20 gap-10">
          <InputData onSubmit={handleAddItem} />
          {val.map((item, index) => (
            <View
              key={index}
              item={item}
              onToggle={() => handleToggle(index)}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
      </div>
    </TextContext.Provider>
  );
}

export default App;
