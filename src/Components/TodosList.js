import Todo from "./Todo";
import { connect } from "react-redux";
import { toggleTodo } from "../actions/index";

function TodosList(props) {
    const todos = props.todos;
    const filter = props.stateFilter;
    let filterTodos = todos.filter(todo => {
        if (filter==='ACTIVE' && !todo.complited) return true;
        if (filter==='COMPLETED' && todo.complited) return true;
        if (filter==='ALL') return true;
        return false;
    })
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>number</th>
                        <th className="table_text">descript</th>
                        <th>date</th>
                        <th>complited</th>
                    </tr>
                </thead>
                <tbody>
                 {filterTodos.map(todo => <Todo  key={todo.id} todo={todo} toggleTodo={()=>toggleTodo(todo.id) }/>) }
                </tbody>
            </table>
        </div>
    )
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(TodosList);