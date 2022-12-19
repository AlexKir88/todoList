let initId = 0;

export function addTodo(text) {
    return ({
        type: 'ADD',
        id: initId++, 
        text
    })
};

export function toggleTodo(id) {
    return ({
        type: 'TOGGLE',
        id
    })
}

