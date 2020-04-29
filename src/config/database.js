require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})

module.exports = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  dialect: process.env.DATABASE_DIALECT || 'postgres',
  storage: './__tests__/database.sqlite',
  operatorsAliases: 0,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
