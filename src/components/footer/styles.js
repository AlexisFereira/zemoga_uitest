import styled from "@emotion/styled";

export const Container = styled.div`
    width:100%;

    .container-lg{
        border-top:2px dashed var(--black);
    }

    .links{
        flex:1 0 60%;
        
        a{
            display:block;
            padding: 0;
            margin-bottom:5px;
            color:var(--black);
            text-decoration:none;

            @media all and (min-width:768px){
                width:auto;
                padding: 0 15px 0 0;
                flex:0 0 auto;
            }
        }
    }
    .social{
        flex:0 0 80px;
        text-align:right;
        @media all and (min-width:768px){
            flex: 0 0 200px;

            button{
                background:transparent;
                padding:10px;
                margin-left:5px;
            }
        }
    }
`