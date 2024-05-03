const projects = [
  {
    name: 'Electronic Library',
    description:
      'Electronic Library project from my vacational High School, SMK Immanuel Kristen Pontianak! Feel free to visit the GitHub repo :)',
    img: '../assets/images/E-Lib.png',
    link: 'https://github.com/FernandoJocev/E-Lib',
  },
  {
    name: 'Twitter Copy',
    description:
      'Twitter copy from BNSP Certification with Vue JS and Laravel. Feel free to checkout the GitHub Repository!',
    img: '../assets/images/Twitter.png',
    link: 'https://github.com/FernandoJocev/UKK-Twitter',
  },
  {
    name: 'About Me',
    description:
      'This is a simple website containing some information about me!',
    img: '../assets/images/efje.vercel.app.png',
    link: 'https://efje.vercel.app',
    github: 'https://github.com/FernandoJocev/Portofolio-Web',
  },
  {
    name: 'Social Links Profile',
    description:
      'This is a simple social media links profile challengen from Frontend Mentor! Feel free to check it out :)',
    img: '../assets/images/Social Media Links.png',
    link: 'https://simple-social-link-efje.netlify.app/',
    github: 'https://github.com/FernandoJocev/Social-Links-Profile',
  },
]

const parentElement = document.getElementById('container')

projects.forEach((items, key) => {
  const image = document.createElement('img')
  const card = document.createElement('div')
  const imageDiv = document.createElement('div')
  const textDiv = document.createElement('div')
  const title = document.createElement('h1')
  const description = document.createElement('p')
  const webLink = document.createElement('a')

  card.className = 'programming-languages-card'
  imageDiv.className = 'image-div'
  textDiv.className = 'text-div'
  card.id = 'card'
  image.src = items.img
  image.alt = items.name
  title.innerHTML = items.name
  description.innerHTML = items.description
  webLink.href = items.link
  webLink.innerHTML = 'Visit'
  webLink.className = 'weblink'
  webLink.target = '_blank'

  if (items.github) {
    const githubLink = document.createElement('a')
    const icon = document.createElement('i')

    githubLink.href = items.github
    githubLink.target = '_blank'
    icon.classList.add('ri-github-fill')

    card.appendChild(githubLink)
    card.appendChild(icon)

    githubLink.appendChild(icon)
    title.appendChild(githubLink)
  }

  imageDiv.appendChild(image)
  textDiv.appendChild(title)
  textDiv.appendChild(description)
  textDiv.appendChild(webLink)

  card.appendChild(imageDiv)
  card.appendChild(textDiv)

  parentElement.appendChild(card)
})
