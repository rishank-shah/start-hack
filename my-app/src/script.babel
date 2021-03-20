const toDoItems = [
    {
      name: 'Click "Create" to create new task',
      completed: false
    },
    {
      name: 'Click "Edit" to edit task',
      completetd: false
    },
    {
      name: 'Click "Delete" to remove task',
      completed: false
    },
    {
      name: "Click on task to mark as complete",
      completed: false
    }
  ];
  
  class CreateItem extends React.Component {
    handleCreate(e) {
      e.preventDefault();
      
      if (!this.refs.newItemInput.value) {
        alert('Please enter a task name.');
        return;
      } else if (this.props.toDoItems.map(element => element.name).indexOf(this.refs.newItemInput.value) != -1) {
        alert('This task already exists.');
        this.refs.newItemInput.value = '';
        return;
      }
      
      this.props.createItem(this.refs.newItemInput.value);
      this.refs.newItemInput.value = '';
    }
    
    render() {
      return (
        <div className="create-new">
          <form onSubmit={this.handleCreate.bind(this)}>
            <input type="text" placeholder="New Task" ref="newItemInput" />
            <button>Create</button>
          </form>
        </div>
      );
    }
  }
  
  class ToDoListItem extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        editing: false
      };
    }
    
    renderName() {
      const itemStyle = {
        'text-decoration': this.props.completed ? 'line-through' : 'none',
        cursor: 'pointer'
      };
      
      if(this.state.editing) {
        return (
            <form onSubmit={this.onSaveClick.bind(this)}>
              <input type="text" ref="editInput" defaultValue={this.props.name} />
            </form>
        );
      }
      
      return (
        <span style={itemStyle} onClick={this.props.toggleComplete.bind(this, this.props.name)}>{this.props.name}</span>
      );
    }
    
    renderButtons() {
      if (this.state.editing) {
        return (
          <span>
            <button onClick={this.onSaveClick.bind(this)}>Save</button>
            <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
          </span>
        );
      }
      
      return (
        <span>
          <button onClick={this.onEditClick.bind(this)}>Edit</button>
          <button onClick={this.props.deleteItem.bind(this, this.props.name)}>Delete</button>
        </span>
      );
    }
    
    onEditClick() {
      this.setState({ editing: true });
    }
    
    onCancelClick() {
      this.setState({ editing: false });
    }
    
    onSaveClick(e) {
      e.preventDefault();
      this.props.saveItem(this.props.name, this.refs.editInput.value);
      this.setState({ editing: false });
    }
    
    render() {
      return (
        <div className="to-do-item">
          <span className="name">
          {this.renderName()}
          </span>
          <span className="actions">
          {this.renderButtons()}
          </span>
        </div>
      );
    }
  }
  
  class ToDoList extends React.Component {
    renderItems() {
      return this.props.toDoItems.map((item, index) => <ToDoListItem key={index} {...item} {...this.props} />);
    }
    
    render() {
      return (
        <div className="items-list">
          {this.renderItems()}
        </div>
      );
    }
  }
  
  class App extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        toDoItems
      };
    }
    
    createItem(item) {
      this.state.toDoItems.unshift({
        name: item,
        completed: false
      });
      this.setState({
        toDoItems: this.state.toDoItems
      });
    }
    
    findItem(item) {
      return this.state.toDoItems.filter((element) => element.name === item)[0];
    }
    
    toggleComplete(item) {
      let selectedItem = this.findItem(item);
      selectedItem.completed = !selectedItem.completed;
      this.setState({ toDoItems: this.state.toDoItems });
    }
    
    saveItem(oldItem, newItem) {
      let selectedItem = this.findItem(oldItem);
      selectedItem.name = newItem;
      this.setState({ toDoItems: this.state.toDoItems });
    }
    
    deleteItem(item) {
      let index = this.state.toDoItems.map(element => element.name).indexOf(item);
      this.state.toDoItems.splice(index, 1);
      this.setState({ toDoItems: this.state.toDoItems });
    }
    
    render() {
      return (
        <div className="to-do-app">
          <div className="header">
            <h1>ToDo List</h1>
          </div>
          <CreateItem toDoItems={this.state.toDoItems} createItem={this.createItem.bind(this)} />
          <ToDoList toDoItems={this.state.toDoItems} deleteItem={this.deleteItem.bind(this)} saveItem={this.saveItem.bind(this)} toggleComplete={this.toggleComplete.bind(this)} />
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));