const parentElement = document.getElementById('images')
const images = [
  '../../assets/images/dosen/Rektor.png',
  '../../assets/images/dosen/Wakil Rektor.png',
  '../../assets/images/dosen/Wakil Rektor 2.png',
  '../../assets/images/dosen/Kepala LPPM.png',
  '../../assets/images/dosen/Kepala LPM.png',
  '../../assets/images/dosen/Ketua Prodi STI.png',
  '../../assets/images/dosen/Ketua Prodi BD.png',
  '../../assets/images/dosen/Ketua Prodi KWU.png',
]

images.forEach((items, key) => {
  let image = document.createElement('img')
  image.src = items
  image.alt = 'Dosen'

  parentElement.appendChild(image)
})
