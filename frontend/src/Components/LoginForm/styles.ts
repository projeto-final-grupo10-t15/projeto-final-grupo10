import { styled } from "styled-components";

export const StyledLoginForm = styled.main `
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100%;
    background-color: var(--grey8);
    .login__container{
        display:flex;
        padding:3rem;
        flex-direction:column;
        gap: 1.5rem;
        border-radius:4px;
        background-color:var(--grey10);
        width:80%;
        max-width: 412px;
        max-height:542px;
    }
        h2{
            font-family: 'Lexend', sans-serif;
            font-size: 1.5rem;
            font-weight: 500;
            line-height:1.875rem;
        }
        form{
            width:100%;
            display:flex;
            flex-direction:column;
            gap: 1.5rem;
            padding: 1rem;
            
    }

    p{
        font-family: 'Inter', sans-serif;
        color: var(--grey2);
        font-weight:500;
        font-size:0.875rem;
        text-align:end;
        padding-bottom:15px;
    }
    .button__container{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:20px;
        a{
            width:100%;
        }
        p{
            font-family: 'Inter', sans-serif;
            color: var(--grey2);
            font-weight:500;
            font-size:0.875rem;   
        }
        button{
            width:100%;
            height:48px;
            border-radius:4px;
            max-width:315px;
            font-size:1rem;
            font-family: 'Inter', sans-serif;
            
        }
        .submitBtn{
            width:100%;
            height:48px;
            border-radius:4px;
            border:none;
            background-color:var(--brand1);
            color:var(--whiteFixed);
            
        }
        .submitBtn:hover{
            background-color:var(--brand2)
        }
        .registerBtn{
            border:2px solid var(--grey4);
            background-color:var(--whiteFixed);
            font-weight:600;
            
        }
        .registerBtn:hover{
            background-color:var(--grey1);
            color:var(--grey10);
            border:none;
           
        }
    }
   
`