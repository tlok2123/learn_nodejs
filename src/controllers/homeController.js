const getHomepage = (req, res) => {
    res.send('dit me may')
}

const getTest = (req, res) => {
    res.render('sample.ejs');
}


module.exports = {
    getHomepage,
    getTest
}