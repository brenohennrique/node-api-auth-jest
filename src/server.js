import app from './app'

require("dotenv").config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

const port = process.env.PORT

app.listen(port, () => console.log(`App listening on port ${port}!`))
