import styled from "@emotion/styled";

export const HeaderStyle = styled.header`
    position:absolute;
    top:0;
    left:0;
    z-index:999;
    width:100%;

    button{
        color:white;
        background:transparent;
    }

    .name{
        font-size:24px;
        color:white;
        font-weight:400;
    }

    .menu-icon{
        position:relative;
        z-index:10000;
        button {
            color:${props=> props.open ? 'var(--black)' : "white"}!important;
        }
    }

    .menu{
        position:absolute;
        top:0;
        right:0;
        width:100%;
        max-width:400px;
        background:white;
        padding-top:${props=> props.open ? '50px' : "0"};
        overflow:hidden;
        max-height:${props=> props.open ? '250px' : "0"};
        z-index:99;
        transition: all 500ms cubic-bezier(0.190, 1.000, 0.220, 1.000);

        a,button{
           text-align:left;
           display:block;
           width:100%;
           border-top:1px solid #e4e4e4;     
           line-height:40px;
           color:var(--black);
           text-decoration:none;
           font-weight:400;
        }

        @media all and (min-width:998px){
            position:relative;
            background:transparent;
            flex:0 0 60%;
            padding-top:0;
            max-width:100%;
            max-height: 100px;
        
            .row{
                justify-content:flex-end;
                padding:0;
            }

            a,button{
                width:auto;
                color:white;
                border:none;
            }

            button{
                font-size:40px;
            }
        }
    }
`;