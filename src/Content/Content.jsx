import { useState, useEffect } from "react";
import "./Content.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data or set your data source
    const fetchData = async () => {
      // Example: Fetch data from an API
      const response = await fetch("https://api.example.com/data");
      const fetchedData = await response.json();
      setData(fetchedData);
    };

    fetchData();
  }, []);

  const renderLineChart = (
    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );

  return (
    <div className="content">
      <h2 id="chart">Moisture</h2>
      <div className="chart-container">{renderLineChart}</div>

      <h2 id="chart">Water Volume</h2>
      <div className="chart-container">{renderLineChart}</div>
    </div>


  );

};

export default Content;
