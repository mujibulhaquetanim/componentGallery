import { useState } from "react";
import Tag from "./Tag";

interface tag {
  tag: string[];
}

export default function SelectionPage() {
  const [tags, setTags] = useState<tag>({ tag: [] });

  const selectTag = (tag: string) => {
    if (tags.tag.some((item) => item === tag)) {
      const filterTags = tags.tag.filter((item) => item !== tag);
      setTags((prev) => {
        return { ...prev, tag: filterTags };
      });
    } else {
      setTags((prev) => {
        return { ...prev, tag: [...prev.tag, tag] };
      });
    }
  };

  console.log(tags.tag);

  return (
    <div>
      <Tag tagName="JS" selectTag={selectTag} />
      <Tag tagName="Python" selectTag={selectTag} />
      <Tag tagName="GO" selectTag={selectTag} />
      <Tag tagName="C" selectTag={selectTag} />
    </div>
  );
}
