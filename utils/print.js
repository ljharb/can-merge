'use strict';

const print = (message) => {
	if (process.env.NODE_ENV === 'TEST') {
		return;
	}

	console.log(message);
};

module.exports = print;
