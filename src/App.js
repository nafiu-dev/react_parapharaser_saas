import React, {useState} from 'react'

import Api from './Apis/Api'

const App = () => {
    const [loadin, setLoading] = useState(true)
    const [input, setinput] = useState("")
    const [similarity, Setsimilarity] = useState(0)
    const [result, SetResult] = useState("")

    
    const handleClick = async input => {
        setLoading(true)
        const res = await Api(input)
        
        setLoading(false)
        SetResult(res.output) 
        Setsimilarity(res.similarity) 
 
    }


    return (
        <div className='container'>
            <div className="text_box">
                <textarea onChange={e => setinput(e.target.value)} >{input}</textarea>
                { 
                    loadin ? 
                    ( <textarea class="loading" disabled ></textarea>) 
                    :
                    (
                        <textarea value={result}>{result}</textarea>
                    )
                }
            </div>
            <div className="button_box">
                <button onClick={() => {handleClick(input)}}>Paraphrase</button>
                {similarity > 0 ? (<p>similarity: <span>{similarity}</span></p>): null}
            </div>
        </div>
    )
}

export default App