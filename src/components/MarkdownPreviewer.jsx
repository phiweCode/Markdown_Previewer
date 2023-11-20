import React from 'react'

import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'

//themes
import {
    dark,
    dracula,
    duotoneDark,
    funky,
    materialDark,
    materialLight,
    solarizedlight,
    nord
  } from 'react-syntax-highlighter/dist/esm/styles/prism'
  import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'

//highlighter
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter'

function MarkdownPreviewer({markdownText}) {

  const rehypePlugins = [rehypeRaw, rehypeSlug]
  const remarkPlugins = [remarkGfm, remarkToc]

  return (
    <div id='MarkdownPreviewer' className="markdown w-100 ">
    <Markdown
      remarkPlugins={remarkPlugins}
      rehypePlugins={rehypePlugins}
      children={markdownText}
      components={{

      code(props) {

      const {children, className, node, ...rest} = props
      const match = /language-(\w+)/.exec(className || '')

      SyntaxHighlighter.registerLanguage('jsx', jsx)

      return match ? (
        <SyntaxHighlighter
          {...rest}
          children={String(children).replace(/\n$/, '')}
          style={nord}
          language={match[1]}
          PreTag="div"
        />
      ) : (
        <code {...rest} className={className} style={nord}>
          {children}
        </code>
      )
        }
      }}
    />
  </div>
  )
}

export default MarkdownPreviewer
