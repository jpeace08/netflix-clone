import React from 'react';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';

export default function SelectProfileContainer({ user, setProfile }) {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={`/images/icons/logo-netflix.png`} alt="Logo Netflix"/> 
                </Header.Frame>
            </Header>
            <Profiles>
                <Profiles.Title>
                    Who's watching?
                </Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => setProfile({
                        name: user.displayName,
                        photo: user.photoURL,
                    })}>
                        <Profiles.Picture src={user.photoURL} alt={user.displayName} />
                        <Profiles.Name>{ user.displayName }</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}