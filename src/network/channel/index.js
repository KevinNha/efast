import firebase from '../../firebase/config';
import 'firebase/firestore';
import { uuid } from '../../utils/constants';

export const CreateChannel = async (name, uid) => {
    try {
        return await firebase
            .firestore()
            .collection("channels")
            .doc()
            .set({
                name: name,
                members: [uid],
            })
    } catch (error) {
        return error;
    }
};

// export const AddChannelMember = async (cid, uid) => {
//     try {
//         return await firebase
//             .firestore()
//             .collection("channels")
//             .doc(cid)
//             .update({
//                 members: [...uid],
//             })
//     } catch (error) {
//         return error;
//     }
// };