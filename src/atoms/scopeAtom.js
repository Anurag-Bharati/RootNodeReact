import { atom } from "recoil";

export const feedScope = atom({
    key: "feedScope", // unique ID (w.r.t other atoms/selectors)
    default: 0, // initial value
});
