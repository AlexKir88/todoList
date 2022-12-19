
import { connect } from "react-redux";

function Todo({todo, dispatch, toggleTodo }) {
    let {id, text, date, complited} = todo;
    function onClick() {
        dispatch(toggleTodo())
    }
    return (
        <>
            <tr className={ complited? 'complited' : 'active'} onClick={onClick}>
                <td>{id}</td>
                <td className="table_text">{text}</td>
                <td>{date.toUTCString() }</td>
                <td>{complited ? 'yes' : 'no'}</td>
            </tr>
        </>
    )
}

export default connect()(Todo);