

function reduser(state = {}, action) {
    switch(action.type) {
        case 'ADD':
            return (
                Object.assign({},state, {todos: [...state.todos, {
                    id: action.id,
                    text: action.text,
                    date: new Date(),
                    complited: false,
                }]} )
            )
        case 'TOGGLE':
            return(
                Object.assign({}, state, {todos: state.todos.map(todo => {
                    if(todo.id === action.id) {
                        todo.complited = !todo.complited;
                    }
                    return todo;
                })})
            )
        default:
            return state;
    }
}

export default reduser;