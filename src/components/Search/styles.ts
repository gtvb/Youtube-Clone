import styled from 'styled-components'

export const YoutubeIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 100%;

  > i {
    font-size: 48px;
    color: #f00;
  }
`

export const SearchWrapper = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const SearchBox = styled.input`
  width: 80%;
  height: 32%;
  border: 1px solid #ddd;
  background: #fff;
  padding: 10px;

  &::placeholder {
    color: #aaa;
    font-size: 16px;
  }
`

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center; 
  width: 5%;
  padding: 11px;
  height: 32%;
  border: 0;
  background: #ddd;
  cursor: pointer;

  > i {
    color: #777;
    font-size: 16;
  }
`