import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar';
import Booklist from './Components/Booklist';
import Form from './Components/Form';
function App() {

  const[book, setBook] = useState({
    titulo: '',
    autor: '',
    edicion: 0
  })



  const [listUpdated, setListUpdated] = useState(false)
  const[books, setBooks] = useState([]);
  useEffect(() =>{
    const getBooks = () =>{
      fetch('http://localhost:9000/api')
      .then(res => res.json())
      .then(res => setBooks(res))
    }
    getBooks()
    setListUpdated(false)
  }, [listUpdated])  

  return (
    <Fragment>
      <Navbar brand='Libreria App'/>
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h2 style={{textAlign:'center'}}>Lista de Libros</h2>
            <Booklist book={book} setBook={setBook} books={books} setListUpdated={setListUpdated} />
          </div>
          <div className='col-5'>
          <h2 style={{textAlign:'center'}}>Formulario de Libros</h2>
          <Form book={book} setBook={setBook} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
