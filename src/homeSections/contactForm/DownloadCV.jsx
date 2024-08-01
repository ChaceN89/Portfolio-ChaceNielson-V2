/**
 * Downlaod Resume and Cover Letter and can add mor buttons if need be
 */
import React from 'react'
import DownloadButton from '../../components/buttons/GeneralButton';
import {openPdf} from '../../functions/utils'
import MyButton from '../../components/buttons/MyButton'

function DownloadCV() {
	// functions to open pdfs in a separate

	const openResume = () => openPdf("Chace Nielson - Resume.pdf");
  const openCoverLetter = () => openPdf("Chace Nielson - Cover Letter.pdf");

	return (
		<div className='flex-wrap justify-start space-x-10'>
			<DownloadButton onClick={openResume} >Resume</DownloadButton>
			<DownloadButton onClick={openCoverLetter}>Cover Letter</DownloadButton>

      <MyButton onClick={openResume}>Resume</MyButton>
			<MyButton onClick={openCoverLetter}>Cover Letter</MyButton>
		</div>
	)
}

export default DownloadCV