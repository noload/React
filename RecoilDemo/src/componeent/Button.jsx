import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { countAtom } from "../store/atoms/count";

export function Button() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}
