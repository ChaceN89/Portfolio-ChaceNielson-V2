import React from 'react'
import { openPdf } from '../../functions/utils'

function ExternalLinks({externalLinks}) {
  return (
    
    <div className="flex flex-wrap items-center text-lg">
    {externalLinks.map((link, index) => (
      <React.Fragment key={index}>
        {link.pdf ? (
          <button
            onClick={() => openPdf(link.pdf)}
            className="m-2 text-primary text-opacity-80 hover:text-accent flex items-center"
          >
            {link.icon && <link.icon className="inline-block mr-2" />}
            {link.name}
          </button>
        ) : (
          <a
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="m-2 text-primary text-opacity-80 hover:text-accent flex items-center"
          >
            {link.icon && <link.icon className="inline-block mr-2" />}
            {link.name}
          </a>
        )}
        {index < externalLinks.length - 1 && (
          <span className="text-accent mx-1">•</span>
        )}
      </React.Fragment>
    ))}
  </div>
  )
}

export default ExternalLinks