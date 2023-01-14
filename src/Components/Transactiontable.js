import React, { useEffect, useState } from "react";

function Transactiontable({ dataToBeDisplayed, setDataToBeDisplayed }) {
  const [displayTable, setDisplayTable] = useState(false);
  useEffect(() => {
    if (dataToBeDisplayed.length > 0) {
      setDisplayTable(true);
    } else {
      setDisplayTable(false);
    }
  }, [dataToBeDisplayed]);

  return displayTable ? (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {dataToBeDisplayed.map((data1) => {
            return (
              <tr>
                <td>{data1.date}</td>
                <td>{data1.name}</td>
                <td>{data1.type}</td>
                <td>{data1.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <h1>Sorry No Data Available</h1>
  );
}

export default Transactiontable;
