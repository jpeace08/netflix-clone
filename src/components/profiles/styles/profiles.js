import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 80%;

    & *{
        box-sizing: border-box;
    }
`;

export const Title = styled.h1`
    color: white;
    width: 100%;
    text-align: center;
    font-size: 48px;
    font-weight: 500;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
`;

export const Name = styled.p`
    color: #808080;
    font-size: 16px;
    text-overflow: ellipsis;
`;

export const Picture = styled.img`
    width: 100%;
    max-width: 150px;
    border: 3px solid black;
    height: auto;
    cursor: pointer;
`;

export const Item = styled.li`
    max-width: 200px;
    max-height: 200px;
    text-align: center;
    list-style-type: none;
    margin-right: 30px;

    &:last-of-type {
        margin-right: 0px;
    }

    &:hover > ${Picture}{
        border: 3px solid white;
    }

    &:hover > ${Name} {
        font-weight: bold;
        color: white;
    }
`;