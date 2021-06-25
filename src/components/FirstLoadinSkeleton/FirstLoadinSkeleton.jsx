import React from "react";
import Skeleton from "react-loading-skeleton";

const FirstLoadinSkeleton = (props) => {
  return (
    <tr>
      <td></td>
      <td>
        <Skeleton className="w-75 rounded-0 my-2" count={3} />
      </td>
      <td>
        <Skeleton className="w-75 rounded-0 my-2" count={3} />
      </td>
      <td>
        <Skeleton className="w-75 rounded-0 my-2" count={3} />
      </td>
      <td>
        <Skeleton className="w-75 rounded-0 my-2" count={3} />
      </td>
    </tr>
  );
};

export default FirstLoadinSkeleton;
