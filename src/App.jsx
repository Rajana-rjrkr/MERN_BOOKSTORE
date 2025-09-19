import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import Button from 'react-bootstrap/Button';
import './bootstrap.min.css'

function App() {


  return (
    <>
      <h1><FontAwesomeIcon icon={faInstagram} />BOOKSTORE</h1>
      <Button variant="primary">Primary</Button>
    </>
  )
}

export default App
