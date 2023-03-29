// import FileSaver from 'file-saver'; //I think this allows download capabilities
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
// import { Document, Page, Text } from '@react-pdf/renderer'; //This is for if using @react-pdf/renderer, but that includes more configurations to vite.config.js and installing to package.json using npm install @react-pdf/renderer
import { surpriseMePrompts } from '../constants'

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
  const randomPrompt = surpriseMePrompts[randomIndex]

  //so don't get same prompt a few times in a row
  if (randomPrompt === prompt) return getRandomPrompt(prompt)

  return randomPrompt
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`); //this implements function
}

export const downloadPDF = (_id, prompt, industry, productsAndServices, keyMarketSegments, competitiveAnalysis) => {
  const doc = new jsPDF();
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(`Market Research Report for the ${prompt} Industry`, 15, 15);

  const data = [
    ['Industry', industry],
    ['Products and Services', productsAndServices],
    ['Key Market Segments', keyMarketSegments],
    ['Competitive Analysis', competitiveAnalysis]
  ];

  doc.autoTable({
    startY: 35,
    headStyles: {
      fillColor: '#f2f2f2',
      textColor: '#222328',
      fontStyle: 'bold'
    },
    bodyStyles: {
      textColor: '#666e75'
    },
    head: [['Section', 'Content']],
    body: data
  });

  doc.save(`market-research-report-${_id}.pdf`);
};

// below function using async - *What's better?
// export async function downloadPDF(_id) {
//   console.log('clicked')
//   const doc = new jsPDF();
//   doc.text('Hello, World!', 10, 10);
//   const pdfBlob = doc.output('blob');
//   saveAs(pdfBlob, `market-research-report-${_id}.pdf`);
// };


//Below is for if using @react-pdf/renderer, but that includes more configurations to vite.config.js and installing to package.json using npm install @react-pdf/renderer and importing above

// export const downloadPDF = (_id, prompt, industry, productsAndServices, keyMarketSegments, competitiveAnalysis) => {
//   const MyDocument = () => (
//     <Document>
//       <Page>
//         <div className="border border-gray-300 px-5 pt-2 pb-5 mt-4 max-w-[1200px] rounded-sm">
//           <br/>
//           <Text className="text-center font-extrabold text-[#222328] text-[32px]">Market Research Report for the {prompt} Industry</Text>
//           <br/>
//           <Text className="font-extrabold text-[#222328] text-[24px] mb-2">Industry</Text>
//           <Text className="mt-2 text-[#666e75] text-[16px]" style={{ whiteSpace: "pre-wrap" }}>{industry}</Text>
//           <br/>
//           <Text className="font-extrabold text-[#222328] text-[24px] mb-2">Products and Services</Text>
//           <Text className="mt-2 text-[#666e75] text-[16px]" style={{ whiteSpace: "pre-wrap" }}>{productsAndServices}</Text>
//           <br/>
//           <Text className="font-extrabold text-[#222328] text-[24px] mb-2">Key Market Segments</Text>
//           <Text className="mt-2 text-[#666e75] text-[16px]" style={{ whiteSpace: "pre-wrap" }}>{keyMarketSegments}</Text>
//           <br/>
//           <Text className="font-extrabold text-[#222328] text-[24px] mb-2">Competitive Analysis</Text>
//           <Text className="mt-2 text-[#666e75] text-[16px]" style={{ whiteSpace: "pre-wrap" }}>{competitiveAnalysis}</Text>
//         </div>
//       </Page>
//     </Document>
//   );

//   const pdfBlob = <MyDocument />.toBlob();
//   saveAs(pdfBlob, `market-research-report-${_id}.pdf`);
// };