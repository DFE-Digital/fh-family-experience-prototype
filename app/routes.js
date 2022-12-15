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
  const checkedValues2 = req.session.data['category-2']

  if (checkedValues2.includes('all-hubs') ){
    res.redirect('/mvp-4/results-all-hubs')
  } else if (checkedValues2.includes('infant-feeding')) {
    res.redirect('/mvp-4/results-infant-feeding')
  } else if (checkedValues2.includes('targeted-support')) {
    res.redirect('/mvp-4/results-targeted-support')
  } else {
    res.redirect('/mvp-4/results')
  }
})

//Build
router.post('/results-build', function (req, res) {
  const checkedValues3 = req.session.data['category-3']

  if (checkedValues3.includes('all-hubs') ){
    res.redirect('/build-prototype/results-all-hubs')
  } else if (checkedValues3.includes('infant-feeding')) {
    res.redirect('/build-prototype/results-infant-feeding')
  } else if (checkedValues3.includes('targeted-support')) {
    res.redirect('/build-prototype/results-targeted-support')
  } else {
    res.redirect('/build-prototype/results')
  }
})

//Pre-MVP
router.post('/results-pre', function (req, res) {
  const checkedValues4 = req.session.data['category-4']

  if (checkedValues4.includes('all-hubs') ){
    res.redirect('/pre-mvp/results-all-hubs')
  } else if (checkedValues4.includes('infant-feeding')) {
    res.redirect('/pre-mvp/results-infant-feeding')
  } else if (checkedValues4.includes('targeted-support')) {
    res.redirect('/pre-mvp/results-targeted-support')
  } else {
    res.redirect('/pre-mvp/results')
  }
})


// Add your routes here - above the module.exports line
router.use('/node_modules', express.static('node_modules'))

module.exports = router
