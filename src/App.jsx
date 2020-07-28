import React, { useEffect, useState } from 'react';
import Boiler from './components/Boiler';
import axios from 'axios'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize'
import './App.css';
import Coal from './components/Coal';
import Heat from './components/Heat';
import Plant from './components/Plant';
import Power from './components/Power';
import Turbine from './components/Turbine';

function App() {
  
  useEffect(() => {
    M.AutoInit();
  }, [])

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      getData();
  }, [])

  const getData = async () => {
      const res = await axios('./_data/Plant.json');
      console.log(res.data);
      setData(res.data);
      setLoading(false);
  }

  if(loading){
    return <h4 className="center">Loading...</h4>
  }

  return (
    <div className="container">
      <hr/>
      <Boiler data={data} />
      <hr/>
      <Coal data={data} />
      <hr/>
      <Heat data={data} />
      <hr/>
      <Plant data={data} />
      <hr/>
      <Power data={data} />
      <hr/>
      <Turbine data={data} />
      <hr/>
    </div>
  );
}

export default App;
