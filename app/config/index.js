module.exports = {
    prod: {
        database: '',
        username: '',
        password: '',
        params: {
            host: '',
            port: 3306
        },
        superSecret: "vivadilmaqueloucura"
    },
    dev: {
        database: 'api_blog',
        username: 'root',
        password: 'root',
        params: {
            host: 'localhost',
            port: 3306
        },
        superSecret: "vivadilmaqueloucura"
    }
}
