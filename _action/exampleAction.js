import * as types from "../_type/types";

export function setExample(payload) {
    return {
        type: types.EXAMPLE_TYPE,
        payload
    }
}