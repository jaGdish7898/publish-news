import './button.css'

export default function Button ( {buttonText , handleOnClick}){



    return(
        <button 
            onClick={handleOnClick} 
            type="submit" 
            className='customButton'
        >
            {buttonText}
        </button>
    )
}