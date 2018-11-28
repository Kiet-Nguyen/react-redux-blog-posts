import axios from 'axios';

const Instance = axios.create({
	baseURL: 'https://build-a-burger-85408.firebaseio.com/',
});

export default Instance;
