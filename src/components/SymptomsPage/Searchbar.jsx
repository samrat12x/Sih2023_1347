import { useState ,useEffect} from "react";
import "./Searchbar.css";
import data from './MockdataV2.json';


export default function Searchbar() {
  const [value, setValue] = useState("");

//i think in future i need to remove anyone of symptomList or symptomListObj
  const[symptomList,setSymptomList]=useState([]);
const [symptomListObj, setSymptomListObj] = useState({});  

const onChange = (event) => {
    setValue(event.target.value);
  };


  const onSelectingListItem= (listItem) =>{
    setValue(listItem);
  }




  const onSearch = (searchTerm) => {
   // setValue(searchTerm);
    // our api to fetch the search result
    const isDuplicate = symptomList.some((item) => item.symptom === searchTerm);
    
    if (!isDuplicate && searchTerm) {
      // Create a new dictionary item with the selected symptom and add it to the list
      const newSymptom = { symptom: searchTerm };
      setSymptomList([...symptomList, newSymptom]);
      
    }
//    console.log(symptomList);

    const isDuplicate2 = Object.keys(symptomListObj).includes(searchTerm);
    
    if (!isDuplicate2 && searchTerm) {
      // Create a new dictionary item with the selected symptom and add it to the list
      setSymptomListObj({
        ...symptomListObj,
        [searchTerm]: { symptom: searchTerm }
  
    });
  //  console.log(symptomListObj);  

}
  
   
   
  };


  const removeSymptom = (searchTerm) => {
    const updatedSymptomList = { ...symptomListObj };
    delete updatedSymptomList[searchTerm];
    setSymptomListObj(updatedSymptomList);
  };






  useEffect(() => {
    console.log(symptomList);
  }, [symptomList]);

  useEffect(() => {
    console.log(symptomListObj);
  }, [symptomListObj]);



  return (<>
    <div className="Searchbar">
      <h1>Search</h1>

      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> ADD </button>
        </div>
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.symptoms.toLowerCase();

              return (
                //swapped .startsWith() with .includes() method
                searchTerm &&
                fullName.includes(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
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
              <button onClick={() => removeSymptom(searchTerm)}>Remove Symptom</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
