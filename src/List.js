import React from "react";
import Table from "react-bootstrap/Table";
import Row from "./Row";

const List = ({ items, removeItem, editItem }) => {
  return (
    <section className='section-center'>
      <div className='grocery-list'>
        <Table striped bordered hover size='sm' className='mt-1'>
          <thead>
            <tr>
              <th className='col-8'>To do</th>
              <th className='col-2'>Due date</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              const { id, title, dueDate } = item;
              return (
                <Row
                  removeItem={removeItem}
                  editItem={editItem}
                  id={id}
                  title={title}
                  dueDate={dueDate}
                  key={index}
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