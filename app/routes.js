const express = require('express')
const router = express.Router()

// radio-button-redirect
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

//MVP3
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

//MVP4
router.post('/results', function (req, res) {
  const checkedValues = req.session.data['category-2']

  if (checkedValues.includes('all-hubs') ){
    res.redirect('/mvp-4/results-all-hubs')
  } else if (checkedValues.includes('infant-feeding')) {
    res.redirect('/mvp-4/results-infant-feeding')
  } else if (checkedValues.includes('targeted-support')) {
    res.redirect('/mvp-4/results-targeted-support')
  } else {
    res.redirect('/mvp-4/results')
  }
})



// Add your routes here - above the module.exports line
router.use('/node_modules', express.static('node_modules'))

module.exports = router
