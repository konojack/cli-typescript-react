import MonacoEditor from '@monaco-editor/react';
import * as monaco from 'monaco-editor';

interface CodeEditorProps {
  initialValue: string;
  onChangeEditor(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  onChangeEditor,
  initialValue,
}) => {
  const onEditorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor,
    monaco: any
  ) => {
    console.log(editor.getValue());
  };

  const onEditorChange = (value: any, event: any) => {
    onChangeEditor(value);
  };

  return (
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
  );
};

export default CodeEditor;
