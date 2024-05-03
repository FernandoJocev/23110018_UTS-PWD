const campusLink = document.getElementById('campus')
const campusOverlay = document.getElementById('campus-overlay')

campusLink.addEventListener('mouseover', function () {
  campusOverlay.classList.remove('hidden')
})

campusOverlay.addEventListener('mouseleave', function () {
  campusOverlay.classList.add('hidden')
})
