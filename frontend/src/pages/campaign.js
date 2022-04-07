import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Header } from 'semantic-ui-react';

const CampaignPage = ({ campaigns }) => {
  let params = useParams();
  console.log(campaigns);

  return (
    <Container style={{paddingTop: '2rem'}}>
      <Header as='h1'>Campaigns Details for {params.campaignId}</Header>
    </Container>
  )
}

export default CampaignPage;
