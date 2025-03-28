import './newPrompt.css'
import { useEffect } from 'react'
import { useRef } from 'react'

const NewPrompt = () => {
    const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({behavior: "smooth" });
  },[]);
  return (

    <div className='newPrompt'>
        <div className="endChat" ref={endRef}></div>
        <form className='newForm'>
            <label htmlFor="file">
                <img src="/attachment.png" alt="" />
            </label>
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