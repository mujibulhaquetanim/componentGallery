import { Tooltip, Button } from "@nextui-org/react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";

export default function TooltipComponent() {
  return (
    <div className="flex gap-3 mt-7 justify-center items-center">
      <Tooltip placement="top" color="warning" content="NextUI Tooltip">
        <Button variant="faded" color="secondary" className="capitalize">
          ToolTip
        </Button>
      </Tooltip>

      <Popover placement="right">
        <PopoverTrigger>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2 text-black">
            <div className="text-small font-bold">Popover Content</div>
            <div className="text-tiny">This is the popover content</div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
