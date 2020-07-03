import React from "react";

export default function SearchResult(props) {
  return (
    <div className="SearchResult">
      <h2>{props.title}</h2>
      <p>{props.poster}</p>
    </div>
  );
}
