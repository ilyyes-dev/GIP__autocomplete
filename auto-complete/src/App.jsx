import {useState} from 'react';
import { countries } from './data.js';
import './App.css';

function App() {
    const [txt, settxt] = useState('');
    const FrToEng = (txt) => {
        return txt.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

  return (
    <div className="App">
        <input 
        type="search" 
        placeholder="Enter text" 
        value={txt}
        onChange={(e) => settxt(e.target.value)}
        />
        {countries.map((country) =>
            txt!='' && FrToEng(country.name).includes(FrToEng(txt)) && ( <div onClick={()=>{settxt(country.name)}} key={country.id} className="result">{country.name}</div>)
        )}
    </div>
  );
}

export default App;
