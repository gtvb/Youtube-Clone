import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
  height: 15%;
  background: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`

export const VideosWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 85%;
`

export const NoResults = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 50%;

  > i {
    color: #ccc
  }

  > h3 {
    margin: 8px;
    color: #ccc;
  }
`