const moment = require('moment');

const date = (date, format) => {
	var mmnt = moment(date);
	return mmnt.format(format);
}

module.exports = {
	date: date,
}