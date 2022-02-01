import styled from "styled-components";

export const Head = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    margin: 20px;

    a{
        text-transform: uppercase;
        margin: 10px;
        text-decoration: none;
  
    &:hover {
        cursor: pointer;
        opacity: 0.7;
        background: white;
    }
    }  
`

export const Container = styled.div`
    width: 100%;
    height: 80px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;

input{
    padding: 1rem 2rem;
    font-size: 1.25rem;
    margin: 1rem 0;
    }
`
