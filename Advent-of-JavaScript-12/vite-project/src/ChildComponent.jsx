import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function ChildComponent() {
  const navigate = useNavigate();

  const redirectToAnotherPage = (event) => {
    const buttonText = event.currentTarget.innerText;
    console.log(buttonText);
    navigate('/winner', { state: { choice: buttonText } });
  };

  return (
    <div className="wrapper">
      <h1>pick one</h1>
      <ul>
        <li className="pick-one">
          <button onClick={(event) => redirectToAnotherPage(event)}>
            <img src="./rock.png" alt="Rock" />
            rock
          </button>
        </li>
        <li className="pick-one">
          <button onClick={(event) => redirectToAnotherPage(event)}>
            <img src="./paper.png" alt="Paper" />
            paper
          </button>
        </li>
        <li className="pick-one">
          <button onClick={(event) => redirectToAnotherPage(event)}>
            <img src="./scissors.png" alt="Scissors" />
            scissors
          </button>
        </li>
      </ul>
    </div>
  );
}
export default ChildComponent;