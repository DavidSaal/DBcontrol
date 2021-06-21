import { useEffect, useRef, useState } from "react";
import { CSVLink } from "react-csv";
import Modal from "./components/Modal";

import "./App.css";

function App() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newRow, setNewRow] = useState({
    cName: "",
    pName: "",
    type: "",
    mpr: "",
  });
  const [rowToUpdate, setRowToUpdate] = useState({});
  const [editRowClick, setEditRowClick] = useState(false);
  const [filter, setFilter] = useState({
    name: "",
    value: "",
  });
  var inputElement = useRef(null);

  const fetchData = async () => {
    const res = await fetch("https://dbcontrol-server.herokuapp.com");
    const rows = await res.json();
    return rows;
  };

  useEffect(() => {
    fetchData().then((rows) => {
      setLoading(false);
      setRows(rows);
    });
  }, []);

  useEffect(() => {
    const canvas = inputElement.current;
    canvas && canvas.click();
    setEditRowClick(false);
  }, [editRowClick]);

  const handleNewRowValues = (event) => {
    const { name, value } = event.target;
    setNewRow({ ...newRow, [name]: value });
  };

  const handleUpdateRowValues = (event) => {
    const { name, value } = event.target;
    setRowToUpdate({ ...rowToUpdate, [name]: value });
  };

  const handleFilterRowValues = (event) => {
    const { name, value } = event.target;
    setFilter({ name: name, value: value });
  };

  const addRow = async () => {
    setLoading(true);
    const res = await fetch("https://dbcontrol-server.herokuapp.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newRow }),
    });
    const savedRow = await res.json();
    if (res.status === 200) {
      setRows([...rows, savedRow]);
    } else {
      res.status === 404 && alert("Error saving to database.");
    }
    setLoading(false);
  };

  const updatedRow = async () => {
    setLoading(true);
    const res = await fetch("https://dbcontrol-server.herokuapp.com", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rowToUpdate }),
    });
    if (res.status === 200) {
      var foundIndex = rows.findIndex((x) => x._id === rowToUpdate._id);
      rows[foundIndex] = rowToUpdate;
    } else {
      res.status === 404 && alert("Error saving to database.");
    }
    setLoading(false);
  };

  const deleteRow = async (event) => {
    setLoading(true);
    const res = await fetch("https://dbcontrol-server.herokuapp.com", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: event.target.id }),
    });
    if (res.status === 200) {
      setRows(rows.filter((row) => row._id !== event.target.id));
    } else {
      res.status === 405 && alert("Error deleting.");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="text-center my-5">
        <div className="card shadow">
          <div className="card-body">
            <h1 className="display-5">Data List</h1>
          </div>
        </div>
      </div>
      <div className="card p-3">
        <table className="table">
          <thead>
            <tr>
              <th>
                <h4 className="fs-5 mb-1">Filter</h4>
              </th>

              <td>
                <input
                  type="text"
                  name="cName"
                  className="w-50 shadow-sm btn-outline-success"
                  onChange={handleFilterRowValues}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="pName"
                  className="w-50 shadow-sm btn-outline-success"
                  onChange={handleFilterRowValues}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="type"
                  className="w-50 shadow-sm btn-outline-success"
                  onChange={handleFilterRowValues}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="mpr"
                  className="w-50 shadow-sm btn-outline-success"
                  onChange={handleFilterRowValues}
                />
              </td>
            </tr>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customer name</th>
              <th scope="col">Partner name</th>
              <th scope="col">Type of work</th>
              <th scope="col">N° MPR file</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <p className="fs-4 text-center">Loading..</p>
            ) : rows.length > 0 ? (
              rows
                .filter((row) =>
                  filter.name
                    ? row[filter.name]
                        .toLowerCase()
                        .includes(filter.value.toLowerCase())
                    : row
                )
                .map((row, index) => (
                  <tr key={row._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{row.cName}</td>
                    <td>{row.pName}</td>
                    <td>{row.type}</td>
                    <td>{row.mpr}</td>
                    <td>
                      <Modal
                        rowToUpdate={rowToUpdate}
                        rowToUpdateFunc={handleUpdateRowValues}
                        updatedRow={updatedRow}
                      />
                      <button
                        type="button"
                        className="btn zoom"
                        aria-label="Edit"
                        onClick={() => (
                          setRowToUpdate(row), setEditRowClick(true)
                        )}
                      >
                        ✎
                      </button>
                      <button
                        type="button"
                        className="d-none"
                        ref={inputElement}
                        id={row._id}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      ></button>
                      <button
                        type="button"
                        className="btn-close fs-8 zoom"
                        aria-label="Close"
                        id={row._id}
                        onClick={deleteRow}
                      ></button>
                    </td>
                  </tr>
                ))
            ) : (
              <div className="justify-content-center d-flex text-center">
                <h4 className="fst-italic text-center">(Empty List)</h4>
              </div>
            )}
            <tr>
              <th>
                <button
                  className="btn btn-outline-dark shadow-sm fs-6 p-0 px-1"
                  onClick={addRow}
                >
                  Add
                </button>
              </th>

              <td>
                <input
                  type="text"
                  name="cName"
                  value={newRow.cName}
                  onChange={handleNewRowValues}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="pName"
                  value={newRow.pName}
                  onChange={handleNewRowValues}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="type"
                  value={newRow.type}
                  onChange={handleNewRowValues}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="mpr"
                  value={newRow.mpr}
                  onChange={handleNewRowValues}
                />
              </td>
              <td>
                <CSVLink data={rows}>
                  <button className="btn btn-outline-dark shadow-sm fs-6 p-0 px-1 ms-4">
                    Csv
                  </button>
                </CSVLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
