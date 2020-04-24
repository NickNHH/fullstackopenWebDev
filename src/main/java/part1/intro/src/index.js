import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
    const {name, age} = props;
    const bornYear = () => new Date().getFullYear() - age;

    return (
        <div>
            <p>Hello {name}, you are {age} years old</p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
};

const Display = ({counter}) => <div>{counter}</div>;

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
);

const App = () => {
    const name = "Peter";
    const age = "10";
    const [counter, setCounter] = useState(0);

    const increaseByOne = () => setCounter(counter + 1);
    const decreaseByOne = () => setCounter(counter - 1);
    const setToZero = () => setCounter(0);

    console.log('rendering...', counter);

    return (
        <>
            <h1>Greetings</h1>
            <Hello name="Maya" age={26 + 10}/>
            <Hello name={name} age={age}/>
            <br/>
            <Display counter={counter}/>
            <Button
                handleClick={increaseByOne}
                text='plus'
            />
            <Button
                handleClick={setToZero}
                text='zero'
            />
            <Button
                handleClick={decreaseByOne}
                text='minus'
            />
        </>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
