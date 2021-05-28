const showMenu = (toggleId: string, navId: string): void => {
  const toggle: HTMLElement | null = document.getElementById(toggleId)
  const nav: HTMLElement | null = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')

const navLink: NodeListOf<any> | null = document.querySelectorAll('.nav__link')

function linkAction(): void {
  const navMenu: HTMLElement | null = document.getElementById('nav-menu')
  if (navMenu) {
    navMenu.classList.remove('show')
  }
}

navLink.forEach((n:HTMLElement) => n.addEventListener('click', linkAction))
