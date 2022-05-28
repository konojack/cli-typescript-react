import { useState } from 'react';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import Resizable from './resizable';

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
    <Resizable direction="horizontal">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <CodeEditor
          initialValue="const a = 1;"
          onChangeEditor={value => setInput(value)}
        />
        <Preview code={code} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
