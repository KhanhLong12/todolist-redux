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
        e.target.reset();
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
                        <li style = {{ float:'left'}}>{value.title}</li>
                        <input type="hidden" value={value.title} />
                        <button style= {{ color: "green", marginLeft: "10px"}}>
                            edit
                         </button>
                        <button style= {{ color: "red", marginLeft: "10px"}} onClick={ () => handleDeleteItem(value.id) }>
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