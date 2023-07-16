

import './App.css'
import Chatbot from 'react-chatbot-kit'
import config from './components/Config'
import MessageParser from './components/MessageParser'
import ActionProvider from './components/ActionProvider'


function App() {
  

  return (
    <>
     <Chatbot  config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
    </>
  )
}

export default App
