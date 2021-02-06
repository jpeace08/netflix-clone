import React from 'react';
import { OptForm, Feature } from '../components';
import { FaqsContainer, FooterContainer, JumbotronContainer } from '../containers';
import HeaderContainer from '../containers/header';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited films, TV programmes and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel at anytime.
                    </Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button>Try it now</OptForm.Button>
                    </OptForm>
                    <OptForm.Text>
                        Ready to watch? Enter your email to create or restart your membership
                    </OptForm.Text>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
};
