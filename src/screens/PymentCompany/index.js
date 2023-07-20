import React from 'react';
import { Alert  } from 'react-native';
import { Container,SelectPlanViewWeek,SelectPlanButtonWeek,WeekText,WeekPriceText,TypeCurrentText,GroupText,SelectPlanViewMoth,SelectPlanButtonMoth,MothText,MothPriceText,TypeCurrentMothText,SelectPlanViewYear,SelectPlanButtonYear,ScrollContainer} from './styles';

export default function PymentCompany() {

  function ConfirmPyment() {
    Alert.alert(
        'Cuidado Atenção!',
        `Pegar  o valor de 100MT para Edinte Inc.`,
        [
          {
            text: 'Cancelar',
            style: 'Confirmar'
          }, {
            text: 'Continuar',
          
          }
        ]
      )
}

 return (
    <Container>

      <ScrollContainer>

      <SelectPlanViewWeek onPress={ ConfirmPyment }>
        <SelectPlanButtonWeek>
          <WeekText>Semanal</WeekText>
          <GroupText>
          <WeekPriceText>100</WeekPriceText>
          <TypeCurrentText> Mt</TypeCurrentText>
          </GroupText>
        </SelectPlanButtonWeek>
      </SelectPlanViewWeek>

      <SelectPlanViewMoth>
        <SelectPlanButtonMoth>
          <MothText>Mensal</MothText>
          <GroupText>
          <MothPriceText>100</MothPriceText>
          <TypeCurrentMothText>Mt</TypeCurrentMothText>
          </GroupText>
        </SelectPlanButtonMoth>
      </SelectPlanViewMoth>


      <SelectPlanViewYear>
        <SelectPlanButtonYear>
          <MothText>Anual</MothText>
          <GroupText>
          <MothPriceText>100</MothPriceText>
          <TypeCurrentMothText> Mt</TypeCurrentMothText>
          </GroupText>
        </SelectPlanButtonYear>
      </SelectPlanViewYear>


      </ScrollContainer>


     
        
    </Container>
  );
}