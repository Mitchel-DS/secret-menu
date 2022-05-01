const error = async (req, res) => {
	const page = {
		title: "Page not found"
	}
    res.render('error', {
		page: page
	})
};

module.exports = {
	error: error
};