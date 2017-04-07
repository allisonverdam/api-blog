module.exports = (Sequelize, DataType) => {
  const Post = Sequelize.define('post', {
    name: {type: DataType.STRING},
    title: {type: DataType.STRING},
    content: {type: DataType.STRING},
    status: {type: DataType.STRING}
  })
  return Post;
}
