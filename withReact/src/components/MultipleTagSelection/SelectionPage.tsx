import { useState } from "react";
import Tag from "./Tag";

interface tag {
  tag: string[];
}

export default function SelectionPage() {
  const [tags, setTags] = useState<tag>({ tag: [] });

  const checkTag = (tagName: string) => {
    return tags.tag.some((item) => item === tagName);
  };

  const selectTag = (tagName: string) => {
    if (tags.tag.some((item) => item === tagName)) {
      const filterTags = tags.tag.filter((item) => item !== tagName);
      setTags((prev) => {
        return { ...prev, tag: filterTags };
      });
    } else {
      setTags((prev) => {
        return { ...prev, tag: [...prev.tag, tagName] };
      });
    }
  };

  console.log(tags.tag);

  return (
    <div>
      <div className="border-2 p-1 mt-3 justify-center flex flex">
        <Tag tagName="JS" selectTag={selectTag} selected={checkTag("JS")} />
        <Tag
          tagName="Python"
          selectTag={selectTag}
          selected={checkTag("Python")}
        />
        <Tag tagName="GO" selectTag={selectTag} selected={checkTag("GO")} />
        <Tag tagName="C" selectTag={selectTag} selected={checkTag("C")} />
      </div>
      <div className="gap=3 m-3">You have selected: {tags.tag} </div>
    </div>
  );
}
