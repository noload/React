import React from "react";
import { selector } from "recoil";
import { countAtom } from "../atoms/count";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
} from "../atoms/atoms";

const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2;
  },
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const message = get(messagingAtom);
    const jobs = get(jobsAtom);
    const network = get(networkAtom);
    const notification = get(notificationAtom);
    return message + jobs + network + notification;
  },
});

export default evenSelector;
