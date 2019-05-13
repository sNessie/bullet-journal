import React, { useState } from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import { startAddTodo } from "../../reducers/todosReducers";
import { setCategories } from "../../reducers/rootReducers";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import InputAdd from "../../layout/addForm/InputAdd";
import { SelectAdd, SelectDiv } from "../../layout/addForm/SelectAdd";
import FormAdd from "../../layout/addForm/FormAdd";
import FormContent from "../../layout/addForm/FormContent";
import ButtonAdd from "../../layout/addForm/ButtonAdd";
import { LeftContainer } from "../../layout/Container";
import PropTypes from "prop-types";

const AddTodo = ({ hideAddForm, categories, todos, actions }) => {
  const [todo, setTodo] = useState({
    id: uuid(),
    name: "",
    date: new Date().toISOString().substring(0, 10),
    category: "",
    priority: "",
    ready: false
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
    let findTodo = todos.find(t => t.id === todo.date);
    if (typeof findTodo === "undefined") {
      findTodo = {
        id: todo.date,
        todo: [{ ...todo }]
      };
      actions.startAddTodo(findTodo, true);
    } else {
      findTodo.todo.push(todo);
      actions.startAddTodo(findTodo, false);
    }
    toast.success("Todo saved.");
    hideAddForm();
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
    if (!category) errors.category = toast.error("Category is required");
    if (!priority) errors.times = toast.error("Priority is required");
    return Object.keys(errors).length === 0;
  }

  const categoriesList = categories.map((cat, i) => {
    return (
      <option key={i} value={cat}>
        {cat}
      </option>
    );
  });

  return (
    <FormAdd>
      <FormContent>
        <form onSubmit={handleSubmit}>
          <LeftContainer>
            <ButtonAdd onClick={hideAddForm}>X</ButtonAdd>
          </LeftContainer>
          <InputAdd
            type="text"
            name="name"
            value={todo.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <InputAdd
            type="date"
            name="date"
            min={todo.date}
            value={todo.date}
            onChange={handleChange}
            placeholder="Date"
          />
          <SelectDiv>
            <SelectAdd name="category" onChange={handleChangeCategory}>
              <option defaultValue>Select your category</option>
              {categoriesList}
              <option value="add">add</option>
            </SelectAdd>
          </SelectDiv>
          {category ? (
            <InputAdd
              type="text"
              name="category"
              value={todo.category}
              onChange={handleChange}
            />
          ) : null}
          <SelectDiv>
            <SelectAdd name="priority" onChange={handleChange}>
              <option defaultValue>Select your priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </SelectAdd>
          </SelectDiv>
          <ButtonAdd type="submit">Add</ButtonAdd>
        </form>
      </FormContent>
    </FormAdd>
  );
};

AddTodo.propTypes = {
  hideAddForm: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    categories: setCategories(state.todos, state.categories),
    todos: state.todos
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: {
      startAddTodo: bindActionCreators(startAddTodo, dispatch)
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
