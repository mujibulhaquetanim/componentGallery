import { Tooltip, Button } from "@nextui-org/react";

export default function TooltipComponent() {
  return (
    <div className="flex gap-3 mt-7 justify-center items-center">
      <Tooltip placement="top" color="warning" content="NextUI Tooltip">
        <Button variant="faded" color="secondary" className="capitalize">
          ToolTip
        </Button>
      </Tooltip>
    </div>
  );
}
