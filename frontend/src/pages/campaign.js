import React from 'react';
import { useParams } from 'react-router-dom';
import { Accordion, Container, Header, Icon } from 'semantic-ui-react';
import BackToHomeButton from '../components/back-to-home-button';
import LogCookies from '../components/log-cookies';
import LogHeaders from '../components/log-headers';

const CampaignPage = ({ campaigns }) => {
  const { campaignId } = useParams();
  const [campaign] = campaigns.filter(campaign => campaign.id === campaignId);

  if (!campaign) {
    return (
      <Container style={{paddingTop: '4rem'}}>
        <BackToHomeButton />
        <Header as='h1'>Campaigns {campaignId} not found</Header>
      </Container>
    )
  }

  const panels = campaign.logs.map((log, i) => ({
    key: `panel-${i}`,
    title: `${log.email || ""}${log.email ? " r" : "R"}ead at ${log.timestamp.toDate().toDateString()} ${log.timestamp.toDate().toLocaleTimeString()}`,
    content: { content: <>
      <Header as="h3" content="Headers"/>
      <LogHeaders headers={log.headers} />

      <Header as="h3" content="Cookies"/>
      <LogCookies cookies={log.cookies}/>
    </> }
  }))

  return (
    <Container style={{paddingTop: '4rem'}}>
      <BackToHomeButton />
      <Header as='h1'><span style={{fontWeight: "normal"}}>Details for campaign </span>{campaignId}</Header>
      <Header as='h2'>Logs</Header>
      <Accordion styled fluid exclusive={false} panels={panels} />
    </Container>
  )
}

export default CampaignPage;
