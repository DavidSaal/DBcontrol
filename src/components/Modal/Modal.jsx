import React from "react";

const Modal = (props) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fs-4" id="exampleModalLabel">
              Edit Row
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="card p-3">
            <table className="table">
              <thead>
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
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <input
                      type="text"
                      name="cName"
                      className="w-100"
                      value={props.rowToUpdate.cName}
                      onChange={props.rowToUpdateFunc}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="pName"
                      className="w-100"
                      value={props.rowToUpdate.pName}
                      onChange={props.rowToUpdateFunc}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="type"
                      className="w-100"
                      value={props.rowToUpdate.type}
                      onChange={props.rowToUpdateFunc}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="mpr"
                      className="w-100"
                      value={props.rowToUpdate.mpr}
                      onChange={props.rowToUpdateFunc}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-dark shadow-sm fs-6 p-0 px-2"
                      data-bs-dismiss="modal"
                      onClick={props.updatedRow}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
