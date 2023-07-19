import styled from "styled-components";

interface InputProps{
    $marginTop:string;
}

export const InputBox = styled.div<InputProps>`
  position: relative;
  margin-top: ${props => props.$marginTop};
  width: 430px;
  border: 2px solid rgba(128, 152, 249, 0.50);
  background: rgba(128, 152, 249, 0.10);
  border-radius: 10px;
  padding: 10px;
  

  @media screen and (max-width: 500px){
    width: 80%;
  }

  @media screen and (min-width: 500px) and (max-width: 900px){
    width: 400px;
  }

  @media screen and (min-width: 900px) and (max-width: 1200px){
    width: 350px;
  }
`

export const InputElement = styled.input`
  width: 100%;
  padding: 10px 0 10px 40px;
  border: none;
  outline: none;
  border-radius: 10px;
  background: none;
  &::-webkit-input-placeholder{
    color: rgba(45, 49, 166, 0.20);
    font-family: 'Inter', sans-serif;
  }
`

export const InputIconBox = styled.div`
  position:absolute;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`
