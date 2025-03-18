import React, {useState, useEffect} from "react";
import jsondata from "./tableData.json"
const table2 = () => {
  const [data, setdata] =useState([])
    useEffect(() => {
      
      setdata(jsondata.WBC)
    }, [])
    
  return (
    <table className="border-2 text-white bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm border-collapse border-gray-500  h-2/5 w-full">
      <thead>
        <tr className="border-2 bg-sky-800 border-gray-500">
          <th className="border-2 border-gray-500 px-2">WBC</th>
          <th className="border-2 border-gray-500 px-2">Count</th>
          <th className="border-2 border-gray-500 px-2">Percentage</th>
        </tr>
      </thead>
      <tbody>
      {  data.map((data, index)=>(
        <tr key={index} className="border-2 border-gray-500 px-2">
          <td className="border-2 border-gray-500 px-2">{data.Type}</td>
          <td className="border-2 border-gray-500 px-2">{data.Count}</td>
          <td className="border-2 border-gray-500 px-2">{data.Percentage}</td>
        </tr>
      ))}
     
      </tbody>
    </table>
  );
};

export default table2;
