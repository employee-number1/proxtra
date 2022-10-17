import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>This message will self-destruct in 30 seconds.</h4>
        <h6>format: str_nbr, 000 + rgstr_nbr, pos_trans_id</h6>
        <ul>
          <li>POS_TRANS_ID='4339' STR_NBR='0659' RGSTR_NBR='1', 2022-10-10, 114.00</li>
          <li>POS_TRANS_ID='88' STR_NBR='0669' RGSTR_NBR='27', 2022-10-12, 833.28</li>
          <li>POS_TRANS_ID='3914' STR_NBR='0679' RGSTR_NBR='24', 2022-10-12, 55.68</li>
          <li>POS_TRANS_ID='4095' STR_NBR='0679' RGSTR_NBR='24' , 2022-10-12, 99.00</li>
        </ul>
        <a
          className="App-link"
          href="https://theporndude.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Porn
        </a>
      </header>
    </div>
  );
}

export default App;
