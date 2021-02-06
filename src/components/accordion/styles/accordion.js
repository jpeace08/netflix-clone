import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    flex-direction: column;
`;
export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    padding: 70px 45px;
    max-width: 815px;
    margin: auto;
`;
export const Item = styled.div`
    color: white;
    margin-bottom: 10px;
    max-width: 700px;
    width: 100%;
    margin: 0 auto 1px;

    &:nth-of-type(1) {
        margin-top: 3em;
    }

    &:last-of-type{
        margin: auto;
    }
`;

export const Image = styled.img`
    
`;

export const Header = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 26px;
    background-color: #303030;
    padding: 0.8em 1.2em;
    user-select: none;

    ${Image} {
        width: 26px;
        filter: brightness(0) invert(1);

        @media(max-width: 600px) {
            width: 16px;
        }
    }

    @media (max-width: 600px) {
        font-size: 16px;
    }

`;

export const Body = styled.div`
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, .1, 1);
    font-size: 26px;
    font-weight: normal;
    line-height: normal;
    background: #303030;
    padding: .8em 2.2em;
    white-space: pre-wrap;
    user-select: none;

    @media (max-width: 600px){
        font-size: 16px;
        line-height: normal;
    }
`;
export const Frame = styled.div``;
export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    color: white;
    text-align: center;

    @media(max-width: 600px) {
        font-size: 35px;
    }
`;