import { useState, useEffect } from "react";
import "./Content.css";
import { LineChart, Area, Bar, ComposedChart} from "recharts";
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Content = () => {
  const [data, setData] = useState([]);
  const data2 = [
    {name: 'Page A', uv: 340, pv: 1400, amt: 2200},
    {name: 'Page A', uv: 230, pv: 1200, amt: 1900},
    {name: 'Page A', uv: 430, pv: 1100, amt: 2000},
    {name: 'Page A', uv: 250, pv: 900, amt: 1980},
    {name: 'Page A', uv: 300, pv: 590, amt: 1540},
    {name: 'Page A', uv: 200, pv: 650, amt: 1245},
  ];
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
  }, []); 

  useEffect(() => {
    // Fetch data or set your data source
    const fetchData = async () => {
      // Example: Fetch data from an API
      const response = await fetch("https://api.coincap.io/v2/assets/?limits=10");
      const data = await response.json();
      console.log(data);
      setData(data.data);
    };

    fetchData();
  }, []);

  const renderLineChart = (
    <LineChart width={400} height={400} data={data2}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );*/}

  return (
    <div className="content">
      <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
      <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
      <script src="https://unpkg.com/prop-types/prop-types.min.js"></script>
      <script src="https://unpkg.com/recharts/umd/Recharts.js"></script>
      
      <dev>


      </dev>
      
      <h2 id="chart">moisture</h2>
      <div className="chartcontainer">
      <ComposedChart width={730} height={250} data={data2}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#f5f5f5" />
      <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
      </div>
  
  
      <h2 id="chart">waterVolume</h2>
      <div className="chartcontainer">
      <LineChart width={730} height={250} data={data2}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
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
