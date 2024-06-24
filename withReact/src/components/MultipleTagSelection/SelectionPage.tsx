import { useState } from "react";
import Tag from "./Tag";

interface TagState {
  tag: Set<string>;
}

export default function SelectionPage() {
  const [tags, setTags] = useState<TagState>({ tag: new Set() });

  const checkTag = (tagName: string) => {
    return tags.tag.has(tagName);
  };

  const selectTag = (tagName: string) => {

    const tag = tags.tag;

    if (tag.has(tagName)) {
      tag.delete(tagName);
    }
    else {
      tag.add(tagName);
    }

    setTags({ tag: new Set(tag) });

  };

  console.log(tags.tag);

  return (
    <div>
      <div className="border-2 p-1 mt-3 justify-center flex">
        <Tag tagName="JS" selectTag={selectTag} selected={checkTag("JS")} />
        <Tag tagName="Python" selectTag={selectTag} selected={checkTag("Python")} />
        <Tag tagName="GO" selectTag={selectTag} selected={checkTag("GO")} />
        <Tag tagName="C" selectTag={selectTag} selected={checkTag("C")} />
      </div>
      <div className="gap-3 m-3">You have selected: {Array.from(tags.tag).join(", ")}</div>
    </div>
  );
}
import { useState } from "react";
import Tag from "./Tag";

interface TagState {
  tag: Set<string>;
}

export default function SelectionPage() {
  const [tags, setTags] = useState<TagState>({ tag: new Set() });

  const checkTag = (tagName: string) => {
    return tags.tag.has(tagName);
  };

  const selectTag = (tagName: string) => {

    const tag = tags.tag;

    if (tag.has(tagName)) {
      tag.delete(tagName);
    }
    else {
      tag.add(tagName);
    }

    setTags({ tag: new Set(tag) });

  };

  console.log(tags.tag);

  return (
    <div>
      <div className="border-2 p-1 mt-3 justify-center flex">
        <Tag tagName="JS" selectTag={selectTag} selected={checkTag("JS")} />
        <Tag tagName="Python" selectTag={selectTag} selected={checkTag("Python")} />
        <Tag tagName="GO" selectTag={selectTag} selected={checkTag("GO")} />
        <Tag tagName="C" selectTag={selectTag} selected={checkTag("C")} />
      </div>
      <div className="gap-3 m-3">You have selected: {Array.from(tags.tag).join(", ")}</div>
    </div>
  );
}
import { useState } from "react";
import Tag from "./Tag";

interface TagState {
  tag: Set<string>;
}

export default function SelectionPage() {
  const [tags, setTags] = useState<TagState>({ tag: new Set() });

  const checkTag = (tagName: string) => {
    return tags.tag.has(tagName);
  };

  const selectTag = (tagName: string) => {

    const tag = tags.tag;

    if (tag.has(tagName)) {
      tag.delete(tagName);
    }
    else {
      tag.add(tagName);
    }

    setTags({ tag: new Set(tag) });

  };

  console.log(tags.tag);

  return (
    <div>
      <div className="border-2 p-1 mt-3 justify-center flex">
        <Tag tagName="JS" selectTag={selectTag} selected={checkTag("JS")} />
        <Tag tagName="Python" selectTag={selectTag} selected={checkTag("Python")} />
        <Tag tagName="GO" selectTag={selectTag} selected={checkTag("GO")} />
        <Tag tagName="C" selectTag={selectTag} selected={checkTag("C")} />
      </div>
      <div className="gap-3 m-3">You have selected: {Array.from(tags.tag).join(", ")}</div>
    </div>
  );
}
import { useState } from "react";
import Tag from "./Tag";

interface TagState {
  tag: Set<string>;
}

export default function SelectionPage() {
  const [tags, setTags] = useState<TagState>({ tag: new Set() });

  const checkTag = (tagName: string) => {
    return tags.tag.has(tagName);
  };

  const selectTag = (tagName: string) => {

    const tag = tags.tag;

    if (tag.has(tagName)) {
      tag.delete(tagName);
    }
    else {
      tag.add(tagName);
    }

    setTags({ tag: new Set(tag) });

  };

  console.log(tags.tag);

  return (
    <div>
      <div className="border-2 p-1 mt-3 justify-center flex">
        <Tag tagName="JS" selectTag={selectTag} selected={checkTag("JS")} />
        <Tag tagName="Python" selectTag={selectTag} selected={checkTag("Python")} />
        <Tag tagName="GO" selectTag={selectTag} selected={checkTag("GO")} />
        <Tag tagName="C" selectTag={selectTag} selected={checkTag("C")} />
      </div>
      <div className="gap-3 m-3">You have selected: {Array.from(tags.tag).join(", ")}</div>
    </div>
  );
}
