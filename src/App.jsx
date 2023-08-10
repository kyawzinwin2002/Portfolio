import React from 'react'
import Main from './components/Main'
import Knowledge from './components/Knowledge/Knowledge'
import Skills from './components/Skills/Skills'
import Project from './components/Projects/Project'



const App = () => {
  return (
    <div className=' bg-white dark:bg-[#0d1117]'>      
      <Main/>
      <Knowledge/>
      <Project/>
      <Skills/>
    </div>
  )
}

export default App