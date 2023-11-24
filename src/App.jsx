import './App.css'
import {useEffect, useMemo, useRef, useState} from 'react'
import FileUpload from './components/fileUpload'

//window splitter.
import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import Editor from './components/Editor'
import MarkdownPreviewer from './components/MarkdownPreviewer'

//jsx to html
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';


function App() {
  const [markdown, setMarkdown] = useState(``)
  const [isMobile, setMobile] = useState(false)
  let headerText = [{ text: "Editor" }, { text: "Preview" }];
  const [mediaQuery, setMediaQuery] = useState(window.innerWidth);

  const handleMediaQueryChange = (e) =>
    {
      setMediaQuery(window.innerWidth)

      if(mediaQuery < 930){

        setMobile(false)
      }else if(mediaQuery > 930){

        setMobile(true)
      }
    }

  useEffect(()=>{
    console.log(mediaQuery)
    console.log(import.meta.env.VITE_TOOL)
    handleMediaQueryChange()
    window.addEventListener('resize',handleMediaQueryChange)
  }, [markdown])

  const handleInput = (e) => {
      setMarkdown(e)
  }

  const handleMarkDownText = (fileText) => {
    setMarkdown(fileText)
  }

  const isMobileHandler = () =>
  {
    setMobile(!isMobile)
  }

  return (
    <>
    <div className='headers'>
    <div className='file-input'>
      <FileUpload markdownText={handleMarkDownText} />
    </div>
    </div>
    <div className="row inner-container p-5 ">

    <button type='button' className='btn btn-danger' onClick={isMobileHandler}> setMobile</button>
    <Editor id='Editor' markdownTxt={markdown} handleTextInput={handleInput}/>
    <MarkdownPreviewer  id='MarkdownPreviewer' markdownText={markdown} />

    {isMobile ?
      (<SplitterComponent id="plain" height='100%' width='100%'>
      <PanesDirective>
          <PaneDirective content='#Editor' />
          <PaneDirective content="#MarkdownPreviewer"/>
      </PanesDirective>
    </SplitterComponent>) :
    (<TabComponent height='100%' width='100%'>
        <TabItemsDirective>
            <TabItemDirective header={headerText[0]} content='#Editor' />
            <TabItemDirective header={headerText[1]} content='#MarkdownPreviewer' />
        </TabItemsDirective>
    </TabComponent>)}

    </div>
    </>
  )
}

export default App
