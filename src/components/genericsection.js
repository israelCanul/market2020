import React from "react";

export default function GenericSection(props) {
  return (
    <div className={`main_container `}>
      {props.title ? <div className="title">{props.title}</div> : ""}
      <div className={`list grid ${props.className}`}>{props.children}</div>
    </div>
  );
}
