import { REGISTER_USER, GET_DETAIL } from "../../actions/userAction";

const initialState = {
    addUserResult: false,
    addUserLoading: false,
    addUserError: false,

    getUserDetailResult: false,
    getUserDetailLoading: false,
    getUserDetailError: false
}
const AddUser = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                addUserResult: action.payload.data,
                addUserLoading: action.payload.loading,
                addUserError: action.payload.errorMessage
            }
        case GET_DETAIL:
            return {
                ...state,
                getUserDetailResult: action.payload.data,
                getUserDetailLoading: action.payload.loading,
                getUserDetailError: action.payload.errorMessage
            }
        default:
            return state;
    }
};

export default AddUser;