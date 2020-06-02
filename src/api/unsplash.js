import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID nOxZEALYezrzaXr7i9fI0ee5HDoWVOILHRee5xBv5Ls'
	}
})