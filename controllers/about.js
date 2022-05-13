const about = async (req, res) => {
	const page = {
		title: "about"
	}
    res.render('about', {
		page: page
	})
};

module.exports = {
	about: about
};