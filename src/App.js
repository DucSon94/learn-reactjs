import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Son';
  const age =18;
  const isMale =true;
  const student ={
    name: 'Easy Frontend'
  };
  const colorList =['red','green','blue']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Sơn Nguyễn
        </p>
       <p>Xin chao {name} - {age} -{isMale ? 'Male' : 'Fermale'} </p>
       {isMale ? <p>Male</p> : <p>Fermale</p>}
       {isMale && <p>Male</p>}
       {!isMale && <p>Female</p>}
       {isMale &&(
         <div>
         <p>Male 1</p>
         <p>Male 2</p>
         <p>Male 3</p>
         </div>
       )}
       {isMale && (
         <>
         <p>Male 1</p>
         <p>Male 2</p>
         <p>Male 3</p>
         </>
       )}
       <ul>
       {colorList.map((color ,index) =>(
         <li style={{color}}>{index} - {color} </li>

       ))}
       </ul>
       <p>{student}</p>
      </header>
    </div>
    
  );
 
}

export default App;
