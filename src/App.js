import { useEffect, useRef, useState } from "react";
import Modal from "./components/Modal";
import Filter from "./components/Filter";
import Header from "./components/Header";
import AddRow from "./components/AddRow";
import Fields from "./components/Fields";
import Spinner from "./components/Spinner";
import NewRowSkeleton from "./components/NewRowSkeleton";
import FirstLoadinSkeleton from "./components/FirstLoadinSkeleton";

import "./App.css";

function App() {
  const [rows, setRows] = useState([]);
  const [firstLoading, setFirstLoading] = useState(true);
  const [newRowLoading, setNewRowLoading] = useState(false);
  const [deleteRowLoading, setDeleteRowLoading] = useState(0);
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
  const [emptyMessage, setEmptyMessage] = useState(false);
  var inputElement = useRef(null);

  const fetchData = async () => {
    const res = await fetch("https://dbcontrol-server.herokuapp.com");
    const rows = await res.json();
    return rows;
  };

  useEffect(() => {
    fetchData().then((rows) => {
      setFirstLoading(false);
      setRows(rows);
    });
  }, []);

  useEffect(() => {
    const canvas = inputElement.current;
    canvas && canvas.click();
    setEditRowClick(false);
  }, [editRowClick]);

  const handleNewRowValues = (event) => {
    setEmptyMessage(false);
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
    setNewRowLoading(true);
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
    setNewRowLoading(false);
  };

  const updatedRow = async () => {
    setDeleteRowLoading(rowToUpdate._id);
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
    setDeleteRowLoading(0);
  };

  const deleteRow = async (event) => {
    setDeleteRowLoading(event.target.id);
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
  };

  return (
    <div className="container mb-4">
      <Header />
      <div className="card p-3 pb-0">
        <table className="table">
          <thead>
            <Filter handleFilterRowValues={handleFilterRowValues} />
            <Fields />
          </thead>
          <tbody>
            {firstLoading ? (
              <FirstLoadinSkeleton />
            ) : rows.length > 0 ? (
              rows
                .filter((row) =>
                  filter.name
                    ? row[filter.name]
                        .toLowerCase()
                        .includes(filter.value.toLowerCase())
                    : row
                )
                .map((row, index) =>
                  deleteRowLoading === row._id ? (
                    <Spinner />
                  ) : (
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
                  )
                )
            ) : (
              <tr>
                <td>
                  <h4 className="fst-italic text-center">(Empty List)</h4>
                </td>
              </tr>
            )}
            {newRowLoading && <NewRowSkeleton index={rows.length + 1} />}
          </tbody>
          <thead>
            <AddRow
              handleNewRowValues={handleNewRowValues}
              newRow={newRow}
              setEmptyMessage={setEmptyMessage}
              addRow={addRow}
              rows={rows}
            />
          </thead>
        </table>
        {emptyMessage && (
          <p className="display-6 text-danger text-center my-0">
            At least one field must be filled out.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
