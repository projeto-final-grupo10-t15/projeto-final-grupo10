import { styled } from "styled-components";

export const UpdateForm = styled.main`
    display:flex;
    flex-direction:column;
    gap: 1rem;

    h2{
        font-size:1rem;
        font-weight:500;
        color:var(--grey-1)
    }
    .info_announce{
       font-size: 0.875rem; 
       background-color: white;
       color: #000;
       font-weight:500;
       padding: 0;
    }
    form{
        display:flex;
        flex-direction:column;
        height: 80%;
        gap: 0.8rem;
        .row__container{
            display:flex;
            flex-direction:column;
            gap: 0.8rem;

            .row__inputs{
                display:flex;
                gap: 1rem;
            }
        }
        .btn__box{
            display:flex;
            gap: 1rem;
            .deleteBtn{
                padding:12px 24px;
                height:48px;
                background-color: var(--grey6);
                border: none;
                color: var(--grey2)
            }
            .deleteBtn:hover{
                background-color: var(--alert1);
                color:var(--whiteFixed)

            }
            .editBtn{
                padding:12px 24px;
                height:48px;
                background-color: var(--brand3);
                color:var(--brand4);
                border: none;
            }
            .editBtn:hover{
                background-color: var(--brand1);
                color: var(--whiteFixed);
            }
        }
    }


`