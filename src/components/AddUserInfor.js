import React from "react";

class AddUserInfor extends React.Component {
  state = {
    name: "DungxLas",
    //address: "aisfmaf",
    age: 27,
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    let newUser = {
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    };
    this.props.handleAddNewUser(newUser);
  };

  handleOnChangeInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        {/* My name is {this.state.name} and I'm {this.state.age} */}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(event) => {
                this.handleOnChangeInput(event);
              }}
            />
          </label>
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={this.state.age}
              onChange={(event) => {
                this.handleOnChangeInput(event);
              }}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfor;
