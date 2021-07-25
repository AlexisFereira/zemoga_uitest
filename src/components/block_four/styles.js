import styled from "@emotion/styled";

export const Container = styled.div`
    width:100%;

    background:#e4e4e4 url(${props=> props.bg}) no-repeat;
    background-position:center;
    background-size:cover;


    button {
        border:2px solid var(--black);
        line-height:  48px; 
        font-size:18px; 
        width:279px;
        margin:auto;
        background:transparent;
    }  
`