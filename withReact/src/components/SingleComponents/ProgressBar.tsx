interface data {
  value: number;
}

export default function ProgressBar({ value = 0 }: data) {
  return (
    <center className="h-16 w-1/2 bg-green-800 border-solid rounded-full m-2">
      <span className="flex justify-center w-full items-center">
        {value.toFixed()}%
      </span>
    </center>
  );
}
