"use strict";

class Todos extends React.Component {
  render() {
    return (
      <div className="todos">
        <h1>react-todos</h1>
        <TodosList data={this.props.data} />
      </div>
    );
  }
}

class TodosList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: props.data};
  }

  handleSubmit(e) {
    e.preventDefault();

    var newTitle = React.findDOMNode(this.refs.title).value;

    this.setState({
      data: this.state.data.concat([{
        title: newTitle
      }])
    });

    React.findDOMNode(this.refs.title).value = '';

    return;
  }

  render() {
    var todoNodes = this.state.data.map(todo => {
      return (<Todo title={todo.title} />);
    });

    return (
      <div className="todos-list">
        {todoNodes}
        <form className="todos-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Enter a TODO" ref="title" />
        </form>
      </div>
    );
  }
}

// TODO: factor form out into separate component below
class TodosForm extends React.Component {
  render() {
    return;
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
