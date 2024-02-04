import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Row = ({ id, title, dueDate, removeItem, editItem }) => {
  return (
    <tr>
      <td>
        <span>{title}</span>
      </td>
      <td>
        <span>{dueDate}</span>
      </td>
      <td className='text-center'>
        <button type='button' className='edit-btn' onClick={() => editItem(id)}>
          {/* <FontAwesomeIcon icon='fa-solid fa-pen' /> */}
          <FaEdit />
        </button>
      </td>
      <td className='text-center'>
        <button
          type='button'
          className='delete-btn'
          onClick={() => removeItem(id)}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default Row;
