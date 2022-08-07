import React from "react";
import ReactLoading from "react-loading";


export default function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center h-75">
      <ReactLoading type={"balls"} color={"blue"} height={100} width={100} />
    </div>
  );
}
