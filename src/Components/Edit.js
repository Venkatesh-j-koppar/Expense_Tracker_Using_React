import React, { useState } from "react";

function Edit({ datatobeedited, index, handleEdit }) {
  const [editedformdata, setEditedFormData] = useState(datatobeedited);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setEditedFormData({ ...editedformdata, [name]: value });
  };

  return (
    <tr>
      <td>
        <input
          type="date"
          value={editedformdata.date}
          name="date"
          onChange={(e) => handleChange(e)}
        />
      </td>

      <td>
        <input
          type="text"
          name="name"
          value={editedformdata.name}
          onChange={(e) => handleChange(e)}
        />
      </td>

      <td>
        <select
          onChange={(e) => handleChange(e)}
          name="type"
          value={editedformdata.type}
        >
          <option>Select One</option>
          <option value="credit" id="type">
            Credit
          </option>
          <option value="debit" id="type">
            Debit
          </option>
        </select>
      </td>

      <td>
        <input
          type="number"
          name="amount"
          value={editedformdata.amount}
          onChange={(e) => handleChange(e)}
        />
      </td>

      <td>
        <button
          type="submit"
          onClick={() => {
            handleEdit(editedformdata, index);
          }}
        >
          Save
        </button>
      </td>
      {/* <button onClick={handleCancel}>Cancel</button> */}
    </tr>
  );
}

export default Edit;
