import './App.css'
import {useState} from 'react'
import FileUpload from './components/fileUpload'

//window splitter.
import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import Editor from './components/Editor'
import MarkdownPreviewer from './components/MarkdownPreviewer'

//jsx to html
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';

function App() {

  const [markdown, setMarkdown] = useState(``)
  const [isMobile, setMobile] = useState(true)
  let headerText = [{ text: "Editor" }, { text: "Preview" }];

  const handleInput = (e) => setMarkdown(e)

  const handleMarkDownText = (fileText) => setMarkdown(fileText)

  const handleViewClick = (e) => {

    e.preventDefault()





    if (e.target.id == "split-view")
    {
      setMobile(true)
      console.log("split view clicked")
      document.getElementById("split-view").classList.add('active')
      document.getElementById("tab-view").classList.remove('active')
    }else if(e.target.id == "tab-view")
    {
      setMobile(false)
      console.log("tab view clicked")
      document.getElementById("split-view").classList.remove('active')
      document.getElementById("tab-view").classList.add('active')
    }
  }

  return (
    <>

    <div className="row inner-container px-lg-4 py-lg-2 ">

    <div id="header-content">
      <div className='headers'>
      <div id="split-view" className='active btn  bi bi-window-split' onClick={((e)=>handleViewClick(e))}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-window-split" viewBox="0 0 16 16">
          <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
          <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1zM1 13V6h6.5v8H2a1 1 0 0 1-1-1m7.5 1V6H15v7a1 1 0 0 1-1 1z"/>
        </svg>
      </div>
      <div id='tab-view' className='tab-view btn bi bi-window-split' onClick={((e)=>handleViewClick(e))}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-segmented-nav" viewBox="0 0 16 16">
      <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6 3h4V5H6zm9-1V6a1 1 0 0 0-1-1h-3v4h3a1 1 0 0 0 1-1"/>
    </svg>
      </div>
      <div className='file-input'>
        <FileUpload markdownText={handleMarkDownText} />
      </div>
    </div>


    </div>

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

      <div>
        <blockquote className='text-center p-5 text-white'>
         Freecodecamp &copy;2023
        </blockquote>
      </div>
    </div>

    </>)
}

export default App;
