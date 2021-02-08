import styled from 'styled-components/macro';
import {Link as ReactRouterLink} from 'react-router-dom';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (
    src ? `../images/misc/${src}.jpg` : `../images/misc/home-bg.jpg`
    )}) top left / cover no-repeat;
    
    @media (max-width: 1100px) {
        ${({dontShowOnSmallViewPort}) => dontShowOnSmallViewPort && `background: none;`}
    }
`;
export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between; 
    align-items: center;

    a{
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;
export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 9px 17px;
    text-decoration: none;
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
        background-color: #f40612;
    }
`;
export const Logo = styled.img`
    width: 108px;
    margin-right: 40px;

    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`;

export const Feature = styled(Container)`
    display: flex;
    flex-direction: column;
    padding: 150px 0 500px 0;
    width: 50%;
    align-items: normal;

    @media (max-width: 1100px) {
        display: none;
    }
`;

export const Text = styled.p`
    color: white;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0,0,0,.45);
    margin: 0
    margin-top: 10px;
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
`;

export const FeatureCallOut = styled.h2`
    color: white; 
    font-size: 50px;
    line-height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0,0,0,.45);
    margin: 0;
`;

export const Link = styled.p`
    cursor: pointer;
    color: white;
    margin-right: 30px;
    font-weight: ${({ active }) => active === true ? '700' : 'normal'};
    box-sizing: border-box;

    &:hover {
        font-weight: bold;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;

export const Picture = styled.button`
    background: url(${({ src }) => src});
    background-size: contain;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
`;

export const Dropdown = styled.div`
    display: none;
    position: absolute;
    top: 32px;
    right: 0px;
    padding: 10px;
    background: black;

    ${Group} {
        margin-bottom: 10px;
        margin-top: 10px;

        &:first-of-type {
            margin-top: 0;
        }

        &:last-of-type {
            margin-bottom: 0;
        }

        ${Link}, ${Picture} {
            cursor: default;
        }
        button {
            margin-right: 10px;
        }
        p{
            margin-top: 0;
            margin-bottom: 0;
            font-size: 12px;
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;

    button {
        cursor: pointer;
    }

    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }
`;

