import React from 'react'

function Editor({markdownTxt, handleTextInput })
{
  const onInputChange = (e) =>
    {
      e.preventDefault()
      handleTextInput(e.target.value)
    }

  return (
    <div id='Editor' className="input-editor ">
      <textarea
        spellCheck="false"
        className="markdown-input"
        placeholder="Type your text here"

        value={markdownTxt}
        onChange={onInputChange}
      ></textarea>
    </div>
  )
}

export default Editor
