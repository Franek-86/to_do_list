import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Row = ({
  id,
  title,
  completed,
  dueDate,
  removeItem,
  editItem,
  setCompletedStatus,
}) => {
  console.log("this", completed);
  return (
    <tr>
      <td>
        <span className={completed ? "something" : "somethingElse"}>
          {title}
        </span>
      </td>
      <td>
        <span className={completed ? "something" : "somethingElse"}>
          {dueDate}
        </span>
      </td>
      <td className='text-center'>
        <button type='button' className='edit-btn' onClick={() => editItem(id)}>
          {/* <FontAwesomeIcon icon='fa-solid fa-pen' /> */}
          {/* <FaEdit /> */}
          <i className='fa-solid fa-pen'></i>
        </button>
      </td>
      <td className='text-center'>
        <button
          type='button'
          className='delete-btn'
          onClick={() => removeItem(id)}
        >
          {/* <FaTrash /> */}
          <FontAwesomeIcon icon={faTrash} />
          {/* <i className='fa-solid fa-trash'></i> */}
        </button>
      </td>
      <td className='text-center'>
        <span>
          <input
            type='checkbox'
            checked={completed}
            onChange={() => setCompletedStatus(id)}
          />
        </span>
      </td>
    </tr>
  );
};

export default Row;
