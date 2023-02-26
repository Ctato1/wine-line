import React from "react";
import HashLoader from "react-spinners/HashLoader";
import "./loading.css";

const Loading = ({ loading }) => {
  return (
    <div className="loading">
      <HashLoader
        color={"#7b0b0b"}
        size={100}
        loading={loading}
      />
    </div>
  );
};

export default Loading;
