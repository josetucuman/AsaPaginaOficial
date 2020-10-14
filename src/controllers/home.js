const ctrlHome = {}

ctrlHome.index = (req, res) => {
    res.render('index')
}

ctrlHome.about = (req, res) => {
    res.render('about')
}
ctrlHome.reunion = (req, res) => {
    res.render('reuniones')
}

module.exports = ctrlHome