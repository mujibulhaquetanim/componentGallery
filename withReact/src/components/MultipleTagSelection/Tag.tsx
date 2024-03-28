interface props {
  tagName: string;
  // setTags: React.Dispatch<React.SetStateAction<string[]>>
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
