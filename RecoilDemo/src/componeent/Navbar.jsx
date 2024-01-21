import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
} from "../store/atoms/atoms";
import { totalNotificationSelector } from "../store/selector/Selector";

const Navbar = () => {
  const notifications = useRecoilValue(notificationAtom);
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const [messageCount, setMessageCount] = useRecoilState(messagingAtom);
  const totalCount = useRecoilValue(totalNotificationSelector);
  return (
    <div className="">
      <button>Here</button>
      <button>My Network -{networkCount}</button>
      <button>Jobs- {jobsCount}</button>
      <button>Messaging - {messageCount}</button>
      <button>Notification-{notifications > 99 ? "99+" : notifications}</button>
      <button>Me - {totalCount}</button>
    </div>
  );
};

export default Navbar;
