import {useState} from 'react';
import { connect } from "react-redux";
import { addItem, deleteItem } from "../stores/ToDoLists/reducer";
const ToDoList = (props) => {
    let {items, addItem, deleteItem} = props;
    console.log(items);
    const [text, setText] = useState();

    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(text);
    }

    const handleDeleteItem = (id) => {
        deleteItem(id)
    }
    
    return <div>
            <form onSubmit={ handleSubmit }>
                <input type="text" onChange={ handleOnChange } />
                <button type='submit'>submit</button>
            </form>
            <ul>
                { items.map((value, index) => (
                    <div>
                        <li key = {index} style = {{ float:'left'}}>{value.title}</li>
                        <button style= {{ color: "red", marginLeft: "20px"}} onClick={ (id) => handleDeleteItem(value.id) }>
                            delete
                            </button>
                   </div>
                ))}
            </ul>
        </div>
    ;
}

const mapStateToProps = (state) =>{
    return {
        items: state.todoList.items
    }
}

const mapActionToProps = (dispatch) =>{
    return {
        addItem: (text) => dispatch(addItem(text)),
        deleteItem: (id) => dispatch(deleteItem(id))
    }
}

export default connect(mapStateToProps, mapActionToProps)(ToDoList);