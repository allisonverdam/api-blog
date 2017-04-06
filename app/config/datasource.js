const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

let database = null;

loadModels = (sequelize) => {
    const dir = path.join(__dirname, '../models');
    let models = [];
    fs.readdirSync(dir).forEach(file => {
        let modelDir = path.join(dir, file),
        model = sequelize.import(modelDir);
        models[model.name] = model;
    })
    return models;
}

module.exports = (app) => {
    if(!database){
        const 
        config = app.config.dev,
        sequelize = new Sequelize(config.database, config.username, config.password, config.params);

        database = {
            sequelize,
            Sequelize,
            models: {}
        }

        //carrega os models na pasta
        database.models = loadModels(sequelize)

        //retorna o database depois de sincronizar
        sequelize.sync().done(() =>{
            return database;
        })
    }
    return database;
}