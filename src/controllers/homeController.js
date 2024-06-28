const connection = require('../config/database');
const { getAllUsers } = require('../services/CURDServices');

let users = [];
const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })

}

const getTest = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    console.log('>>> email=  ', email, 'name = ', name, 'city= ', city);


    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES(?, ?, ?) `, [email, name, city]);
    // connection.query(
    //     `INSERT INTO 
    //     Users (email, name, city)
    //     VALUES(?, ?, ?) `,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);

    //         res.send('Created user succeed !');
    //     }
    // )
    // const [results, fields] = await connection.query('select * from Users u')


    console.log('>>> check results ', results)
    res.send('Thanh cong');
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}
module.exports = {
    getHomepage,
    getTest,
    postCreateUser,
    getCreatePage
}