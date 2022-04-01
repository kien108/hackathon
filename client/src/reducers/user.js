const initState = [];

const userReducer = (state = initState, action) => {
   switch (action.type) {
      case "ADD_USER":
         return [...state, action.payload];
      default:
         return state;
   }
};

export default userReducer;
