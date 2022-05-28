import { useState } from 'react';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

import CodeEditor from './code-editor';
import Preview from './preview';
import bundle from '../bundler';

const CodeCell = () => {
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

export default CodeCell;
