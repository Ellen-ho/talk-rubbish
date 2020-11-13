// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTalk = require('./generate_talk')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ 
  defaultLayout: 'main', 
  helpers:{
    ifEquals: function(value1, value2) {
      return value1 === value2
    }
  }
}))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(
  bodyParser.urlencoded({ extended: true }),
  express.static('public')
)

// setting routes
app.get('/', (req, res) => {
  // 預設選取工程師
  const options = { role: 'engineer'}
  res.render('index', { options })
})

app.post('/', (req, res) => {
  const options = req.body
  const talk = generateTalk(options)
  res.render('index', { talk, options })
})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})

