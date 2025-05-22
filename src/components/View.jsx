import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsEmojiTear } from "react-icons/bs";
import { BsEmojiGrin } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { editData } from "../redux/reducer/todos";

function View({ item, onToggle, onDelete }) {
  const [isModal, setIsModal] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  function handleEdit(value) {
    console.log("qqq", value);
    const editedValue = {
      id: item.id,
      text: value.text,
      packed: item.packed,
    };
    dispatch(editData(editedValue));
    setIsModal(false);
  }

  return (
    <div className="flex ">
      <div className="flex gap-3 items-center mb-10">
        <input
          type="checkbox"
          name="pilihan"
          className="h-5 w-5"
          checked={item.packed}
          onChange={onToggle}
        />
        <label
          htmlFor="pilihan"
          className="font-bold text-white text-2xl cursor-pointer"
          style={item.packed ? { textDecoration: "line-through" } : {}}
        >
          {item.text}
        </label>
        <div className="ml-5 cursor-pointer" onClick={() => setIsModal(true)}>
          <FiEdit className="text-white text-3xl" />
        </div>
        <div className="ml-5 cursor-pointer" onClick={onDelete}>
          {item.packed ? (
            <BsEmojiGrin className="w-10 h-10 text-white" />
          ) : (
            <BsEmojiTear className="w-10 h-10 text-white" />
          )}
        </div>
        {isModal && (
          <form
            onSubmit={handleSubmit(handleEdit)}
            className="flex justify-center items-center gap-5"
          >
            <div className="">
              <input
                {...register("text")}
                id="pilihan"
                type="text"
                defaultValue={item.text}
                className="w-[300px] h-[54px] rounded-full py-[15px] px-[24px] bg-orange/50 border border-white hover:border-orange-500 text-white shadow-xl/50 "
              />
            </div>
            <div className="w-[384px] h-[54px] rounded-full flex">
              <button
                className="shadow-xl/10 w-[100px] h-[54px] rounded-full bg-orange-600 text-white self-center "
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default View;
