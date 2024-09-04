import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";

const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">ManageUser Here</div>
      <div className="users-content">
        <div>
          <button>Add New User</button>
        </div>
        <div>Table Users</div>
        <ModalCreateUser />
      </div>
    </div>
  );
};

export default ManageUser;
