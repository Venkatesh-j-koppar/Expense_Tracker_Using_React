import React, { useEffect, useState } from "react";
import Edit from "./Edit";

function Transactiontable({ dataToBeDisplayed, setExpense }) {
  const [displayTable, setDisplayTable] = useState(false);
  const [edit, setEdit] = useState();

  useEffect(() => {
    if (dataToBeDisplayed.length > 0) {
      setDisplayTable(true);
    } else {
      setDisplayTable(false);
    }
  }, [dataToBeDisplayed]);

  const handleEdit = (dataObject, index) => {
    const newEntry = dataToBeDisplayed;
    newEntry[index] = dataObject;
    setExpense(newEntry);
    setEdit();
  };

  return displayTable ? (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataToBeDisplayed.map((data1, index) => {
            return edit == index ? (
              <Edit
                datatobeedited={data1}
                index={index}
                handleEdit={handleEdit}
              />
            ) : (
              <tr>
                <td>{data1.date}</td>
                <td>{data1.name}</td>
                <td>{data1.type}</td>
                <td>{data1.amount}</td>
                <td>
                  <tr>
                    <button
                      onClick={() => {
                        setEdit(index);
                      }}
                    >
                      Edit
                    </button>
                  </tr>
                </td>
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
