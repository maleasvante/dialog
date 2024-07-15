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
	const docRef = doc(db, 'users', auth.currentUser?.email || 'err');

	try {
		await updateDoc(docRef, data);
	} catch (err) {
		console.warn(err);
	}
}