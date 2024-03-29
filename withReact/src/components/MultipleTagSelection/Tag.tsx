interface props {
  tagName: string;
  selected: boolean;
  selectTag: (tagName: string) => void;
}

export default function tag({ tagName, selectTag, selected }: props) {
  const tagStyle: Record<string, { backgroundColor: string }> = {
    JS: { backgroundColor: "red" },
    Python: { backgroundColor: "green" },
    GO: { backgroundColor: "blue" },
    C: { backgroundColor: "yellow" },
    default: { backgroundColor: "#AEE0B5" },
  };
  return (
    <button
      className="border-2 ml-5 p-3 rounded-lg hover:scale-105"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      type="button"
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
}
