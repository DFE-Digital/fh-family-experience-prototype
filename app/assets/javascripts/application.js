/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  window.MOJFrontend.initAll()

 let selectElement = document.querySelector('#search-term')

  accessibleAutocomplete.enhanceSelectElement({
  defaultValue: '',
  selectElement: selectElement
})
})

// add service name to header
// const a = document.querySelector('.govuk-header__link');
// const span = document.createElement('span');
// span.textContent = 'Find support for your family';
// a.append(span);
