import React, { useState } from "react";
import exampleImg1 from "../assets/img/minimum_time_visiting_all_points_ex1.JPG";

const EXAMPLE1_POINTS = [
  [1, 1],
  [3, 4],
  [-1, 0],
];
console.log("EXAMPLE1_POINTS");

const MinimumTimeVisitingAllPoints = () => {
  const [foldingImg, setFoldingImg] = useState(false);
  console.log("MinimumTimeVisitingAllPoints Call!!");

  return (
    <>
      <div>
        <p>모든 좌표를 방문하는데 걸리는 최소시간(sec) 구하기!!</p>
        <ul>
          <li>이슈: https://github.com/dlgustn555/react_prototype/issues/18</li>
          <li>한번에 한칸식 이동 가능</li>
          <li>한칸 이동하는데 소요되는 시간은 1초</li>
        </ul>
        <p>예시1: 좌표 = {JSON.stringify(EXAMPLE1_POINTS)}</p>
        <p>
          <b>★★ 최소시간 = 7초</b>{" "}
          <button
            onClick={() => {
              setFoldingImg(!foldingImg);
            }}
          >
            예시1 이미지 {foldingImg ? "펼치기(보이기)" : "접기(숨기기)"}
          </button>
        </p>
        <img
          src={exampleImg1}
          alt="예시1 이미지"
          style={{ display: foldingImg ? "none" : "block" }}
        />
      </div>
      <div></div>
    </>
  );
};

export default MinimumTimeVisitingAllPoints;
