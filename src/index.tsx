import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

import CodeEditor from './components/code-editor';
import Preview from './components/preview';
import bundle from './bundler';

const App = () => {
  const [input, setInput] = useState<string | undefined>('');
  const [code, setCode] = useState<string>('');

  const onClickHandler = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor
        initialValue="const a = 1;"
        onChangeEditor={value => setInput(value)}
      />
      <div>
        <button onClick={onClickHandler}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);
root.render(<App />);
