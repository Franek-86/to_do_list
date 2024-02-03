import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Table from "react-bootstrap/Table";
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [date, setDate] = useState(new Date());

  const testFunk = (date) => {
    const stringDate = date.toLocaleDateString();

    let dateStr = stringDate;

    let [day, month, year] = dateStr.split("/");

    day = day.padStart(2, "0");
    month = month.padStart(2, "0");

    let formattedDate = `${day}/${month}/${year}`;
    console.log("this2", formattedDate);

    return formattedDate;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name, dueDate: testFunk(date) };
          }
          return item;
        })
      );
      setName("");
      setDate(new Date());
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
        dueDate: testFunk(date),
      };

      setList([...list, newItem]);
      setName("");
      setDate(new Date());
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    console.log(specificItem.dueDate);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
    const dateArray = specificItem.dueDate.split("/");
    const formattedDate = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;

    console.log("check this1", formattedDate);

    setDate(new Date(formattedDate));
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <>
      <section className='section-center'>
        <form className='grocery-form' onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}

          <h3>to do list</h3>
          <div className='form-container'>
            <div className='form-line'>
              <label className='form-label' htmlFor='grocery'>
                add item:
              </label>
              <input
                id='grocery'
                type='text'
                className='grocery'
                placeholder='e.g. eggs'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='form-line'>
              <label className='form-label' htmlFor='date'>
                due date:
              </label>
              <DatePicker
                className='grocery'
                id='date'
                selected={date}
                onChange={(date) => setDate(date)}
                dateFormat='dd/MM/yyyy'
              />
            </div>
            <button type='submit' className='submit-btn'>
              {isEditing ? "edit" : "submit"}
            </button>
          </div>
        </form>
      </section>
      {list.length > 0 && (
        <>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </>
      )}
      {list.length == 0 && (
        <section className='section-center'>
          <h4 className='mb-1'>
            Your list is currently empty, insert one or more tasks to see any
            result
          </h4>
        </section>
      )}
    </>
  );
}

export default App;
