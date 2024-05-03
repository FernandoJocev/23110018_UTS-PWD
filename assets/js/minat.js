const minat = [
  {
    name: 'Vue JS',
    category: 'Frontend',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
  },
  {
    name: 'Next JS',
    category: 'Frontend',
    img: 'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png',
  },
  {
    name: 'Laravel',
    category: 'Backend',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/800px-Laravel.svg.png',
  },
  {
    name: 'HTML',
    category: 'HyperText Markup Language',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsubI1xnS2EsbFC7IKOtHXy3o2yp5zNGHX8-mLk-0nVw&s',
  },
  {
    name: 'CSS',
    category: 'Stylesheet',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png',
  },
  {
    name: 'Javascript',
    category: 'Script',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7uwLyomLuj-z2wdukzRfaViu2o_urpD0h8eOGOdtcLQ&s',
  },
  {
    name: 'React JS',
    category: 'Frontend',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTw3HApB4bsvabXW3L14cV-LhFo0L71QmEESJN3vW9Ow&s',
  },
  {
    name: 'PHP',
    category: 'Script',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/640px-PHP-logo.svg.png',
  },
]

const parentElement = document.getElementById('container')

minat.forEach((items, key) => {
  const card = document.createElement('div')
  const title = document.createElement('h1')
  const category = document.createElement('p')
  const image = document.createElement('img')

  card.className = 'programming-languages-card'
  card.id = 'card'
  title.innerHTML = items.name
  category.innerHTML = items.category
  image.src = items.img
  image.alt = items.name

  card.appendChild(title)
  card.appendChild(category)
  card.appendChild(image)

  parentElement.appendChild(card)
})
