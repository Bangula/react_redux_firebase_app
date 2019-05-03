const initState = {
    projects: [
        { id: 1, title: 'project 1', conent: 'some dummy data goes here' },
        { id: 2, title: 'project 2', conent: 'some dummy data goes here' },
        { id: 3, title: 'project 3', conent: 'some dummy data goes here' },
        { id: 4, title: 'project 4', conent: 'some dummy data goes here' },
        { id: 5, title: 'project 5', conent: 'some dummy data goes here' },
        { id: 6, title: 'project 6', conent: 'some dummy data goes here' }
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log('created project', action.payload);
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log('create project error', action.err)
            return state;
        default:
            return state;
    }
}

export default projectReducer;