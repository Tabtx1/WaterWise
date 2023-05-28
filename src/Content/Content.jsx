import { useState, useEffect } from "react";
import "./Content.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Content = () => {
  const [data, setData] = useState([]);
  const data2 = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
  {/**const [moist, setMoist] = useState("");

 //getting all temp and humid data
 const fetchTemperatureAndHumidity = async (date) => {
  const realtimeDB = getDatabase();
  const getDateOnTemp = ref(realtimeDB, date);
  return new Promise((resolve, reject) => {
    onValue(
      getDateOnTemp,
      (snapshot) => {
        if (snapshot.exists()) {
          let moisture;
          snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            moisture = childData.Moist;
            
          });
          resolve({ moisture });

          setMoist(moisture);
        } else {
          console.log("No child nodes found.");
          reject(new Error("No child nodes found."));
        }
      },
      {
        onlyLast: true,
      }
    );
  });
};
//getting current readings
useEffect(() => {
  const getCurrentTemp = async () => {
    const { moisture } = await fetchTemperatureAndHumidity(date);
    setMoist(moisture);
    
  };

  if (date) {
    getCurrentTemp();
  }
}, [date]); 



   {/** useEffect(() => {
    // Fetch data or set your data source
    const fetchData = async () => {
      // Example: Fetch data from an API
      const response = await fetch("https://api.example.com/data");
      const fetchedData = await response.json();
      setData(fetchedData);
    };

    fetchData();
  }, []); */}

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
    <LineChart width={400} height={400} data={data2}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );

  return (
    <div className="content">
      <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
      <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
      <script src="https://unpkg.com/prop-types/prop-types.min.js"></script>
      <script src="https://unpkg.com/recharts/umd/Recharts.js"></script>
      <h2 id="chart"></h2>
      <div className="chart-container">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="moisture" stroke="#8884d8" />
        </LineChart>
      </div>
  
      <h2 id="chart"></h2>
      <div className="chart-container">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="waterVolume" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );

  {/**return (
   
    <div className="content">
      <h2 id="chart">Moisture</h2>
      <div className="chart-container">{renderLineChart}</div>

      <h2 id="chart">Water Volume</h2>
      <div className="chart-container">{renderLineChart}</div>
    </div>

    

  ); */}




};



export default Content;
