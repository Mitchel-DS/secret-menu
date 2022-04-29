const home = async (req, res) => {
	const page = {
		title: "Home"
	}
    res.render('home', {
		page: page
	})
};

module.exports = {
	home: home
};