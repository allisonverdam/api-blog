module.exports = (sequelize, DataType) => {

    const User = sequelize.define('user', {
        name: DataType.STRING(50),
        email: DataType.STRING(50),
        password: DataType.STRING
    })

    return User;
}