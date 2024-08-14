import React from "react";

class UserInfor extends React.Component {
  state = {
    name: "DungxLas",
    address: "aisfmaf",
    age: 27,
  };

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  handleOnChangeInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
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
        </form>
        <button>Submit</button>
      </div>
    );
  }
}

export default UserInfor;
