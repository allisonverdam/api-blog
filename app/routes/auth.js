module.exports = app => {
    app.route('/home')
    .get((req, res) => {       
        res.json({message: "Teste"})
    })


    return app;
}