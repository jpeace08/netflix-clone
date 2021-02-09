import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FooterContainer } from '../containers';
import { Header, Card } from '../components';
import SelectProfileContainer from './profile';
import * as ROUTES from '../constants/routes';

function BrowseContainer({ user, slides, signout }) {
	const [category, setCategory] = useState('series');
	const [slideRows, setSlideRows] = useState([]);
	const [profile, setProfile] = useState({});
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const loadingTimout = setTimeout(() => { setLoading(false) }, 3000);
		return () => {
			clearTimeout(loadingTimout);
		};
	}, [profile.name]);

	useEffect(() => {
		setSlideRows(slides[category]);
	}, [category, slides]);

	const handleSignOut = e => {
		e.preventDefault();
		signout();
	}

	return (
		<>
			{profile.name ? (loading ? <p>Loading...</p> : (
				<>
					<Header src="joker1" dontShowOnSmallViewPort>
						<Header.Frame>
							<Header.Group>
								<Header.Logo
									to={ROUTES.HOME}
									src="/images/icons/logo-netflix.png"
									alt="Netflix logo"
								/>
								<Header.TextLink
									active={category === 'series' ? 'true' : 'false'}
									onClick={() => setCategory('series')}
								>
									Series
								</Header.TextLink>
								<Header.TextLink
									active={category === 'films' ? 'true' : 'false'}
									onClick={() => setCategory('films')}
								>
									Films
								</Header.TextLink>
							</Header.Group>
							<Header.Group>
								<Header.Search
									searchTerm={searchTerm}
									setSearchTerm={setSearchTerm}
								/>
								<Header.Profile>
									<Header.Picture src={profile.photo} />
									<Header.Dropdown>
										<Header.Group>
											<Header.Picture src={profile.photo} />
											<Header.TextLink>
												{profile.name}
											</Header.TextLink>
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
							<Header.PlayButton>
								Play
                        </Header.PlayButton>
						</Header.Feature>
					</Header>
					<Card.Group>
						{slideRows.map(slideItem => (
							<Card key={`${category}-${slideItem.title.toLowerCase()}`}>
								<Card.Title>{slideItem.title}</Card.Title>
								<Card.Entities>
									{slideItem.data.map(item => (
										<Card.Item key={item.docId} item={item}>
											<Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
											<Card.Meta>
												<Card.SubTitle>{item.title}</Card.SubTitle>
												<Card.Text>{item.description}</Card.Text>
											</Card.Meta>
										</Card.Item>
									))}
								</Card.Entities>
								<Card.Feature category={category}>
									
								</Card.Feature>
							</Card>
						))}
					</Card.Group>
				</>
			)) : (
					<SelectProfileContainer user={user} setProfile={setProfile} />
				)}
			<FooterContainer />
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