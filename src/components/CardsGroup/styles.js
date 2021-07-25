import styled from "@emotion/styled";

export const Container = styled.div`
    width:100%;

    .title{
        font-size:24px;
    }

    .row-cards{
        overflow: auto hidden;

        .track-cards{
            display:flex;
            flex-flow:row wrap;
            justify-content:flex-start;
            align-items:center;
            width:auto;
            min-width:${props=> props.mw}px;

            .cont-card{
                flex: 0 0 300px;
                margin-right:10px;
            }

            @media all and (min-width:768px){
                min-width:100%;
                display:grid;
                grid-template-columns: ${props => props.grid ? 'auto auto' : 'auto'};
                grid-gap:15px;

                .cont-card{
                    margin:0;
                }
            }

            @media all and (min-width:998px){
                grid-template-columns: ${props => props.grid ? 'auto auto auto' : 'auto'};
                grid-gap:20px;
            }
        }
    }

`