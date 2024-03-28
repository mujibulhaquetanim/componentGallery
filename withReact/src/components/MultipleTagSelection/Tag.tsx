interface props {
  tagName: string;
  select: (tag: string) => void;
  selectTag: (tagName: string) => void;
}

export default function tag({ tagName, selectTag }: props) {
  return (
    <button
      style={{
        background: "green",
        padding: "15px",
        margin: "5px",
        borderRadius: "70%",
      }}
      type="button"
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
}
