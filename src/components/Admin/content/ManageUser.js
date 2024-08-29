import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">ManageUser Here</div>
      <div className="users-content">
        <div>
          <button>Add New User</button>
        </div>
        <div>
          Table Users
          <ModalCreateUser />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
