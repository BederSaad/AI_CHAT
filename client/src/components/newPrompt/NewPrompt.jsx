import './newPrompt.css'
import { useEffect } from 'react'
import { useRef } from 'react'
import Upload from '../upload/Upload';

const NewPrompt = () => {
    const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({behavior: "smooth" });
  },[]);
  return (

    <div className='newPrompt'>
        <div className="endChat" ref={endRef}></div>
        <form className='newForm'>
            <Upload/>
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" placeholder='Ask Anything ...' />
        <button>
            <img src="/arrow.png" alt="" />
        </button>
        </form>
    </div>
  )
}

export default NewPrompt;