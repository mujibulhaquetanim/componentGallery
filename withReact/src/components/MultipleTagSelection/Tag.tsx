import React from "react";

interface TagProps {
  tagName: string;
  selected: boolean;
  selectTag: (tagName: string) => void;
}

const tagStyle: Record<string, { backgroundColor: string }> = {
  JS: { backgroundColor: "red" },
  Python: { backgroundColor: "green" },
  GO: { backgroundColor: "blue" },
  C: { backgroundColor: "yellow" },
  default: { backgroundColor: "#AEE0B5" },
};

const Tag: React.FC<TagProps> = ({ tagName, selectTag, selected }) => {
  const handleClick = () => {
    selectTag(tagName);
  };

  return (
    <button
      className="border-2 ml-5 p-3 rounded-lg hover:scale-105"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      type="button"
      onClick={handleClick}
    >
      {tagName}
    </button>
  );
};

export default Tag;
