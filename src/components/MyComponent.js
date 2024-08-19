import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "shkjedbfsfnh", age: "16" },
      { id: 2, name: "skjdhngsdnv", age: "20" },
      { id: 3, name: "oieujfiojm", age: "68" },
    ],
  };

  handleAddNewUser = (newUser) => {
    this.setState((prevState) => ({
      listUser: [newUser, ...prevState.listUser],
    }));
    console.log(this.state);
  };

  handleDeleteUser = (userId) => {
    this.setState((prevState) => ({
      listUser: [...prevState.listUser.filter((item) => item.id !== userId)],
    }));
  };

  render() {
    return (
      <>
        <div className="a">
          <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
          <br />
          <DisplayInfor
            listUser={this.state.listUser}
            handleDeleteUser={this.handleDeleteUser}
          />
        </div>
        <div className="b"></div>
      </>
    );
  }
}

export default MyComponent;
