const objectNav = {
    "home-container":true,
    "contact-container": false,
    "about-container" : false,
    "portofolio-container":false,
    "blog-container" : false,
    "todos-container" : false,
  }

  const homeNav = document.getElementById("home-nav")
  const contactNav = document.getElementById("contact-nav")
  const aboutNav = document.getElementById("about-nav")
  const portofolioNav = document.getElementById("portofolio-nav")
  const blogNav = document.getElementById("blog-nav")
  const todosNav = document.getElementById("todos-nav")

  homeNav.addEventListener("click", ()=>{
    event.preventDefault()
    switchOn("home-container")
  })

  contactNav.addEventListener("click", ()=>{
    event.preventDefault()
    switchOn("contact-container")
  })

  aboutNav.addEventListener("click", ()=>{
    event.preventDefault()
    switchOn("about-container")
  })

  portofolioNav.addEventListener("click", ()=>{
    event.preventDefault()
    switchOn("portofolio-container")
  })

  blogNav.addEventListener("click", ()=>{
    event.preventDefault()
    switchOn("blog-container")
  })

  todosNav.addEventListener("click", ()=>{
    event.preventDefault()
    switchOn("todos-container")
    displayTodo()
  })