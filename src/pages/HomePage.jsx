import React, { useEffect } from "react";
import background from "../assets/lava.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addUsers, removeData } from "../redux/reducer/todos";
import View from "../components/View";

function HomePage() {
  const [val, setVal] = React.useState([]);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.todos.data);
  console.log("aaa", users);
  const { register, handleSubmit, reset } = useForm();

  function submitData(value) {
    const newValue = {
      ...value,
      id: Date.now(),
      packed: false,
    };
    dispatch(addUsers(newValue));
    alert("Data berhasil ditambahkan");
    reset();
  }

  useEffect(() => {
    setVal(users);
  }, [users]);

  const handleToggle = (id) => {
    setVal((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDelete = (id) => {
    dispatch(removeData(id));
  };

  return (
    <div
      className="w-full h-full bg-cover bg-center flex flex-col gap-5 absolute"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col max-w-full mx-auto my-20 gap-10">
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit(submitData)}
        >
          <div className="flex justify-center">
            <h1 className="font-extrabold text-white text-4xl">
              Silahkan List Budget Pengeluaran kamu
            </h1>
          </div>
          <div className="h-12 border flex overflow-hidden rounded">
            <input
              {...register("text")}
              id="text"
              label="masukkan list"
              className="flex-1 outline-none px-5 text-white"
              type="text"
            />
          </div>
          <button className="h-12 bg-orange-700 text-white" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="flex flex-col justify-center items-center">
        {val.map((item) => (
          <View
            key={item.id}
            item={item}
            onToggle={() => handleToggle(item.id)}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
