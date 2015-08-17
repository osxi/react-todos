"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Todos = (function (_React$Component) {
  _inherits(Todos, _React$Component);

  function Todos() {
    _classCallCheck(this, Todos);

    _get(Object.getPrototypeOf(Todos.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(Todos, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "todos" },
        React.createElement(
          "h1",
          null,
          "react-todos"
        ),
        React.createElement(TodosList, { data: this.props.data }),
        React.createElement(TodosForm, null)
      );
    }
  }]);

  return Todos;
})(React.Component);

var TodosList = (function (_React$Component2) {
  _inherits(TodosList, _React$Component2);

  function TodosList() {
    _classCallCheck(this, TodosList);

    _get(Object.getPrototypeOf(TodosList.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(TodosList, [{
    key: "render",
    value: function render() {
      var todoNodes = this.props.data.map(function (todo) {
        return React.createElement(Todo, { title: todo.title });
      });

      return React.createElement(
        "div",
        { className: "todos-list" },
        todoNodes
      );
    }
  }]);

  return TodosList;
})(React.Component);

var TodosForm = (function (_React$Component3) {
  _inherits(TodosForm, _React$Component3);

  function TodosForm() {
    _classCallCheck(this, TodosForm);

    _get(Object.getPrototypeOf(TodosForm.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(TodosForm, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();

      // TODO: Push new TODO here

      React.findDOMNode(this.refs.title).value = '';

      return;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { className: "todos-form", onSubmit: this.handleSubmit.bind(this) },
        React.createElement("input", { type: "text", placeholder: "Enter a TODO", ref: "title" })
      );
    }
  }]);

  return TodosForm;
})(React.Component);

var Todo = (function (_React$Component4) {
  _inherits(Todo, _React$Component4);

  function Todo() {
    _classCallCheck(this, Todo);

    _get(Object.getPrototypeOf(Todo.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(Todo, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "todo-item" },
        React.createElement(
          "h5",
          null,
          this.props.title
        )
      );
    }
  }]);

  return Todo;
})(React.Component);