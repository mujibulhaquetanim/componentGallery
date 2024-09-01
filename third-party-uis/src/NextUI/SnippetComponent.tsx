import { Snippet } from "@nextui-org/react";

export default function SnippetComponent() {
  return (
    <div className="flex mt-4 justify-center items-center">
      <Snippet symbol="#" variant="bordered" color="danger">
        npm install @nextui-org/react
      </Snippet>
    </div>
  );
}
