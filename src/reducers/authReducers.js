import {
	IS_AUTHENTICATED,
	FAIL_AUTHENTICATION,
	SET_USER,
} from "../actions/types";

const initialState = {
	user: null,
	loading: true,
	isAuthenticated: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: action.payload,
				loading: false,
			};

		case IS_AUTHENTICATED:
			return {
				...state,
				isAuthenticated: action.payload,
				loading: false,
			};

		default:
			return state;
	}
}
