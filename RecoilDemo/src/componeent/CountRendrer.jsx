import React from "react";
import { useRecoilValue } from "recoil";
import { countAtom } from "../store/atoms/count";

const CountRendrer = () => {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
};

export default CountRendrer;
