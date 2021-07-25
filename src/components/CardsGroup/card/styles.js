import styled from "@emotion/styled";


export const Container = styled.div`
    height:300px;
    background:#e4e4e4 url(${props=> props.bg}) no-repeat;
    background-position:center;
    background-size:cover;
    position:relative;

    
    .text{
        flex:1 0 50%;
        color:white;

        .description{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* number of lines to show */
            -webkit-box-orient: vertical;
        }

        .btns-vote{
            text-align:right;
        }

    }

    .sombra{
        position:absolute;
        bottom:0;
        left:0;
        height:100%;
        width:100%;
        background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0,0,0,0) 29%, rgba(0,0,0,0.5690651260504201) 100%);
    }

    .thumb{
        flex:0 0 30px;
        height:25px;
        color:white;
        background:${props=> 
            props.ranges.green > props.ranges.orange ? 
            'var(--green-t)':'var(--orange-t)'
        };
    }

    .vote-green,
    .vote-orange
    {
        color:white;
        background-color:var(--green-t);
        width:32px;
        height:32px;
        margin: 2px 4px;
        text-align:center;
        padding:0;
    }
    .vote-orange{ background-color:var(--orange-t);}

    .button-vote{
        flex:0 0 120px;
        margin-left:10px;
        border:2px solid white;
        color:white;
        background:rgba(0,0,0,.6);
        color:white;
        line-height:38px;
        &:hover{
            background:rgba(0,0,0,1);
        }
    }

    .range-votations{
        color:white;
        .green{
            flex: 1 0 ${props=> props.ranges.green}%;
            background: var(--green-t);
        }
        .orange{
            flex: 1 0 ${props=> props.ranges.orange}%;
            background:var(--orange-t);
            text-align:right;
        }
    }

    @media all and (min-width:768px){
        height: ${props => props.grid ? '300px':'auto'};
        background-size:${props => props.grid ? 'cover':'180px auto'};
        background-position:${props => props.grid ? 'center':'left center'};

        .sombra{
            background: rgb(0,0,0);
            background: ${props => props.grid ? 
                'linear-gradient(180deg, rgba(0,0,0,0) 29%, rgba(0,0,0,0.5690651260504201) 100%);':
                'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(110,110,110,0.4962359943977591) 24%, rgba(147,147,147,0.5606617647058824) 47%, rgba(176,176,176,1) 74%, rgba(0,0,0,0.5690651260504201) 100%)'
            };
        }

        .text{
            .btns-vote{
                flex:  ${props => props.grid ? '1 0 100%':'0 0 250px'};
                padding-top:  ${props => props.grid ? '0':'15px'};
            }
            .text-area{
                flex:  ${props => props.grid ? '1 0 100%':'1 0 50%'};
                padding:  ${props => props.grid ? '0':'15px 0 10px 150px'};
            }
        }
    }

`