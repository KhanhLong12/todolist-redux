import { v4 as uuidv4 } from 'uuid';
let initialState = {
    items: []
};

export const listItems = () => {
    return {
        type : "LIST_ITEM"
    }
}

export const addItem = (text) => {
    return {
        type: "ADD_ITEM",
        payload: text
    }
}

export const deleteItem = (id) => {
    return {
        type: "DELETE_ITEM",
        payload: id
    }
}


// bien doi state theo mong muon
export const ToDoListReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LIST_ITEM":
        return state;
        case "ADD_ITEM":
            let id = uuidv4();
        return {
            items: [...state.items, {
                id,
                title: action.payload
            }]
        };
        case "DELETE_ITEM":
            let rest_items = state.items.filter(value => {
                return value.id !== action.payload
            })
            return {
                items: rest_items
            };
        default:
        return state;
    }
}