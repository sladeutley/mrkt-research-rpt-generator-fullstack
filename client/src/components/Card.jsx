import React from 'react'
import { Link } from 'react-router-dom';

import { download } from '../assets';
import { downloadImage } from '../utils';

import './card.css';

const Card = ({ _id, name, prompt, industry, productsAndServices, keyMarketSegments, competitiveAnalysis }) => (
  <div className="relative w-full h-64 rounded-lg shadow-lg overflow-hidden bg-blue-500">
    <Link to={`/report/${_id}`}>
      <div className="absolute inset-0 bg-gray-800 opacity-75 flex items-center justify-center">
        <p className="text-white text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl text-center mb-10 mx-2">Report: The {prompt} Industry</p>
      </div>
    </Link>
    <div className="absolute inset-x-0 bottom-0 h-16 bg-gray-900 opacity-0 transition-opacity duration-500 flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</div>
        <p className="text-white text-sm">{name}</p>
      </div>
      <button type="button" onClick={() => downloadImage(_id, prompt)} className="outline-none bg-transparent border-none">
        <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
      </button>
    </div>
  </div>
);

export default Card


//just gotta get the cards from merging into each other
// const Card = ({ _id, name, prompt, industry, productsAndServices, keyMarketSegments, competitiveAnalysis }) => (
//   <div className="relative w-64 h-64 rounded-lg shadow-lg overflow-hidden bg-blue-500">
//     <div className="absolute inset-0 bg-gray-800 opacity-75 flex items-center justify-center">
//       <p className="text-white text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl text-center mb-10 mx-2">Report: The {prompt} Industry</p>
//     </div>
//     <div className="absolute inset-x-0 bottom-0 h-16 bg-gray-900 opacity-0 transition-opacity duration-500 flex items-center justify-between px-4">
//       <div className="flex items-center gap-2">
//         <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</div>
//         <p className="text-white text-sm">{name}</p>
//       </div>
//       <button type="button" onClick={() => downloadImage(_id, photo)} className="outline-none bg-transparent border-none">
//         <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
//       </button>
//     </div>
//   </div>
// );





// nearly there
// const Card = ({ _id, name, prompt, industry, productsAndServices, keyMarketSegments, competitiveAnalysis }) => (
//   <div className="relative w-64 h-64 rounded-lg shadow-lg overflow-hidden bg-blue-500">
//     <div className="absolute inset-0 bg-gray-800 opacity-75 flex items-center justify-center">
//       <p className="text-white text-center">The {prompt} Industry</p>
//     </div>
//     <div className="absolute inset-x-0 bottom-0 h-16 bg-gray-900 opacity-0 transition-opacity duration-500 flex items-center justify-between px-4">
//       <div className="flex items-center gap-2">
//         <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</div>
//         <p className="text-white text-sm">{name}</p>
//       </div>
//       <button type="button" onClick={() => downloadImage(_id, photo)} className="outline-none bg-transparent border-none">
//         <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
//       </button>
//     </div>
//   </div>
// );




// const Card = ({ _id, name, prompt, industry, productsAndServices, keyMarketSegments, competitiveAnalysis }) => (
//   <div className="relative w-64 h-64 rounded-lg shadow-lg overflow-hidden bg-blue-500">
//     <div className="absolute inset-0 bg-gray-800 opacity-75 flex items-center justify-center">
//       <p className="text-white text-center">{prompt}</p>
//     </div>
//     <div className="absolute inset-x-0 bottom-0 h-16 bg-gray-900 opacity-0 transition-opacity duration-500 flex items-center justify-between px-4">
//       <div className="flex items-center gap-2">
//         <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</div>
//         <p className="text-white text-sm">{name}</p>
//       </div>
//       <button type="button" onClick={() => downloadImage(_id, prompt)} className="outline-none bg-transparent border-none">
//         <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
//       </button>
//     </div>
//     <style jsx>{`
//       .relative:hover .opacity-0 {
//         opacity: 75;
//       }
//     `}</style>
//   </div>
// );



// const Card = ({ _id, name, prompt, industry, productsAndServices, keyMarketSegments, competitiveAnalysis }) => (
//   <div className="relative w-64 h-64 rounded-lg shadow-lg overflow-hidden bg-blue-500">
//     <div className="absolute inset-0 bg-gray-800 opacity-75 flex items-center justify-center">
//       <p className="text-white text-center">{prompt}</p>
//     </div>
//     <div className="absolute inset-x-0 bottom-0 h-16 bg-gray-900 opacity-0 transition-opacity duration-500 flex items-center justify-center">
//       <p className="text-white">{name}</p>
//     </div>
//     <style jsx>{`
//       .relative:hover .opacity-0 {
//         opacity: 75;
//       }
//     `}</style>
//   </div>
// );



// really close
// const Card = ({ _id, name, prompt, industry, productsAndServices, keyMarketSegments, competitiveAnalysis }) => (
//   <div className="relative w-64 h-64 rounded-lg shadow-lg overflow-hidden">
//     <div className="absolute inset-0 bg-gray-800 opacity-0 transition-opacity duration-500 hover:opacity-75 flex items-center justify-center">
//       <p className="text-white text-center">{prompt}</p>
//     </div>
//     <div className="absolute inset-x-0 bottom-0 h-16 bg-gray-900 opacity-75 flex items-center justify-center">
//       <p className="text-white">{name}</p>
//     </div>
//   </div>
// );


// a good start
// const Card = ({ _id, name, prompt, industry, productsAndServices, keyMarketSegments, competitiveAnalysis }) => ( 
//   <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card" style={{ backgroundColor: 'blue', width: '300px', height: '300px' }}>
//     <h3 className="text-white text-sm overflow-y-auto prompt">{prompt} Industry: Market Research Report</h3>
//     <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
//       {/* <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p> */}

//       <div className="mt-5 flex justify-between items-center gap-2">
//         <div className="flex items-center gap-2">
//           <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</div>
//           <p className="text-white text-sm">{name}</p>
//         </div>
//       </div>
//     </div>
//   </div>
// );


// const Card = ({ _id, name, prompt, industry, productsAndServices, keyMarketSegments, competitiveAnalysis }) => ( //this is connected to what we're getting on renderCards function in Home component
//   // <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card style={{ backgroundColor: 'blue', width: '300px', height: '300px' }}">
//   <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card style={{ backgroundColor: 'blue', width: '300px', height: '300px' }}">
//     {/* <img
//       className="w-full h-auto object-cover rounded-xl"
//       src={photo}
//       alt={prompt}
//     /> */}
//     <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
//       <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

//       <div className="mt-5 flex justify-between items-center gap-2">
//         <div className="flex items-center gap-2">
//           <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</div>
//           <p className="text-white text-sm">{name}</p>
//         </div>
//         {/* <button type="button" onClick={() => downloadImage(_id, photo)} className="outline-none bg-transparent border-none">
//           <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
//         </button> */}
//       </div>
//     </div>
//   </div>
// );

//Old Version Below with photo
// const Card = ({ _id, name, prompt, photo }) => ( //this is connected to what we're getting on renderCards function in Home component
//   <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
//     <img
//       className="w-full h-auto object-cover rounded-xl"
//       src={photo}
//       alt={prompt}
//     />
//     <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
//       <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

//       <div className="mt-5 flex justify-between items-center gap-2">
//         <div className="flex items-center gap-2">
//           <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</div>
//           <p className="text-white text-sm">{name}</p>
//         </div>
//         <button type="button" onClick={() => downloadImage(_id, photo)} className="outline-none bg-transparent border-none">
//           <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
//         </button>
//       </div>
//     </div>
//   </div>
// );

// export default Card