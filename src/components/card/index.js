import React, { useState, useContext, createContext } from 'react';
import { Container, Content, Entities, Feature, FeatureClose, FeatureText, FeatureTitle, Group, Image, Item, Maturity, Meta, SubTitle, Text, Title } from './styles/card';

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
   const [showFeature, setShowFeature] = useState(false);
   const [itemFeature, setItemFeature] = useState({});

   return (
         <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
            <Container {...restProps}>{children}</Container>
         </FeatureContext.Provider> 
   );
}

Card.Group = function CardGroup({ children, ...restProps }) {
   return <Group {...restProps}>{ children}</Group>
}

Card.Feature = function CardFeature({ category, children, ...restProps }) {
   const { itemFeature, showFeature, setShowFeature } = useContext(FeatureContext);

   return showFeature ? (
      <Feature
         {...restProps}
         src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
         <Content>
            <FeatureTitle>{itemFeature.title}</FeatureTitle>
            <FeatureText>{itemFeature.description}</FeatureText>
            <FeatureClose onClick={() => setShowFeature(false)}>
               <img src="/images/icons/close.png" alt="Close" />
            </FeatureClose>
         </Content>
      </Feature>
   ) : null;
}

Card.Entities = function CardEntities({ children, ...restProps }) {
   return <Entities {...restProps}>{children}</Entities>
}

Card.Title = function CardTitle({ children, ...restProps }) {
   return <Title {...restProps}>{children}</Title>
}

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
   return <SubTitle {...restProps}>{children}</SubTitle>
}

Card.Text = function CardText({ children, ...restProps }) {
   return <Text {...restProps}>{children}</Text>
}

Card.Meta = function CardMeta({ children, ...restProps }) {
   return <Meta {...restProps}>{children}</Meta>
}

Card.Item = function CardItem({ item, children, ...restProps }) {
   const {setShowFeature, setItemFeature} = useContext(FeatureContext);
   return (
      <Item
         {...restProps}
         onClick={() => {
            setItemFeature(item);
            setShowFeature(true);
         }}
      >
         {children}
      </Item>
   )
}

Card.Image = function CardImage({ ...restProps }) {
   return <Image {...restProps} />
}



