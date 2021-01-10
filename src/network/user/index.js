import firebase from '../../firebase/config';
import 'firebase/firestore';

export const AddUser = async (name, email, uid) => {
    try {
        return await firebase
            .firestore()
            .collection("users")
            .doc(uid)
            .set({
                name: name,
                email, email,
                // uuid: uid,
            })
            // .then(function(docRef) {
            //     console.log(docRef);
            // })
            // .database()
            // .ref('users/' + uid)
            // .set({
            //     name: name,
            //     email: email,
            //     uuid: uid,
            // })
    } catch (error) {
        return error;
    }
};

