interface props {
  tagName: string;
  selected: (tag: string) => void;
  selectTag: (tagName: string) => void;
}

export default function tag({ tagName, selectTag, selected }: props) {
  const tagStyle = {
    JS: { backgroundColor: "red" },
    Python: { backgroundColor: "green" },
    GO: { backgroundColor: "blue" },
    C: { backgroundColor: "orange" },
    default: { backgroundColor: "white" },
  };
  return (
    <button
      style={selected ? tagStyle[tagName] : tagStyle.default}
      type="button"
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
}
