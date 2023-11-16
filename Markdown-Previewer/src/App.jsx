import './App.css'
import {useEffect, useMemo, useRef, useState} from 'react'
import FileUpload from './components/fileUpload'

//window splitter.
import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import Editor from './components/Editor'
import MarkdownPreviewer from './components/MarkdownPreviewer'

//jsx to html
import ReactDOMServer from 'react-dom/server';



function App() {
  const [markdown, setMarkdown] = useState(``)


  const handleInput = (e) => {
      setMarkdown(e)
  }


  const handleMarkDownText = (fileText) => {
    setMarkdown(fileText)
  }


  return (
    <div className="row inner-container p-5 ">

    <div className='ms-100'>
    <FileUpload markdownText={handleMarkDownText} />
    <br />

    </div>

    <Editor id='Editor' markdownTxt={markdown} handleTextInput={handleInput}/>

  <MarkdownPreviewer  id='MarkdownPreviewer' markdownText={markdown} />

    <SplitterComponent id="plain" height='100%' width='100%'>
    <PanesDirective>
        <PaneDirective content='#Editor' />

        <PaneDirective content="#MarkdownPreviewer"/>
    </PanesDirective>
  </SplitterComponent>
  </div>
  )
}

export default App
