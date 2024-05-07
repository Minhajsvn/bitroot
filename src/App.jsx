import { useState } from 'react'
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Modal from './components/Modal';

function App() {
  const [data, setData] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(-1)


  const fetchData = async () => {
    const res = await axios.get("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts");
    setData(res.data);
  }
  useEffect(() => {
    fetchData();
  },[])

  return (
    <>
      <div className='container'>
        {data.map((item) => <Card data={item} key={item.id} setIsOpen={setIsOpen} setId={setId} />)}
        {isOpen && <Modal id={id} data={data} setIsOpen={setIsOpen} />}
      </div>
    </>
  )
}

export default App
