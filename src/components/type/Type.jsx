import React, { useState } from 'react'
import "./type.css"
const Type = () => {
  const [input, setInput] = useState("")
  const [data, setData] = useState("My name is Rittik Haldar I am a student of Masai School")
  const [count, setCount] = useState("0")
  const [accr, setAccr] = useState("0%")
  const [curIndex, setCurIndex] = useState(0)
  const [disabledData, setDisabledData] = useState(0);
  console.log(curIndex)
  return (
    <div>
      <h1>TypingApp</h1>
      <div className='data'>
        <h3>WPM:{count}</h3>
        <h3>Accuracy:{accr} </h3>
      </div>
      {data.split("").map((character, index) => (
        <span
          key={index}
          style={{ color: index < disabledData ? "blue" : "teal", fontSize: "20px" }}
        >
          {character}
        </span>
      ))}
      <input type="text" className='inputBox' value={input} onChange={(e) => {
        setInput(e.target.value)
        setCurIndex(curIndex + 1)
        let index = 0;
        while (
          index < input.length &&
          input[index] === data[index]
        ) {
          index++;
        }
        setDisabledData(index);
      }} /> <br />
      {/* <button onClick={start}>Start</button> */}
      <div className="keyboard">
        <div>~</div>
        <div>1</div>
        <div>2 </div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div> 9</div>
        <div>0</div>
        <div>-</div>
        <div>+</div>
        <div style={{ backgroundColor: "red" }}>BkSpace</div>
        <div>tab</div>
        <div> Q</div>
        <div>W</div>
        <div>E</div>
        <div>R</div>
        <div>T</div>
        <div>Y</div>
        <div>U</div>
        <div>I</div>
        <div>O</div>
        <div>P</div>
        <div>[</div>
        <div>]</div>
        <div>\</div>
        <div style={{ backgroundColor: "teal" }}>CapsLk</div>
        <div>A</div>
        <div>S</div>
        <div>D</div>
        <div>F</div>
        <div>G</div>
        <div>H</div>
        <div>J</div>
        <div>K</div>
        <div>L</div>
        <div>;</div>
        <div>'</div>
        <div className="enter" style={{ backgroundColor: "green" }}>Enter</div>
        <div style={{ backgroundColor: "pink" }}>Shift</div>
        <div>Z</div>
        <div>X</div>
        <div>C</div>
        <div>V</div>
        <div>B</div>
        <div>N</div>
        <div>M</div>
        <div>,</div>
        <div>.</div>
        <div>?</div>
        <div className="rshift" style={{ backgroundColor: "pink" }}>Shift</div>
        <div>^</div>
        <div style={{ backgroundColor: "brown" }}>ctrl</div>
        <div>Fn</div>
        <div>Wnd</div>
        <div>alt</div>
        <div className="space" style={{ backgroundColor: "yellow" }}>space</div>
        <div>alt</div>
        <div>Cal</div>
        <div style={{ backgroundColor: "brown" }}>Ctrl</div>
        <div className="Benter" style={{ backgroundColor: "green" }}>Enter</div>
      </div>
    </div>
  )
}

export default Type