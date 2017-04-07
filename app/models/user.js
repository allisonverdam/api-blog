module.exports = (Sequelize, DataType) => {

    const User = Sequelize.define('user', {
        username: DataType.STRING,
        firstName: DataType.STRING,
        lastName: DataType.STRING,
        email: DataType.STRING,
        password: DataType.STRING
    })
    const Post = Sequelize.model('post');
    User.hasMany(Post);
    return User;
}
