/**
 * Function to open a PDF file located in the 'pdfs' folder within the 'public' folder.
 * @param {string} pdfName - The name of the PDF file to open.
 */
export const openPdf = (pdfName) => {
  const fileUrl = `${process.env.PUBLIC_URL}/pdfs/${pdfName}`;
  window.open(fileUrl, '_blank');
};



/**
 * 
 * @param {*} array returns a shuffled array (randomly shuffled)
 */
export default function shuffleArray(array) {
  const newArray = [...array]; // Create a copy of the original array

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
    // Swap newArray[i] and newArray[j]
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray; // Return the shuffled copy
}

