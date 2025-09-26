import Modal from './components/Modal'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <div>
        <h1 className='text-3xl font-bold'>Hello, world!</h1>
        <p>lorem ipsum dolor sit amet</p>
      </div>
      <Navbar></Navbar>
      <Modal></Modal>
    </>
  )
}

export default App