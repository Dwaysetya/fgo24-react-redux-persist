import React from "react";
import { BsEmojiTear } from "react-icons/bs";
import { BsEmojiGrin } from "react-icons/bs";

function View({ item, onToggle, onDelete }) {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="flex gap-3 items-center">
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
          {item.value}
        </label>
        <div className="ml-5 cursor-pointer" onClick={onDelete}>
          {item.packed ? (
            <BsEmojiGrin className="w-10 h-10 text-white" />
          ) : (
            <BsEmojiTear className="w-10 h-10 text-white" />
          )}
        </div>
      </div>
    </div>
  );
}

export default View;
