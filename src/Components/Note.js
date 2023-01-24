import { MdDelete } from 'react-icons/md'

const Note = () => {
  return (
    <div className='note'>
      <span>hello thhi is</span>
      <div className='note-footer'>
        <small>small name is name also</small>
        <MdDelete className='delete-icon' size='1.3rem' />
      </div>
    </div>
  )
}

export default Note
