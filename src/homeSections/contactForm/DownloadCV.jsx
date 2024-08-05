/**
 * Downlaod Resume and Cover Letter and can add mor buttons if need be
 */
import React from 'react'
import {openPdf} from '../../functions/utils'

import ThinButton from '../../components/buttons/ThinButton'

function DownloadCV() {
	// functions to open pdfs in a separate

	const openResume = () => openPdf("Chace Nielson - Resume.pdf");
  const openCoverLetter = () => openPdf("Chace Nielson - Cover Letter.pdf");

	return (
		<div className='flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-6'>
      <ThinButton onClick={openResume}>Resume</ThinButton>
      <ThinButton onClick={openCoverLetter}>Cover Letter</ThinButton>
		</div>
	)
}

export default DownloadCV