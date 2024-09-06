import './App.css'
import Footer from './components/footer/Footer'
import Main from './components/Main/Main'
import Navbar from './components/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <div className="app-wrapper">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
