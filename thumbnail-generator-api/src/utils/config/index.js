require('dotenv').config();



module.exports = {
    dbUser : process.env.DB_USER ||'postgres',
    dbName : process.env.DB_NAME || 'ThumbnailGen',
    dbPort : process.env.DB_PORT || '5432',
    dbHost : process.env.DB_HOST || 'localhost',
    dbPassword : process.env.DB_PASSWORD || '12345',
    host : process.env.HOST || 'localhost',
    PORT : process.env.PORT || '3001',
}