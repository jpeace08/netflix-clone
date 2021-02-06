import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    border-bottom: 8px solid #222;
    padding: 165px 45px;
`;
export const Title = styled.h1`
    max-width: 650px;
    font-size: 50px;
    font-weight: 500;
    margin: auto;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;
export const SubTitle = styled.h2`
    max-width: 650px;
    font-size: 26px;
    font-weight: normal;
    margin: 16px auto;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;