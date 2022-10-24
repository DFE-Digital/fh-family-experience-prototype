const express = require('express')
const router = express.Router()

// radio-button-redirect
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)


// router.post('/results', function (req, res) {
//   const isItchecked = req.session.data['category']

//   if (isItchecked.includes('category') ){
//     res.redirect('/mvp-3/results-v3-infant')
//   } else {
//     res.redirect('/mvp-3/results-v3')
//   }
// })

router.post('/results-v3', function (req, res) {
  const checkedValues = req.session.data['category']

  if (checkedValues.includes('infant') ){
    res.redirect('/mvp-3/results-v3-infant')
  } else if (checkedValues.includes('youth')) {
    res.redirect('/mvp-3/results-v3-youth-services')
  } else {
    res.redirect('/mvp-3/results-v3')
  }
})



// Add your routes here - above the module.exports line
router.use('/node_modules', express.static('node_modules'))

module.exports = router
