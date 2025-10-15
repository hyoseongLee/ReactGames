import "./App.css";
import Box from "./component/Box";
import { useState } from "react";
import Paper from "./component/img/Paper.jpg";
import Rock from "./component/img/Rock.jpg";
import Scissor from "./component/img/scissor.jpg";

// 1. 박스 2개 (타이틀,사진, 결과)
//2. 가위 바위 보 버튼이 있다
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4.컴퓨터는 랜덤하게 아이템 선택이 된다
//5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패결과에따라 테두리 색이 바뀐다 (이기면-초록, 지면-빨강 비기면-검은색)

const choice = {
  rock: {
    name: "Rock",
    img: Rock,
  },
  scissor: {
    name: "Scissor",
    img: Scissor,
  },
  paper: {
    name: "Paper",
    img: Paper,
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice)
  };
  git remote add origin https://github.com/hyoseongLee/ReactGames.git
  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 키값만 뽑아서 어레이로 만들어주는 함수다.
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} />
        <Box title="Computer" item={computerSelect} />
      </div>

      <div className="main">
        <button onClick={() => play("scissor")}> 가위 </button>
        <button onClick={() => play("rock")}> 바위 </button>
        <button onClick={() => play("paper")}> 보 </button>
      </div>
    </div>
  );
}

export default App;
