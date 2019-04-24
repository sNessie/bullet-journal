import React, { useState } from "react";
import { toast } from "react-toastify";

const AddTodo = () => {
  const [todo, setTodo] = useState({
    name: "",
    date: new Date().toISOString().substring(0, 10),
    category: "add",
    priority: "low"
  });

  const [category, setCategory] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setTodo(prevTodo => ({
      ...prevTodo,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formIsValid()) return;
    toast.success("Todo saved.");
    console.log(todo);
  }

  function handleChangeCategory(e) {
    const { name, value } = e.target;
    if (value === "add") {
      setTodo(prevTodo => ({
        ...prevTodo,
        [name]: ""
      }));
      setCategory(true);
    } else {
      setCategory(false);
      setTodo(prevTodo => ({
        ...prevTodo,
        [name]: value
      }));
    }
  }

  function formIsValid() {
    const { name, category, priority } = todo;
    const errors = {};
    if (!name) errors.name = toast.error("Name is required");
    if (!category) errors.date = toast.error("Category is required");
    if (!priority) errors.times = toast.error("Priority is required");
    return Object.keys(errors).length === 0;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={todo.name}
        onChange={handleChange}
      />
      <label>
        Category
        <select name="category" onChange={handleChangeCategory}>
          <option value="school">School</option>
          <option value="add">Add</option>
        </select>
        {category ? (
          <input
            type="text"
            name="category"
            value={todo.category}
            onChange={handleChange}
          />
        ) : null}
      </label>
      <label>
        Pick priority:
        <select name="priority" onChange={handleChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddTodo;
