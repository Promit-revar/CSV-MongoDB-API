exports.FileTypeNotExcepted = (req, res, next) => {
	res.status(401).render('401');
};