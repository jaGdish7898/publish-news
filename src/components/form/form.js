import axios from "axios"
import { useState } from "react"
import Button from "../button/button"
import './form.css'
import Table from "../table/table"
// import


export default function Form (){
    
    const [newsDetail , setNewsDetail] = useState({})
    const [isShowingInputs , setIsShowingInputs] = useState(false)
    const [isShowingTable , setIsShowingTable] = useState(false)
    const [data , setData] = useState([])

    function handleChange ( key,value ) {
        setNewsDetail({...newsDetail , [key] : value})
    }

    async function handleSubmit (event) {
        event.preventDefault();
        axios.post('/wwuihsdfkjsd',newsDetail)
        // on  successful submission of api setIsShowingTable(true) this will show the table
        setIsShowingTable(true)
        // set data to send to table component
        // WILL SET DATA IN FORM OF ARRAY OF OBJECTS
        setData([newsDetail])

        // const res = await axios.get('https://dummyjson.com/products')
        // console.log({res})

    

    }

    function handleClickCreateNewUpdate (){
        setIsShowingInputs(true)
    }


    return(
        <div className="mainWrapper">
            <div className="buttonWrapper">
                <Button 
                    buttonText='Create News Update'
                    handleOnClick = {handleClickCreateNewUpdate}
                />
            </div>

            

        { isShowingInputs=== true &&  <form onSubmit={handleSubmit}>
                <div className="inputWrapper">
                    <input  
                        className="inputText"
                        placeholder="News Update Title " 
                        maxlength="100"
                        onChange={(e) => handleChange( 'newsTitle' ,e.target.value)}
                        required
                    />  
                    <textarea 
                        placeholder="News Update Detail " 
                        rows="5" 
                        cols="50"  
                        style={{marginBottom:7}}  
                        maxlength="500" 
                        onChange={(e) => handleChange( 'newsDescription' ,e.target.value)}
                        required
                    />  
                    <input  
                        className="inputText" 
                        type='date' 
                        onChange={(e) => handleChange( 'publishDate' ,e.target.value)} 
                        required
                    />  
                </div>
                <div className="buttonWrapper">
                    <Button 
                        buttonText='Publish News'
                        handleOnClick = {handleSubmit}
                    />
                </div>
            </form>}

            <div className="tableWrapper">

              { isShowingTable &&  
                <Table
                    data = {data} 
                />
              }
            </div>
            
            



        </div>
    )
}