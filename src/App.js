import "./App.css";

import { useEffect } from "react";
import { useState } from "react";
import PropioDataTable from "./components/PropioDataTable";

function App() {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);


  const columns = [
    {
      name: "Id",
      selector: "id",
      sortable: true,
    },
    {
      name: "Descripción",
      selector: "descripcion",
      sortable: true,
      right: true,
    },
    {
      name: "Gentilicio",
      selector: "gentilicio",
      sortable: true,
      right: true,
    },
    {
      name: "ISO_NAC",
      selector: "isonac",
      sortable: true,
      right: true,
    },
  ];
  useEffect(() => {
    setLoading(true)
    fetch('https://localhost:44325/api/Nacionalidads')
      .then(response => response.json())
      .then(data => { setLoading(false); setData(data); });
  }, []);

  return (
    <div className="App">
      <PropioDataTable columns={columns} data={data} loading={loading} pagination={true} />
    </div>
  );
}

export default App;
