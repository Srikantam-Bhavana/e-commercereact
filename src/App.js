import "./App.css";
import React,{useState,useEffect} from 'react';


const App=()=> {
    const [fake,setFake] = useState([]);
    console.log(fake);
    useEffect(()=>{
        
        fakestore();

    },[])
    const fakestore=async()=>{
        const response =  await fetch("https://fakestoreapi.com/products");
        
       const jsonData = await response.json();
       setFake(jsonData);
        
        

    }
   
    
    
        return (
            <>
            <h2>
                E store 
            </h2>
            <div className="container"> 
            {fake.map((values)=>{
                return(
                    <>
                    <div className="box">
                   
            <div className="content">
                <h5> {values.title}</h5>
                <img src ={values.image} alt=" "/>
                <p> <b>Product details: </b> {values.description}</p>
                <h4>price : {values.price}</h4>
                
                </div>
           
            
            </div>
                    </>
                )
                
            }
            )}
            
           
            </div>
            </>
        );
    }


export default App;


