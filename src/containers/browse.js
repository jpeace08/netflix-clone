import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Header } from '../components';
import SelectProfileContainer from './profile';
import * as ROUTES from '../constants/routes';

function BrowseContainer({ user, slides, signout }) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const { series, films } = slides;
    console.log(profile);
    useEffect(() => {
        const loadingTimout = setTimeout(() => { setLoading(false)}, 3000);
        return () => {
            clearTimeout(loadingTimout);
        };
    }, [profile.name]);

    const handleSignOut = e => {
        e.preventDefault();
        signout();
    }

    return (
        <>
            {profile.name ? (loading ? <p>Loading...</p> : (
                <Header src="joker1" dontShowOnSmallViewPort>
                    <Header.Frame>
                        <Header.Group>
                            <Header.Logo
                                to={ROUTES.HOME}
                                src="/images/icons/logo-netflix.png"
                                alt="Netflix logo"
                            />
                            <Header.TextLink>Series</Header.TextLink>
                            <Header.TextLink>Films</Header.TextLink>
                        </Header.Group>
                        <Header.Group>
                            <Header.Profile>
                                <Header.Picture src={profile.photo}  />
                                <Header.Dropdown>
                                    <Header.Group>
                                        <Header.Picture src={profile.photo}  />
                                        <Header.TextLink>{profile.name}</Header.TextLink>
                                    </Header.Group>
                                    <Header.Group>
                                        <Header.TextLink onClick={handleSignOut}>
                                            Sign out
                                        </Header.TextLink>
                                    </Header.Group>
                                </Header.Dropdown>
                            </Header.Profile>
                        </Header.Group>
                    </Header.Frame>
                    <Header.Feature>
                        <Header.FeatureCallOut>
                            Watch Joker Now
                        </Header.FeatureCallOut>
                        <Header.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus excepturi omnis nam tempora ipsam quia! Voluptatem dolorem consequuntur iure dolores enim, magnam, odio aut quisquam possimus quis placeat impedit?
                        </Header.Text>
                    </Header.Feature>
                </Header>
            )) : (
                <SelectProfileContainer user={user} setProfile={setProfile} />
            )}
        </>
    );
}

const mapState = ({ auth }) => ({
    user: auth.user,
});

const mapDispatch = dispatch => ({
    signout: dispatch.auth.signout,
})

export default connect(mapState, mapDispatch)(BrowseContainer);