import MonacoEditor, { OnMount, OnChange } from '@monaco-editor/react';

interface CodeEditorProps {
  initialValue: string;
  onChangeEditor(value: string | undefined): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  onChangeEditor,
  initialValue,
}) => {
  const onEditorDidMount: OnMount = (editor, monaco) => {
    console.log(editor.getValue());
    editor.getModel()?.updateOptions({ tabSize: 2 });
  };

  const onEditorChange: OnChange = (value, event) => {
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
