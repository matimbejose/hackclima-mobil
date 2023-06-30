import styled from 'styled-components/native'



export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const Background = styled.View`
flex: 1;
background-color: black;
`

export const ImageLogo = styled.Image`
width: 237px;
height: 200px;
margin-top: 47px;
margin-left: 2px;
`

export const InputTexto = styled.TextInput`
height: 50px;
width: 360px;
margin-top: 10px;
border-radius: 10px;
border-width: 1px;
background-color: #FFF;
padding: 5px;
`

export const SubmitButton = styled.TouchableOpacity`
background-color: #FF0000;
align-items: center;
margin-top: 25px;
height: 50px;
justify-content: center;
width: 350px;
border-radius: 50px;
`

export const CreateAccountButton = styled.TouchableOpacity`

`

export const SubmitText = styled.Text`
color: #FFF;
font-size: 18px;
`
export const CreateNewAccount = styled.Text`
color: #FF0000;

`

export const CreateAccoutView = styled.View`
flex-direction:row;
margin-top: 10px;

`

export const Form = styled.View`
display: flex;
justify-content: flex-start;
`

export const TextForm = styled.Text`
color: #FFF;
margin: 5px;
`