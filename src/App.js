import React,{useState} from 'react';


import './App.css';

function App() {

  const [myInput, setMyInput] = useState("");

 //--PressedNums
   const pressedButtons = [];

  [".", "%", 0, 1, 2, 3, 4, 5, 6, 7,8,9].forEach((num) => {

    pressedButtons.push(

            <button onClick={ (event) =>{  

                console.log(event.target.value);
                setMyInput(myInput + event.target.value );

              }
             }
             value={num}
             key={num}          
             >
             {' '}
             {num}

           </button>
      );       

  });
  console.log(pressedButtons);

     //-------add function
    // const handleAdd  = (e)  => {
    //   console.log('clicked')
    //   setMyInput(myInput + e.target.value)
    // }


    ///-------------------errors thrown type11

  return (
   <div className="App">
    <div class="calculator">
      <div id="calculator">
           <div class="top">
             <span class="clear" onClick={() => setMyInput(myInput.substr(0, myInput.length - 1))}  >C</span>
             <div class="screen">{myInput}</div>
            </div>
        <div class="keys" >
        <button >{pressedButtons[11]}</button>
        <button>{pressedButtons[10]}</button>
        <button>{pressedButtons[9]}</button>
        <button class="operator" onClick={(e) => setMyInput(myInput + e.target.value)} value="+" >
           {" "} + {" "}
           </button>
        <button>{pressedButtons[6]}</button>
        <button>{pressedButtons[7]}</button>
        <button>{pressedButtons[8]}</button>
        <button class="operator" onClick={(e) => setMyInput(myInput + e.target.value)} value="-">
         {" "} - {" "}
          </button>
        <button>{pressedButtons[3]}</button>
        <button>{pressedButtons[4]}</button>
        <button>{pressedButtons[5]}</button>
        <button class="operator" onClick={(e) => setMyInput(myInput + e.target.value)} value="/">{pressedButtons[1]}
        {" "} / {" "}
        </button>
        <button>{pressedButtons[2]}</button>
        <button>{pressedButtons[0]}</button>
        <button class="eval"  
            onClick={(e) => {
                try {
                       setMyInput(
                         String(eval(myInput)).length > 3 &&
                           String(eval(myInput)).includes(".")
                           ? String(eval(myInput).toFixed(4))
                           : String(eval(myInput))
                        );
                } catch (e) {
                       console.log(e);
                     }
                }
              }
          value="="> =   
        </button>
        <button class="operator" onClick={(e) => setMyInput(myInput + e.target.value)} value="*">
        {" "} x {" "}

        </button>

        </div>
	     </div>
      </div>
    </div>
  );
}

export default App;
