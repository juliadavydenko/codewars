import {useState} from 'react'; 

const Home = () => {
// use array destructuring to grab two values that this hook returns to us
// first value is our param, initial value, we can call it anything, any data type
// to change value in brackets use setName
const[name, setName] = useState("Jill");
const[age, setAge]= useSate(35)

const handleClick = () => {
setName = ("Jemini");
setAge = (30);
}

return(
<p>{ name } is { age } years old</p>
<button onClick={handleClick}>Hi</button>
)}
// isn't firing straight away cs wrapped in anonymous f
// {} signifies dynamic value
// event object
// #6 e, e.target
export default Home; 