// import { useState ,useEffect} from "react";
// import {AiFillDelete  } from 'react-icons/ai';
// import "./Searchbar.css";
// import data from './MockdataV2.json';
// import Resultdata from './Resultdata.json'

// export default function Searchbar() {
//   const [value, setValue] = useState("");

//   const[resultArray,setresultArray]=useEffect(Resultdata);

// //i think in future i need to remove anyone of symptomList or symptomListObj
//   const[symptomList,setSymptomList]=useState([]);
// const [symptomListObj, setSymptomListObj] = useState({});  

// const onChange = (event) => {
//     setValue(event.target.value);
//   };


//   const onSelectingListItem= (listItem) =>{
//     setValue(listItem);
//   }




//   const onSearch = (searchTerm) => {
//    // setValue(searchTerm);
//     // our api to fetch the search result
//     const isDuplicate = symptomList.some((item) => item.symptom === searchTerm);
    
//     if (!isDuplicate && searchTerm) {
//       // Create a new dictionary item with the selected symptom and add it to the list
//       const newSymptom = { symptom: searchTerm };
//       setSymptomList([...symptomList, newSymptom]);
      
//     }
// //    console.log(symptomList);

//     const isDuplicate2 = Object.keys(symptomListObj).includes(searchTerm);
    
//     if (!isDuplicate2 && searchTerm) {
//       // Create a new dictionary item with the selected symptom and add it to the list
//       setSymptomListObj({
//         ...symptomListObj,
//         [searchTerm]: { symptom: searchTerm }
  
//     });
//   //  console.log(symptomListObj);  

// }
  
   
   
//   };


//   const removeSymptom = (searchTerm) => {
//     const updatedSymptomList = { ...symptomListObj };
//     delete updatedSymptomList[searchTerm];
//     setSymptomListObj(updatedSymptomList);
//   };






//   useEffect(() => {
//     console.log(symptomList);
//   }, [symptomList]);

//   useEffect(() => {
//     console.log(symptomListObj);
//   }, [symptomListObj]);



//   return (<>
//     <div className="Searchbar">
//       <h1>Search</h1>

//       <div className="search-container">
//         <div className="search-inner">
//           <input className='search-input' type="text" value={value} onChange={onChange} />
//           <button onClick={() => onSearch(value)}> ADD </button>
//         </div>
//         <div className="dropdown">
//           {data
//             .filter((item) => {
//               const searchTerm = value.toLowerCase();
//               const fullName = item.symptoms.toLowerCase();

//               return (
//                 //swapped .startsWith() with .includes() method
//                 searchTerm &&
//                 fullName.includes(searchTerm) &&
//                 fullName !== searchTerm
//               );
//             })
//             .slice(0, 5)
//             .map((item) => (
//               <div
//                 onClick={() => onSelectingListItem(item.symptoms)}
//                 className="dropdown-row"
//                 key={item.symptoms}
//               >
//                 {item.symptoms}
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
    
//     <div>
//         <h2>Symptom List</h2>
//         <ul>
//           {Object.entries(symptomListObj).map(([searchTerm, item], index) => (
//             <li key={index}>
//               {item.symptom}
//               <button className="Remove-btn" onClick={() => removeSymptom(searchTerm)}><AiFillDelete/></button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }
import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import "./Searchbar.css";
import data from "./MockdataV2.json";
import Resultdata from "./Resultdata.json";

export default function Searchbar() {
  const [value, setValue] = useState("");
  const [resultArray, setResultArray] = useState(Resultdata);
  const [symptomListObj, setSymptomListObj] = useState({});
  const [var3, setVar3] = useState([]); // Initialize var3

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSelectingListItem = (listItem) => {
    setValue(listItem);
  };

  const onSearch = (searchTerm) => {
    const isDuplicate = Object.keys(symptomListObj).includes(searchTerm);

    if (!isDuplicate && searchTerm) {
      setSymptomListObj({
        ...symptomListObj,
        [searchTerm]: { symptom: searchTerm },
      });
    }
  };

  const removeSymptom = (searchTerm) => {
    const updatedSymptomList = { ...symptomListObj };
    delete updatedSymptomList[searchTerm];
    setSymptomListObj(updatedSymptomList);
  };

  useEffect(() => {
    // Filter medicines based on selected symptoms and update var3
    const filteredMedicines = [];
    const selectedSymptoms = Object.keys(symptomListObj);

    for (const medicine in resultArray) {
      if (resultArray.hasOwnProperty(medicine)) {
        const symptoms = resultArray[medicine];
        if (symptoms.some((symptom) => selectedSymptoms.includes(symptom))) {
          filteredMedicines.push(medicine);
        }
      }
    }

    setVar3(filteredMedicines);
  }, [symptomListObj, resultArray]);

  useEffect(() => {
    console.log(resultArray);
  }, [resultArray]);

  useEffect(() => {
    console.log(symptomListObj);
  }, [symptomListObj]);

  return (
    <>
      <div className="Searchbar">
        <h1>Search</h1>

        <div className="search-container">
          <div className="search-inner">
            <input
              className="search-input"
              type="text"
              value={value}
              onChange={onChange}
            />
            <button onClick={() => onSearch(value)}> ADD </button>
          </div>
          <div className="dropdown">
            {data
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const fullName = item.symptoms.toLowerCase();

                return (
                  searchTerm &&
                  fullName.includes(searchTerm) &&
                  fullName !== searchTerm
                );
              })
              .slice(0, 5)
              .map((item) => (
                <div
                  onClick={() => onSelectingListItem(item.symptoms)}
                  className="dropdown-row"
                  key={item.symptoms}
                >
                  {item.symptoms}
                </div>
              ))}
          </div>
        </div>
      </div>

      <div>
        <h2>Symptom List</h2>
        <ul>
          {Object.entries(symptomListObj).map(([searchTerm, item], index) => (
            <li key={index}>
              {item.symptom}
              <button
                className="Remove-btn"
                onClick={() => removeSymptom(searchTerm)}
              >
                <AiFillDelete />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Medicine List (var3)</h2>
        <ul>
          {var3.map((medicine, index) => (
            <li key={index}>{medicine}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
