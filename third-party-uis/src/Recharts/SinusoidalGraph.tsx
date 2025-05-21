import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Define our data point type
interface DataPoint {
  time: number;
  value: number;
}

const SinusoidalGraph: React.FC = () => {
  // State to hold our data points
  const [data, setData] = useState<DataPoint[]>([]);

  // Configuration for our sine wave
  const maxDataPoints = 50;
  const amplitude = 1;
  const frequency = 0.1;
  const phaseShift = 0;

  useEffect(() => {
    let counter = 0;
    // Create initial data points
    const initialData: DataPoint[] = Array.from(
      { length: maxDataPoints },
      (_, i) => ({
        time: i,
        value: amplitude * Math.sin(frequency * i + phaseShift),
      })
    );

    setData(initialData);

    // Update data every 100ms
    const interval = setInterval(() => {
      //counter will be incremented from 0 to 1 for first time, then continue incrementing
      counter++;

      // Generate new data point using sinusoidal function
      const newValue = amplitude * Math.sin(frequency * counter + phaseShift);

      // Add new data point to the data array with a time counter and calculated value using sinusoidal function
      setData((prevData) => {
        const newData = [...prevData, { time: counter, value: newValue }];

        // keep only the last 50 data points in the array and in the graph frame and remove every first data point to create dynamic graph
        if (newData.length > maxDataPoints) {
          // on every update, remove the first data point, this will create dynamic graph, slice will return a new array without the first element
          newData.slice(1);
        }
        return newData;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []); // // Empty dependency array ensures this runs once on mount

  return (
    <div className="w-full h-[80vh]">
      <h2>Real-time Sinusoidal Wave</h2>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            label={{
              value: "Time",
              position: "insideBottomRight",
              offset: -10,
            }}
          />
          <YAxis
            domain={[-amplitude - 0.2, amplitude + 0.2]}
            label={{ value: "Amplitude", angle: -90, position: "insideLeft" }}
          />
          <Tooltip formatter={(value) => Number(value).toFixed(2)} />{" "}
          {/* typeof value === 'number' ? value.toFixed(2) : value */}
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            dot={false}
            isAnimationActive={false}
            name="Sine Wave"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SinusoidalGraph;
