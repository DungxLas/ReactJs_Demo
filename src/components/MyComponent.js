import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "shkjedbfsfnh", age: "16" },
      { id: 2, name: "skjdhngsdnv", age: "20" },
      { id: 3, name: "oieujfiojm", age: "68" },
    ],
  };

  render() {
    return (
      <div>
        <UserInfor />
        <br />
        <DisplayInfor listUser={this.state.listUser} />
      </div>
    );
  }
}

export default MyComponent;
