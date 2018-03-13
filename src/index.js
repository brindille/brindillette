import componentManager from 'lib/core/ComponentManager'
import Component from 'brindille-component'
// import 'gsap'

// Layouts
import Header from 'views/layouts/header/Header'
import Footer from 'views/layouts/footer/Footer'

import './stylus/main.styl'

componentManager.registerMultiple({
  /* Layouts */
  Header,
  Footer
})

let rootComponent = new Component(document.body, componentManager.get)
componentManager.setRootComponent(rootComponent)
