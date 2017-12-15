const Attempt = require('./attempt')

Attempt.find()
  .then((attempts) => {
    console.log('Attempts: ', attempts)
  })
  .catch((error) => {
    console.error(error)
  })

Attempt.create([
  { name: 'First try' },
  { name: 'Second try' },
  { name: 'Third try' },
  { name: 'Fourth try' },
])
  .then((attempt) => {
    console.log('Created attempt ', attempt)
  })