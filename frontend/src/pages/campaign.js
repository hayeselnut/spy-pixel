import React from 'react';
import { useParams } from 'react-router-dom';
import { Accordion, Container, Header, Statistic, Table } from 'semantic-ui-react';
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

  const uniqueEmails = campaign.logs
    .map(log => log.email)
    .filter((email, idx, arr) => arr.indexOf(email) === idx)
    .filter(email => email !== "");

  return (
    <Container style={{paddingTop: '4rem'}}>
      <BackToHomeButton />
      <Header as='h1'><span style={{fontWeight: "normal"}}>Details for campaign </span>{campaignId}</Header>

      <Statistic.Group>
        <Statistic>
          <Statistic.Value>{campaign.logs.length}</Statistic.Value>
          <Statistic.Label>Total Views</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{uniqueEmails.length}</Statistic.Value>
          <Statistic.Label>Unique Views</Statistic.Label>
        </Statistic>
      </Statistic.Group>

      {uniqueEmails.length > 0 &&
        <>
          <Header as='h2'>Views per recipient</Header>
            <Table compact celled striped singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Recipient</Table.HeaderCell>
                <Table.HeaderCell>Number of views</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {uniqueEmails.map((email) => (
                <Table.Row key={email}>
                  <Table.Cell>{email}</Table.Cell>
                  <Table.Cell>{campaign.logs.filter(log => log.email === email).length}</Table.Cell>
                </Table.Row>))
              }
            </Table.Body>
          </Table>
        </>
      }

      <Header as='h2'>Logs</Header>
      <Accordion styled fluid exclusive={false} panels={panels} />
      <div style={{height: "10rem"}} />
    </Container>
  )
}

export default CampaignPage;
