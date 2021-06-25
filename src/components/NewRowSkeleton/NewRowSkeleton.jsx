import React from "react";
import Skeleton from "react-loading-skeleton";

const NewRowSkeleton = (props) => {
  return (
    <tr>
      <th scope="row">{props.index}</th>
      <td>
        <Skeleton className="w-75 rounded-0" />
      </td>
      <td>
        <Skeleton className="w-75 rounded-0" />
      </td>
      <td>
        <Skeleton className="w-75 rounded-0" />
      </td>
      <td>
        <Skeleton className="w-75 rounded-0" />
      </td>
    </tr>
  );
};

export default NewRowSkeleton;
