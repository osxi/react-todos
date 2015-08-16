"use strict";

class Todos extends React.Component {
  render() {
    return (
      <div className="todos">
        <h1>react-todos</h1>
        <TodosList data={this.props.data} />
        <TodosForm />
      </div>
    );
  }
}

class TodosList extends React.Component {
  render() {
    var todoNodes = this.props.data.map(todo => {
      return (<Todo title={todo.title} />);
    });

    return (
      <div className="todos-list">
        {todoNodes}
      </div>
    );
  }
}

class TodosForm extends React.Component {
  render() {
    return (
      <div className="todo-form">
        form goes here
      </div>
    );
  }
}

class Todo extends React.Component {
  render() {
    return (
      <div className="todo-item">
        <h5>{this.props.title}</h5>
      </div>
    );
  }
}