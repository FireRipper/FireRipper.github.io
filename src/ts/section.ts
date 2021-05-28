const sections: NodeListOf<any> = document.querySelectorAll('section[id]')

function scrollActive(): void {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight: number = current.offsetHeight
    const sectionTop: number = current.offsetTop - 50
    const sectionId: string = current.getAttribute('id')
    const currentElem: HTMLElement | null = document.querySelector(`.nav__menu a[href*= ${sectionId}]`)

    if ((scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) && currentElem) {
      currentElem.classList.add('active')
    } else {
      currentElem?.classList.remove('active')
    }
  })
}

export { scrollActive }
