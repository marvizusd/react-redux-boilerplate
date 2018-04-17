const defaultState = {
    one:'',
    two:'',
    array:[]
};

export default function unnamedReducer(state = defaultState, action){
    // the 'state = defaultState' above is new ES6 syntax
    // for defining a default value on a parameter
    const { type, payload } = action;

    switch (type) {
        // Here in the case of the update description action
        case 'TEXT_ONE' : {
            // we'll return an object
            return {
                // with all the previos state
                ...state,
                // but overwriting the description
                one: payload.objectkey
            };
        }

        case 'TEXT_TWO': {
            return {
                ...state,
                two: payload.objectkey
            };
        }

        case 'TEXT_THREE': {
            const { objectkey1 ,objectkey2, objectkey3} = action.payload;
            return {
                ...state,
                one: '',
                two:'',
                array: [
                    // here we have all the previous line items
                    ...state.array,
                    // plus a new object
                    { objectkey1, objectkey2, objectkey3 }
                ]
            };
        }

        default: {
            return state;
        }
    }
}