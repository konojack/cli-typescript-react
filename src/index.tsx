import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';
import CellList from './components/cell-list';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <TextEditor /> */}
        {/* <CodeCell /> */}
        <CellList />
      </div>
    </Provider>
  );
};

const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);
root.render(<App />);
