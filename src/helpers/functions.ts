import { backend } from './firebase';
import { url } from './constants';

export const getAllGengs = () => {
	return new Promise(async (resolve, reject) => {
		let gengs = [];
		await backend.database().ref().child('gengs').on('child_added', (data) => {
			gengs.push(data.val());

			resolve(gengs);
		});
	});
};

export const getTimeline = () => {
	return new Promise(async (resolve, reject) => {
		let temp = [];
		await backend.database().ref().child(url.TIMELINE).on('child_added', (snapshot) => {
			temp.push({
				key: snapshot.key,
				value: snapshot.val()
			});

			resolve(temp);
		});
	});
};
