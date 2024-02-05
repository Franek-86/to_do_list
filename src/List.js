import React from "react";
import Table from "react-bootstrap/Table";
import Row from "./Row";

const List = ({ items, removeItem, editItem, setCompletedStatus }) => {
  return (
    <section className='section-center'>
      <div className='grocery-list'>
        <Table striped bordered hover size='sm' className='mt-1'>
          <thead>
            <tr>
              <th className='col-10 col-md-7'>To do</th>
              <th className='d-none d-sm-table-cell col-sm-1 col-md-2 text-left'>
                Due date
              </th>
              <th className='d-none d-sm-table-cell col-sm-1 text-center'>
                Edit
              </th>
              <th className='col-1 text-center'>Remove</th>
              <th className='col-1  text-center'>Done</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              const { id, title, dueDate, completed } = item;
              return (
                <Row
                  removeItem={removeItem}
                  editItem={editItem}
                  id={id}
                  title={title}
                  dueDate={dueDate}
                  key={index}
                  setCompletedStatus={setCompletedStatus}
                  completed={completed}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default List;
