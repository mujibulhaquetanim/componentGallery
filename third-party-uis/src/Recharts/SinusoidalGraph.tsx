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
  BarChart,
  Bar,
  Area,
  AreaChart,
  ScatterChart,
  Scatter,
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
          return newData.slice(1);
        }
        return newData;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []); // // Empty dependency array ensures this runs once on mount

  return (
    <div className="min-w-full mt-7">
      <h2 className="font-bold text-xl mb-3">Real-time Sinusoidal Wave</h2>
      <div className="w-full h-[80vh] grid grid-cols-2">
        <ResponsiveContainer width="100%" height="80%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              label={{
                value: "Time",
                position: "insideBottomRight",
                offset: -5,
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
        {/* Bar Graph */}
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={data}>
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
            <Tooltip
              formatter={(value) =>
                typeof value === "number" ? value.toFixed(2) : value
              }
            />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" name="Sine Wave" />
          </BarChart>
        </ResponsiveContainer>
        {/* area graph */}
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart data={data}>
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
              // here domain is fixed range
              domain={[-amplitude - 0.2, amplitude + 0.2]}
              label={{ value: "Amplitude", angle: -90, position: "insideLeft" }}
            />
            <Tooltip
              formatter={(value) =>
                typeof value === "number" ? value.toFixed(2) : value
              }
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              fill="#8884d8"
              name="Sine Wave"
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* scatter graph, The ScatterChart needs explicit instructions to display its continuous domain in a discrete-like manner*/}
        <ResponsiveContainer width="100%" height="80%">
          <ScatterChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              type="number"
              /*
              here domain is dynamic
              - 'dataMin' becomes the smallest time value in the current dataset (after older points are removed)
              - 'dataMax' becomes the largest time value
              */
              domain={["dataMin", "dataMax"]}
              // tickCount is the number of ticks to show on the x-axis.
              tickCount={10}
              // allowDecimals is a boolean that controls whether decimal values are allowed on the x-axis.
              allowDecimals={false}
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
            <Tooltip
              formatter={(value) =>
                typeof value === "number" ? value.toFixed(2) : value
              }
            />
            <Legend />
            <Scatter
              name="Sine Wave"
              data={data}
              fill="#ff7300"
              line={{ stroke: "#ff7300" }}
              lineType="joint"
              dataKey="value"
              // Remove these properties as they're causing the inconsistency
              // xAxisId={0}
              // yAxisId={0}
              // cx="time"
              // cy="value"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div className="text-center mt-3">
        <p>Updating every 100ms | Showing {maxDataPoints} points</p>
      </div>
    </div>
  );
};

export default SinusoidalGraph;
