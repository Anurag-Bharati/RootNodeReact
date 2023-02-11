import { atom } from "recoil";

export const userState = atom({
    key: "userState", // unique ID (w.r.t other atoms/selectors)
    default: null, // initial value
});
