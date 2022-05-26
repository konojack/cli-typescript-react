import { useRef } from 'react';
import MonacoEditor, { OnMount, OnChange } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';

interface CodeEditorProps {
  initialValue: string;
  onChangeEditor(value: string | undefined): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  onChangeEditor,
  initialValue,
}) => {
  const editorRef = useRef<any>();
  const onEditorDidMount: OnMount = editor => {
    editorRef.current = editor;
    editor.getModel()?.updateOptions({ tabSize: 2 });
  };

  const onEditorChange: OnChange = (value, event) => {
    onChangeEditor(value);
  };

  const onFormatClick = () => {
    //get code
    const unformattedCode = editorRef.current?.getModel()?.getValue();

    // format code
    const formattedCode = prettier.format(unformattedCode, {
      parser: 'babel',
      plugins: [parser],
      useTabs: false,
      semi: true,
      singleQuote: true,
    });

    // set formatted code
    editorRef.current?.setValue(formattedCode);
  };

  return (
    <div>
      <button onClick={onFormatClick}>Fromat</button>
      <MonacoEditor
        onChange={onEditorChange}
        onMount={onEditorDidMount}
        value={initialValue}
        language="javascript"
        theme="vs-dark"
        height="200px"
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 20,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
