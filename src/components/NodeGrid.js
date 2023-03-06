import { userState } from "@/atoms/userAtom";
import { fetchRandom, fetchRecomm } from "@/services/conn.service";
import React, { useEffect, useId, useState } from "react";
import { useRecoilValue } from "recoil";
function NodeGrid({ type }) {
    const currentUser = useRecoilValue(userState);
    const [randoms, setRandoms] = useState([]);
    const [recomms, setRecoms] = useState([]);
    const reactId = useId();
    useEffect(() => {
        fetchRandom()
            .then((res) => setRandoms(res.data?.data))
            .catch((err) => console.error(err));
        fetchRecomm()
            .then((res) => setRecoms(res.data?.data))
            .catch((err) => console.error(err));
    }, [currentUser]);
    return (
        <div className=" rounded-2xl relative flex  flex-wrap p-3">
            {type === "random"
                ? randoms.map((e, i) => (
                      <div
                          className="h-30  w-24 rounded-2xl m-1 box-border"
                          key={reactId + i + ":randm:"}
                      >
                          <img
                              className="object-cover rounded-2xl "
                              src={`http://localhost:3000/${e?.avatar}`}
                              alt="user-img"
                          />
                          <p className="text-center">{e?.fname + e?.lname}</p>
                      </div>
                  ))
                : recomms.map((e, i) => (
                      <div
                          className="h-30  w-24 rounded-2xl m-1 box-border"
                          key={reactId + i + ":recom:"}
                      >
                          <img
                              className="object-cover rounded-2xl "
                              src={`http://localhost:3000/${e?.avatar}`}
                              alt="user-img"
                          />
                          <p className="text-center overflow-hidden text-ellipsis">
                              {e?.fname + e?.lname}
                          </p>
                      </div>
                  ))}
        </div>
    );
}

export default NodeGrid;
