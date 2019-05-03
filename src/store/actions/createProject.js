export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        const firstName = getState().firebase.profile.firstName;
        const lastName = getState().firebase.profile.lastName;
        const id = getState().firebase.auth.uid;

        firestore.collection('projects').add({
            ...project,
            authorFirstName: firstName,
            authorLastName: lastName,
            authorId: id,
            createdAt: new Date()
        })
            .then(() => {
                dispatch({
                    type: "CREATE_PROJECT",
                    payload: project
                })
            })
            .catch(err => {
                dispatch({
                    type: "CREATE_PROJECT_ERROR",
                    err
                })
            })

    }
}