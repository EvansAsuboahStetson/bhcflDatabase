const additionalData = [
  {
    id:"abpxx6d04wxr",
    name: "James Smith",
    fname: "James",
    lname: "Smith",
    age: 32,
    role: "Manager",
    zipCode: "12345",
    activeStatus: "Active",
    deleted: "true",
    gender: "male",
  },
  {
    id:"be15d9bcejpp",
    name: "Emily Johnson",
    fname: "Emily",
    lname: "Johnson",
    age: 28,
    role: "Developer",
    zipCode: "67890",
    activeStatus: "Inactive",
    deleted: "false",
    gender: "female",
  },
  {
    id:"abzxx5d04wxr",
    name: "Michael Williams",
    fname: "Michael",
    lname: "Williams",
    age: 35,
    role: "Designer",
    zipCode: "54321",
    activeStatus: "Active",
    deleted: "false",
    gender: "male",
  },
  // END: abpxx6d04wxr
  //It should be different from the previous one
  // BEGIN: be15d9bcejpp
  {
    id:"be15d9bcej",
    name: "Wendy Williams",
    fname: "Samuel",
    lname: "Williams",
    age: 35,
    role: "Manager",
    zipCode: "54321",
    activeStatus: "Inactive",
    deleted: "false",
    gender: "female",
  },
  {
    id:"be15z9bcejpp",
    name: "Emma Brown",
    fname: "Emma",
    lname: "Brown",
    age: 27,
    role: "Manager",
    zipCode: "09876",
    activeStatus: "Inactive",
    deleted: "true",
    gender: "female",
  },
  {
    id:"be25d9bcejpp",
    name: "Daniel Jones",
    fname: "Daniel",
    lname: "Jones",
    age: 31,
    role: "Developer",
    zipCode: "13579",
    activeStatus: "Active",
    deleted: "false",
    gender: "male",
  },
  {
    id:"be35d9bcejpp",
    name: "Olivia Davis",
    fname: "Olivia",
    lname: "Davis",
    age: 29,
    role: "Designer",
    zipCode: "24680",
    activeStatus: "Inactive",
    deleted: "true",
    gender: "female",
  },
  {
    id:"be45d9bcejxp",
    name: "Matthew Miller",
    fname: "Matthew",
    lname: "Miller",
    age: 33,
    role: "Manager",
    zipCode: "97531",
    activeStatus: "Active",
    deleted: "false",
    gender: "male",
  },
  {
    id:"be55d9bcejqp",
    name: "Ava Wilson",
    fname: "Ava",
    lname: "Wilson",
    age: 26,
    role: "Developer",
    zipCode: "86420",
    activeStatus: "Inactive",
    deleted: "false",
    gender: "female",
  },
  {
    id:"be65d9bdejpp",
    name: "Sophia Anderson",
    fname: "Sophia",
    lname: "Anderson",
    age: 30,
    role: "Developer",
    zipCode: "86420",
    activeStatus: "Inactive",
    deleted: "false",
    gender: "female",
  },
  // END: be15d9bcejpp
];

export const data = [
  {
    id:"abixx6d04wxr",
    name: "John Doe",
    fname: "John",
    lname: "Doe",
    age: 30,
    role: "Developer",
    zipCode: "32145",
    activeStatus: "Active",
    deleted: "false",
    gender: "male",
  },
  {
    id:"be95d9bcejpp",
    name: "Jane Doe",
    fname: "Jane",
    lname: "Doe",
    age: 25,
    role: "Designer",
    zipCode: "48451",
    activeStatus: "Inactive",
    deleted: "true",
    gender: "other",
  },
  ...additionalData,
];

export const columns = [

  { title: "First Name", dataIndex: "fname" },
  { title: "Last Name", dataIndex: "lname" },
  { title: "Gender", dataIndex: "gender" },
  { title: "Birthday", dataIndex: "birthday" },
  { title: "Zip Code", dataIndex: "zipCode" },
  { title: "Role", dataIndex: "role" },
  { title: "Active Status", dataIndex: "activeStatus" },
  { title: "Deleted", dataIndex: "deleted" },
];
