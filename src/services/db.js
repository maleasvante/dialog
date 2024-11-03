import {
	WithFieldValue,
	arrayUnion,
	arrayRemove,
	doc,
	getDoc,
	setDoc,
	updateDoc,
	Timestamp,
	getDocs,
	collection,
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { auth, db, storage } from './firebaseConfig';


export async function updateUser(data) {
	const docRef = doc(db, 'usuarios', auth.currentUser?.email || 'err');
	const retorno = {
		isOK: false,
		user: auth.currentUser
	}
	
	try {
		await updateDoc(docRef, data);
		retorno.isOK = true;
	} catch (err) {
		console.warn(err);
	}

	return retorno;
}

export default {
	updateUser
};