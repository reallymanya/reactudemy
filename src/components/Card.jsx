

function Card({title = "Default", buttontext = "Check it out",imageurl}) {

  return (
    <>
      
      <div className = 'max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow'>
        <img className = 'w-full h-58 object-cover' src = {imageurl} alt = "Sample Image"/>
      <div className='p-4'>
        <h2 className = 'text-lg font-semibold text-blue-800' >{title}</h2>
        <p className = 'mt-2 text-gray-600 text-sm text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum numquam provident quo quas, eligendi cupiditate!</p>
        <button className='mt-4 px-4 bg-blue-600 rounded-lg text-white py-2 hover:bg-blue-700'>{buttontext}</button>
      </div>
      </div>
    </>
  )
}

export default Card