import React from "react";
import { useRecoilValue } from "recoil";
import { countAtom } from "../store/atoms/count";

const CountRendrer = () => {
  const count = useRecoilValue(countAtom);
  return (
    <>
      <div>
        {count}
        {count % 2 == 0 && count > 0 ? " is Even" : " is Odd"}
      </div>
    </>
  );
};

export default CountRendrer;
