import React, { useState } from "react";
import { CSVLink } from "react-csv";

const AddRow = (props) => {
  var isEmpty = !Object.values(props.newRow).every((v) => v === "");
  console.log(isEmpty);
  return (
    <tr>
      <th>
        <button
          className="btn btn-outline-dark shadow-sm fs-6 p-0 px-1"
          onClick={isEmpty ? props.addRow : props.setEmptyMessage(true)}
        >
          Add
        </button>
      </th>
      <td>
        <input
          type="text"
          name="cName"
          className="w-50 shadow-sm outline-success"
          onChange={props.handleNewRowValues}
        />
      </td>

      <td>
        <input
          type="text"
          name="pName"
          className="w-50 shadow-sm outline-success"
          onChange={props.handleNewRowValues}
        />
      </td>
      <td>
        <input
          type="text"
          name="type"
          className="w-50 shadow-sm outline-success"
          onChange={props.handleNewRowValues}
        />
      </td>
      <td>
        <input
          type="text"
          name="mpr"
          className="w-50 shadow-sm outline-success"
          onChange={props.handleNewRowValues}
        />
      </td>
      <td>
        <CSVLink data={props.rows}>
          <button className="btn btn-outline-dark shadow-sm fs-6 p-0 px-1 ms-4">
            Csv
          </button>
        </CSVLink>
      </td>
    </tr>
  );
};

export default AddRow;
