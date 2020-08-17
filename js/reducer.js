// add code snippets from README
let state;

function reducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return { count: state.count + 1 };

        case 'DECREASE_COUNT':
            return { count: state.count - 1 };

        case 'RESET':
            return { count: state.count = 0 };
        default:
            return state;
    }
}

function dispatch(action) {
    state = reducer(state, action);
    render()
}


function render() {
    let container = document.getElementById('container');
    container.textContent = state.count;
}

dispatch({ type: '@@INIT' })

let addButton = document.getElementById('button1')
let minusButton = document.getElementById('button2')
let resetButton = document.getElementById('button3')

addButton.addEventListener('click', () => {
    dispatch({ type: 'INCREASE_COUNT' })
})

minusButton.addEventListener('click', () => {
    dispatch({ type: 'DECREASE_COUNT' })
})

resetButton.addEventListener('click', () => {
    dispatch({ type: 'RESET' })
})