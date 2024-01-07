
import { useState } from 'react';
import './App.css'

function App() {
  const [textColor, setTextColor] = useState('#ffffff');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [font, setFont] = useState('Arial');

  return (
    <>
      <p style={{ color: textColor, fontFamily: font }}>
        This is the text that will change
      </p>
      Background color: <input type="color" onChange={(e) => handleBackgroundChange(e.target.value)} />
      text color: <input type="color" onChange={(e) => handleTextChange(e.target.value)} />
      select font: <select onChange={(e) => handleFontChange(e.target.value)}>
        <option value="Arial">Arial</option>
        <option value="Allegro">Allegro</option>
        <option value="Comic Sans MS">Comin Sans MS</option>
      </select>

    </>
  )


  function handleBackgroundChange(color) {
    setBackgroundColor(color);
    document.body.style.background = color;
    localStorage.setItem('backgroundColor', color);
  }

  function handleTextChange(color) {
    setTextColor(color);
    localStorage.setItem('textColor', color);
  }

  function handleFontChange(font) {
    setFont(font);
    console.log(font)
    localStorage.setItem('font', font);
  }
}

export default App
