import React from "react";
import { Button } from "./Button";
import CountRendrer from "./CountRendrer";
import { RecoilRoot } from "recoil";

const Count = () => {
  return (
    <div>
      <RecoilRoot>
        <Button />
        <CountRendrer />
      </RecoilRoot>
    </div>
  );
};

export default Count;
