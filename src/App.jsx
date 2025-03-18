import React from "react";
import { useState, useEffect } from "react";
import Table1 from "./components/table1";
import Table2 from "./components/table2";
import Table3 from "./components/Table3";
import ImageMagnifier from "./components/ImageMagnifier";
import Image from "/image.png";
import data from "./output.json"
const App = () => {
  const [zoom, setzoom] = useState(1)
  const [cords, setcords] =useState([])
  const patient = data.patient_id;
  const sample = data.sample_type;
  const date =  data.date

 
useEffect(() => {
      const correctdata = data.inference_results.replace(/'/g, '"')
      const parsedData = JSON.parse(correctdata)
      const detectionResults = parsedData.output.detection_results;

      setcords(detectionResults);
    }, [])
  const zoomFunction=(e)=>{
    if(e.target.value!=0){
      setzoom(e.target.value)
    }
  }
  return (
    <div className="bg-sky-950 w-screen h-screen grid grid-cols-7 relative grid-rows-8 px-10">
      <div className="text-white row-span-1 col-span-7 flex items-center justify-between px-10">
        <h1 className="text-3xl text-gray-300  font-bold">Artigence </h1>
        <div className="flex gap-x-4  justify-center w-3/5">
          <h1 className="text-lg font-medium">Monday</h1>
          <h1 className="text-lg font-medium">{date}</h1>
          <h1 className="text-lg font-medium">12:22:55</h1>
          <div className="flex justify-end w-1/4 gap-x-2 px-2">
            <label htmlFor="input">Zoom Level</label>
            <input name="input" type="number" placeholder="0" className="border-2 border-white w-10 px-1"  onInput={zoomFunction} />
          </div>
        </div>
      </div>
      <div  className="col-span-2 row-span-7 gap-y-5 flex flex-col py-5 px-2">
        <Table1 />
        <Table2 />
        <Table3 />

      </div>
      <ImageMagnifier src={Image} height={535} width={1076} multiplyFactor={zoom} rectangles={cords} patient={patient} sample={sample}  className="h-4/5 w-full cursor-crosshair "  />
     
    </div>
  );
};

export default App;
