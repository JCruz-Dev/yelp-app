import { useRef } from 'react'
import { EventForm } from '@PTypes'
import { searchFormProps } from '@PTypes'

const SearchForm = ({ onSubmit, callLazyQuery }: searchFormProps): JSX.Element => {
  const inputRef = useRef(null)
  //State for empty state information
  const handleSubmit = (e: EventForm): void => {
    e.preventDefault()
    if (inputRef.current.value !== '') {
      onSubmit(inputRef.current.value)
      callLazyQuery()
    }
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for food, drinks and much more."
        ref={inputRef}
        className="form__input"
        required
      />
      <button type="submit" className="form__button">
        Search
      </button>
    </form>
  )
}
export default SearchForm
