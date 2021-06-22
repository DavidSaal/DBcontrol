import React from "react";

const Filter = (props) => {
  return (
    <tr>
      <th>
        <h4 className="fs-5 mb-1">Filter</h4>
      </th>
      <td>
        <input
          type="text"
          name="cName"
          className="w-50 shadow-sm outline-success"
          onChange={props.handleFilterRowValues}
        />
      </td>
      <td>
        <input
          type="text"
          name="pName"
          className="w-50 shadow-sm outline-success"
          onChange={props.handleFilterRowValues}
        />
      </td>
      <td>
        <input
          type="text"
          name="type"
          className="w-50 shadow-sm outline-success"
          onChange={props.handleFilterRowValues}
        />
      </td>
      <td>
        <input
          type="text"
          name="mpr"
          className="w-50 shadow-sm outline-success"
          onChange={props.handleFilterRowValues}
        />
      </td>
    </tr>
  );
};

export default Filter;
