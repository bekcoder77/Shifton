const menuBtn = document.querySelector('.menu-btn')
    const links = document.querySelector('.links')
    const btnss = document.querySelector('.btnss')
    const btn = document.querySelector('button')
    const header = document.querySelector('.header')
    const linksItems = document.querySelectorAll('.links a')
    const scrollBtn = document.querySelector('.scrollBtn')


      scrollBtn.addEventListener('click',()=>{
        document.documentElement.scrollTop = 0
      })

      window.addEventListener('scroll',()=>{
        scrollBtn.classList.toggle("activ",window.scrollY >200)
      })
  
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active')
      links.classList.toggle('active')
      header.classList.toggle('filter')

    })
     btn.addEventListener('click', ()=>{
      btn.style.backgroundColor = 'blue'
    })
    btnss.addEventListener('click', ()=>{
      btnss.style.backgroundColor = 'blue'
    })
    