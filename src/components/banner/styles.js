import styled from "@emotion/styled";

export const Container = styled.div`
    width:100%;
    height:auto;
    background: transparent url(${props => props.bg}) no-repeat center;
    background-attachment: fixed;
    background-position:bottom center;
    background-size:cover;
    position:relative;
    padding-top:50px;

    .link a{color:white;}

    .shadow-up{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:50%;
        z-index:0;
        background: rgb(0,0,0);
        background: linear-gradient(356deg, rgba(0,0,0,0) 29%, rgba(0,0,0,0.5690651260504201) 100%);
    }
    

    .first-text{
        font-size:24px;
        color:white;
        font-weight:400;
    }

    .content{
        width:260px;
        color:white;

        .wrapper-text{
            position:relative;
            overflow:hidden;
            .blur{
                position:absolute;
                width:100%;
                height:100%;
                background: transparent url(${props => props.bg}) no-repeat center;
                background-attachment: fixed;
                background-position:bottom center;
                background-size:cover;
                filter:blur(10px);
            }
            .text{
                position:relative;
                background:rgba(0,0,0,.4);
            }

            h1{
                font-weight:400;
                font-size:36px;
            }
        }

        .votations {
            button {
                line-height:32px;
                color:white;
                text-aling:center;
            }
            .green{background:var(--green)}
            .orange{background:var(--orange)}
        }

        @media all and (min-width:768px){
            width:368px;
            .votations {
                button {
                    line-height:38px;
                }
            }
        }
        @media all and (min-width:998px){
            width:550px;
            .votations {
                button {
                    line-height:82px;
                    font-size:32px;
                }
            }
        }
    }

    .bar-white{
        background:rgba(255,255,255,.5);
        
        .closing{
            background:rgba(0,0,0,.4);
            flex:1 0 40%;
            text-align:right;
            padding-right:20px;
            color:white;
        }
        .number{
            overflow:hidden;
            position:relative;
            flex:1 0 60%;
            padding-left:20px;

            .arrow{
                width:15px;
                height:15px;
                transform:translate(-50%,-50%) rotate(45deg);
                position:absolute;
                left:0;
                top:50%;
                background:rgba(0,0,0,.4);
            }
        }
    }

   

`