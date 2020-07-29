import React, { ChangeEvent, FormEvent } from 'react'

import { SearchWrapper , SearchBox, SearchButton, YoutubeIcon } from './styles'

interface Props {
  inputValue: string;
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
  handleSubmit(q: string): void;
}

const Search:React.FC<Props> = ({ inputValue, handleChange, handleSubmit }) => {
  return (
    <>
     <YoutubeIcon>
       <i className='fab fa-youtube fa-2x' />
     </YoutubeIcon>

     <SearchWrapper>
       <SearchBox placeholder='Search' value={inputValue} onChange={handleChange} />
       <SearchButton onClick={() => handleSubmit(inputValue)}>
         <i className='fas fa-search' />
       </SearchButton>
     </SearchWrapper>
    </>
  )
}

export default Search



