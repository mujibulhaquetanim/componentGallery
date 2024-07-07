import React, { useState } from "react";
import Tag from "./Tag";

interface TagState {
  tag: Set<string>;
}

export const SelectionPage: React.FC = function () {
  const [tags, setTags] = useState<TagState>({ tag: new Set() });

  const checkTag = (tagName: string) => {
    return tags.tag.has(tagName);
  };

  const selectTag = (tagName: string) => {
    const tag = tags.tag;

    if (tag.has(tagName)) {
      tag.delete(tagName);
    } else {
      tag.add(tagName);
    }

    setTags({ tag: new Set(tag) });
  };

  return (
    <div>
      <div className="border-2 p-1 mt-3 justify-center flex items-center">
        <Tag tagName="JS" selectTag={selectTag} selected={checkTag("JS")} />
        <Tag
          tagName="Python"
          selectTag={selectTag}
          selected={checkTag("Python")}
        />
        <Tag tagName="GO" selectTag={selectTag} selected={checkTag("GO")} />
        <Tag tagName="C" selectTag={selectTag} selected={checkTag("C")} />
      </div>
      {tags.tag.size > 0 ? (
        <div className="p-1 m-3 flex justify-center">
          You have selected: {Array.from(tags.tag).join(", ")}
        </div>
      ) : (
        <div className="p-1 m-3 flex justify-center">
          You have not selected any tags 🙄
        </div>
      )}
    </div>
  );
};
