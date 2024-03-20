import React, { useMemo, useReducer } from "react";
import Table from "./Table";
import { data, columns } from "./mockups/tableDataMockups";
import DeleteIcon from "./icon/deleteIcon";
import EditIcon from "./icon/editIcon";
import ViewIcon from "./icon/viewIcon";
import Modal from "./modal";
import useModalReducer from "../utils/useModalReducer";
import actionFunctionreducer from "../utils/useActionFunctionReducer";
import Search from "./search";
import Filter from "./filter";
import FilterIcon from "./icon/filterIcon";

const modalInitialState = {
  showModal: false,
  modalContent: null,
  modalTitle: "",
  rowData: null, // Store the data of the row being interacted with
};
const AddMemberForm = ({ onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <input
        type="text"
        name="fname"
        placeholder="First Name"
        style={{ padding: "5px", margin: "5px 0" }}
      />
      <input
        type="text"
        name="lname"
        placeholder="Last Name"
        style={{ padding: "5px", margin: "5px 0" }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        style={{ padding: "5px", margin: "5px 0" }}
      />

      {/*Give options for Gender*/}
      <select>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      {/*Create one  for Birthday*/}
      <input type="date" name="birthday" />
      {/*Create one  for Role*/}
      <select> 
        <option value="Admin">Student</option>
        <option value="User">Parent</option>
      </select>
      {/*Create one  for ZipCode*/}
      <input type="text" name="zipcode" placeholder="Zip Code" />
   

      <button type="submit" style={{ padding: "5px", marginTop: "10px" }}>
        Add Member
      </button>
    </form>
  );
};

const MemberPanel = () => {
  const [state, dispatch] = useReducer(actionFunctionreducer, {});
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showFilter, setShowFilter] = React.useState(false);
  const [currentData, setData] = React.useState(data);
  const [filterStatus, setFilterStatus] = React.useState("all"); // "all", "active", "inactive"

  const [modalstate, modaldispatch] = useReducer(
    useModalReducer,
    modalInitialState
  );
  const handleFilterChange = (status) => {
    setFilterStatus(status);
  };
  

  // Derived state for searchData
  const searchData = useMemo(() => {
    return currentData
      .filter(item => {
        if (filterStatus === "active") {
          return item.activeStatus === "Active";
        } else if (filterStatus === "inactive") {
          return item.activeStatus === "Inactive";
        }
        return true;
      })
      .filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [currentData, searchQuery, filterStatus]);
  

  const toggleFilter = () => setShowFilter(!showFilter);

  const onFilter = (filteredResults) => {
    setData(filteredResults);
  };
  const resetData = () => {
    setData(data);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const updateInfoFunction = (row, actionType) => {
    dispatch({ type: actionType, payload: row });
  };

  const handleAction = (row, actionType) => {
    if (!row) {
      console.error("Row data is undefined in handleAction");
      return;
    }
    modaldispatch({ type: actionType, payload: row });
    console.log("Action on:", row.name);
    setSelectedRow(row.name);
  };

  const handleCancel = () => {
    modaldispatch({ type: "modalCancel" });
    setSelectedRow(null)
  };

  const props = {
    data: searchData,
    columns: columns,
    updateInfo: true,
    updateInfoFunctionList: [
      {
        name: "view",
        icon: <ViewIcon />,
        title: "View",
      },
      {
        name: "edit",
        icon: <EditIcon />,
        title: "Edit",
      },
      {
        name: "delete",
        icon: <DeleteIcon />,
        title: "Delete",
      },
    ],
    updateInfoFunction: updateInfoFunction,
    actionFunction: handleAction,
    confirmAction: handleCancel,
  };
  const handleAddMemberSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const memberData = Object.fromEntries(formData.entries());
    console.log("Member data:", memberData);
    // Process the data (e.g., update state, make API call)
    modaldispatch({ type: "closeModal" }); // Close modal after submission
  };

  const openAddMemberModal = () => {
    modaldispatch({
      type: "openAddMemberModal",
      payload: {
        modalTitle: "Add New Member",
        modalContent: <AddMemberForm onSubmit={handleAddMemberSubmit} />,
      },
    });
  };

  return (
    <div className="block w-full rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="border-b-2 border-neutral-100 px-3 pt-3 dark:border-neutral-600 dark:text-neutral-50">
        <ul
          className="-mb-[2px] flex list-none flex-row flex-wrap border-b-0 pl-0"
          role="tablist"
        >
          <li role="presentation">
            <a
              className="block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-400 dark:hover:bg-transparent"
              role="tab"
              aria-selected="true"
              onClick={openAddMemberModal}
            >
              Add Member
            </a>
          </li>
          <li role="presentation">
            <a
              className="block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-400 dark:hover:bg-transparent"
              role="tab"
              aria-selected="true"
              onClick={() => handleFilterChange("active")}
            >
              Active Members
            </a>
          </li>
          <li role="presentation">
            <a
              className="block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-400 dark:hover:bg-transparent"
              role="tab"
              aria-selected="true"
              onClick={() => handleFilterChange("inactive")}
            >
              Inactive Members
            </a>
          </li>
          <li role="presentation">
            <a
              className="block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-400 dark:hover:bg-transparent"
              role="tab"
              aria-selected="true"
              onClick={() => handleFilterChange("all")}
            >
              All  Members
            </a>
          </li>
          <li role="presentation">
            <Search onSearchChange={handleSearchChange} />
          </li>
          <li role="presentation">
            <a
              className="block border-x-0 border-b-2 border-t-0 border-transparent px-3 pb-3.5 pt-3 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-400 dark:hover:bg-transparent"
              role="tab"
              aria-selected="true"
              onClick={() => {
                toggleFilter();
              }}
            >
              <FilterIcon />
            </a>
            {showFilter && (
              <Filter
                onClose={toggleFilter}
                onFilter={onFilter}
                data={data}
                onReset={resetData}
              />
            )}
          </li>
        </ul>
      </div>
      <div className="p-6">
        <Table {...props} />
        <Modal
          showModal={modalstate.showModal}
          setShowModal={() => dispatch({ type: "closeModal" })}
          title={modalstate.modalTitle}
          content={modalstate.modalContent}
          onCancel={handleCancel}
          handleAction={handleAction}
          selectedRow={selectedRow}
        />
      </div>
    </div>
  );
};

export default MemberPanel;
