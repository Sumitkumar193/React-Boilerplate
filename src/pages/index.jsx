import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {
  return (
    <>
      <div>Root</div>
      <button onClick={() => toast.success("Hello")}>Click me</button>
    </>
  )
}

export default index