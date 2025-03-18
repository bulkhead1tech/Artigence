import React, {useState, useEffect} from "react";
import jsondata from "./tableData.json"
const table2 = () => {
  const [data, setdata] =useState([])
    useEffect(() => {
      
      setdata(jsondata.Platelets)
    }, [])
    
  return (
<table className="border-2 text-white bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm border-collapse border-gray-600 h-1/5 w-full">
  <thead>
    <tr className="border-2 bg-sky-800 mx-auto w-full border-gray-500">
      <th colSpan="2">Platelets</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-2 border-gray-500 px-5">
      <td className="border-2 border-gray-500 px-5">Count</td>
      <td className="border-2 border-gray-500 px-5">{data.Count}</td>
    </tr>
    <tr className="border-2 border-gray-500 px-5">
      <td className="border-2 border-gray-500 px-5">Percentage</td>
      <td className="border-2 border-gray-500 px-5">{data.Percentage}</td>
    </tr>
  </tbody>
</table>
  );
};

export default table2;
