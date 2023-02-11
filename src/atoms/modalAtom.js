import { atom } from "recoil";

export const postIdState = atom({
    key: "postIdState", // unique ID (w.r.t other atoms/selectors)
    default: "id", // initial value
});
