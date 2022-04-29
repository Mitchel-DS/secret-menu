const error = async (req, res) => {
	const page = {
		title: "404"
	}
    res.render('error', {
		page: page
	})
};

module.exports = {
	error: error
};