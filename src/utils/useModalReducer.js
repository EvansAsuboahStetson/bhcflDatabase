const useModalReducer = (state, action) => {
    switch (action.type) {
        case "edit":
        case "delete":
         
          return {
            ...state,
            showModal: true,
            modalTitle: `Confirm ${action.type}`,
            modalContent: `Do you want to ${action.type} this item?`,
            rowData: action.payload,
          };
        case "view":
      
          return {
            ...state,
            showModal: true,
            modalTitle: "View Item",
            modalContent: JSON.stringify(action.payload, null, 2), // Display the data
            rowData: action.payload,
          };
        case "modalConfirmation":
    
          return { ...state, showModal: false, rowData: action.payload };
        case "modalCancel":
          return { ...state, showModal: false };
        default:
          return state;
      }
  };

export default useModalReducer;