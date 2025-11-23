const links = Array.from(document.querySelectorAll('.nav-link'))
const sections = links.map(l => document.querySelector(l.getAttribute('href')))
const toTop = document.getElementById('toTop')

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    const id = link.getAttribute('href')
    const el = document.querySelector(id)
    window.scrollTo({ top: el.offsetTop - 10, behavior: 'smooth' })
  })
})

const setActive = () => {
  const y = window.scrollY + 100
  let activeIndex = 0
  sections.forEach((sec, i) => { if (sec && sec.offsetTop <= y) activeIndex = i })
  links.forEach((l, i) => l.classList.toggle('active', i === activeIndex))
  toTop.classList.toggle('show', window.scrollY > 400)
}

document.addEventListener('scroll', setActive)
window.addEventListener('load', setActive)

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})