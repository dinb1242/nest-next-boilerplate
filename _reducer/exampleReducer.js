import * as types from "../_type/types";

const initialState = {
    example_username: "",
    example_data: 0
}

function exampleReducer(state = initialState, { type, payload }) {
    switch (type) {
        case types.EXAMPLE_TYPE:
            return {
                ...state,
                example: payload.example
            }

        default:
            return state
    }
}

export default exampleReducer;