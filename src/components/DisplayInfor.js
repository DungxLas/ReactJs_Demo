import React from "react";
import "./DisplayInfor.scss";

class DisplayInfor extends React.Component {
  state = { status: true };

  toggleStatus = () => {
    this.setState((prevState) => ({ status: !prevState.status }));
  };

  render() {
    const { listUser } = this.props;

    return (
      <div className="display-infor-container">
        <div>
          <span
            onClick={() => {
              this.toggleStatus();
            }}
          >
            {this.state.status ? "Hide list" : "Show list"}
          </span>
        </div>
        {this.state.status && (
          <div>
            {listUser.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div style={{ color: "yellow", paddingTop: "50px" }}>
                    My name is {user.name}
                  </div>
                  <div>My age is {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
