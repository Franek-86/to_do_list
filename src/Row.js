import React from "react";

const Row = ({
  id,
  title,
  dueDate,
  removeItem,
  editItem,
  completed,
  setCompletedStatus,
}) => {
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
          <i className='fa-solid fa-trash'></i>
        </button>
      </td>
      <td className='text-center'>
        <span>
          <input
            type='checkbox'
            value={completed}
            onChange={setCompletedStatus}
          />
        </span>
      </td>
    </tr>
  );
};

export default Row;
