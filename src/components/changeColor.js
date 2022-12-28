import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";
import { useSelector } from "react-redux";

export default function ChangeColor() {
  const themeColor = useSelector((state) => state.theme.value);

  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        style={{ backgroundColor: themeColor }}
        type="text"
        placeholder="Desired Color"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />

      <button
        onClick={() => dispatch(changeColor(color))}
        style={{ backGroundcolor: themeColor }}
      >
        Change Color
      </button>
    </div>
  );
}
