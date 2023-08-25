import { styled } from "styled-components";

export const StyledInput = styled.fieldset `
    gap:0.5rem;
    display:flex;
    flex-direction:column;
    width:100%;
    border:none;
    
    
    label{
        font-size:0.875rem;
        font-family: 'Inter', sans-serif;
        font-weight:500;
        line-height:16.94px;
        color:var(--grey1)
        
    }
    input{
        border-radius:4px;
        border:2px solid var(--grey7);
        width:80%;
        max-width:315px;
        height:48px;
        padding:0.3rem;
        
       
    }
`