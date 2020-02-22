//module is a plain JavaScript object with an exports property. 
// exports is a plain JavaScript variable that happens to be set to module.exports

const f = (app, db) =>
    app.get('/hello', function (req, res) {
        console.log("hello indeed!");
    });

export default (app, db) => {
    f(app, db)
}