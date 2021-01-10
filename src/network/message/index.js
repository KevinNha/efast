import firebase from '../../firebase/config';
import 'firebase/firestore';
import { uuid } from '../../utils/constants';

export const SendMessage = async (msgText, uid, channelId) => {
    try {
        let uname;
        let messages;
        await firebase.firestore().collection("users").doc(uid).get().then((doc)=>{uname = doc.data().name;});
        await firebase.firestore().collection("channels").doc(channelId).get().then((doc)=>{messages = doc.data().messages;}).then(()=>{messages.push({
            senderId: uid,
            senderName: uname,
            msg: msgText,
        })});
        // console.log(channelId);
        return await firebase
            .firestore()
            .collection("channels")
            .doc(channelId)
            .update({
                messages: messages
            })
            // .then((querySnapshot) => {
            //     querySnapshot.forEach((doc) => {
            //         if (doc.id === channelId) {
            //             console.log("SAMEASMSE");
            //             console.log(doc.id);
            //         }
            //     })
            // })
            // .update({
            //     messages: firebase.firestore().FieldValue().arrayUnion({
            //         senderId: uid,
            //         senderName: uname,
            //         msg: msgText,
            //     })
            // })
    } catch (error) {
        return error;
    }
};