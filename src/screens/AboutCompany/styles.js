import styled from "styled-components";


export const Container = styled.View`
flex: 1;
background-color: #FFF;
justify-content: center;
align-items: center;
`
export const Content = styled.ScrollView`
background-color: #FFF;
`


export const Texto = styled.Text`
font-size: 15px;
margin: 10px;
`


export const ImageCompany = styled.Image.attrs({
    objectFit: 'cover',
})`
width: 350.7px; 
height: 192px; 
margin:10px;
`

export const ImageContainer = styled.View`
`

export const CatalogText = styled.Text`
color: #000;
font-size: 16px;
padding-left: 10px;
font-weight: bold;
`

export const ButtonView = styled.View`
justify-content: center;
align-items: center;
padding: 10px;
`