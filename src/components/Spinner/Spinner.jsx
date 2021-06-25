import React from "react";
import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <tr>
      <td></td>
      <td>
        <Loader type="Oval" color="#00BFFF" height={30} width={30} />
      </td>
      <td>
        <Loader type="Oval" color="#00BFFF" height={30} width={30} />
      </td>
      <td>
        <Loader type="Oval" color="#00BFFF" height={30} width={30} />
      </td>
      <td>
        <Loader type="Oval" color="#00BFFF" height={30} width={30} />
      </td>
    </tr>
  );
};

export default Spinner;
