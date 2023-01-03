import React from "react";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";

const TagTypeAhead = () => {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <div>
        <h1>Skills</h1>
        {/* <pre>{JSON.stringify(selected)}</pre> */}
        <TagsInput
          value={selected}
          onChange={setSelected}
          name="Skills"
          placeHolder="enter skills"
        />
        <em>press enter or comma to add new tag</em>
      </div>
    </>
  );
};

export default TagTypeAhead;
