import React, { useState } from "react";
import styles from "@/styles/Tabbar.module.css";
import { userState } from "@/atoms/userAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { feedScope } from "@/atoms/scopeAtom";
function Tabbar() {
    const [selected, setSelected] = useRecoilState(feedScope);
    const currentUser = useRecoilValue(userState);

    return (
        <div className={`${styles.selector} mx-4 sm:mx-2 gap-4`}>
            <div
                className={`${styles.selection} ${
                    selected == 0 ? styles.selected : null
                }`}
                onClick={() => setSelected(0)}
            >
                Public
            </div>
            <div
                className={`${styles.selection} ${
                    selected == 1 ? styles.selected : null
                }`}
                onClick={() => currentUser && setSelected(1)}
            >
                Mutual
            </div>
        </div>
    );
}

export default Tabbar;
