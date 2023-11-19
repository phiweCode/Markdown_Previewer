import React, {useState} from 'react'

function FileUpload({markdownText}) {
  const [formatError, setFormatError] = useState(true)

  const handleFileChange = (event) => {
    const file = event.target.files[0]

    if (file && file.name.endsWith('.md')) {
      const reader = new FileReader()

      reader.onload = (e) => {
        const fileContent = e.target.result;
        console.log('File content', fileContent)
        markdownText(fileContent)
      }

      reader.readAsText(file)
    } else {
      setFormatError(true)
    }
  }

  return (
    <>
      <div className="input-group input-group-sm text-bg-dark">
        <label className="input-group-text text-bg-dark " htmlFor="inputGroupFile01">Upload Your Markdown file</label>
        <input type="file" className="form-control bg-success" id="inputGroupFile01"  accept='.md' onChange={handleFileChange}/>
      </div>

      {formatError ? (<div
        className="toast align-items-center text-bg-primary border-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body ">Hello, world! This is a toast message.</div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>):''}


    </>
  )
}

export default FileUpload;
