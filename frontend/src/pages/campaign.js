import React from 'react';
import parser from "ua-parser-js";
import { useParams } from 'react-router-dom';
import { Accordion, Container, Header, Statistic, Table } from 'semantic-ui-react';
import BackToHomeButton from '../components/back-to-home-button';
import LogCookies from '../components/log-cookies';
import LogHeaders from '../components/log-headers';

const countryNames = new Intl.DisplayNames(
  ['en'], {type: 'region'}
)

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

  const uniqueBrowsers = campaign.logs
    .map(log => parser(log.headers["User-Agent"]))
    .map(ua => ua.browser.name)
    .filter((browserName, idx, arr) => arr.indexOf(browserName) === idx)
    .filter(browserName => !!browserName);

  const uniqueDevices = campaign.logs
    .map(log => parser(log.headers["User-Agent"]))
    .map(ua => ua.device.model)
    .filter((device, idx, arr) => arr.indexOf(device) === idx)
    .filter(device => !!device);

  const uniqueOS = campaign.logs
    .map(log => parser(log.headers["User-Agent"]))
    .map(ua => ua.os.name)
    .filter((os, idx, arr) => arr.indexOf(os) === idx)
    .filter(os => !!os);

  const uniqueArchitectures = campaign.logs
    .map(log => parser(log.headers["User-Agent"]))
    .map(ua => ua.cpu.architecture)
    .filter((architecture, idx, arr) => arr.indexOf(architecture) === idx)
    .filter(architecture => !!architecture);

  const uniqueCities = campaign.logs
    .sort((logA, logB) => logA.headers["X-Appengine-Country"] < logB.headers["X-Appengine-Country"] ? -1 : 1)
    .map(log => log.headers["X-Appengine-City"])
    .filter((city, idx, arr) => arr.indexOf(city) === idx)
    .filter(city => !!city && city !== "?")

  const uniqueCountries = campaign.logs
    .map(log => log.headers["X-Appengine-Country"])
    .filter((country, idx, arr) => arr.indexOf(country) === idx)
    .filter(country => country !== "ZZ");

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

      {uniqueBrowsers.length > 0 &&
        <>
          <Header as='h2'>Views by browsers</Header>
            <Table compact celled striped singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Browser</Table.HeaderCell>
                <Table.HeaderCell>Number of views</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {uniqueBrowsers.map((browser) => (
                <Table.Row key={browser}>
                  <Table.Cell>{browser}</Table.Cell>
                  <Table.Cell>{campaign.logs.filter(log => parser(log.headers['User-Agent']).browser.name === browser).length}</Table.Cell>
                </Table.Row>))
              }
            </Table.Body>
          </Table>
        </>
      }

      {uniqueDevices.length > 0 &&
        <>
          <Header as='h2'>Views by devices</Header>
            <Table compact celled striped singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Device</Table.HeaderCell>
                <Table.HeaderCell>Number of views</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {uniqueDevices.map((device) => (
                <Table.Row key={device}>
                  <Table.Cell>{device}</Table.Cell>
                  <Table.Cell>{campaign.logs.filter(log => parser(log.headers['User-Agent']).device.model === device).length}</Table.Cell>
                </Table.Row>))
              }
            </Table.Body>
          </Table>
        </>
      }

      {uniqueOS.length > 0 &&
        <>
          <Header as='h2'>Views by OS</Header>
            <Table compact celled striped singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>OS</Table.HeaderCell>
                <Table.HeaderCell>Number of views</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {uniqueOS.map((os) => (
                <Table.Row key={os}>
                  <Table.Cell>{os}</Table.Cell>
                  <Table.Cell>{campaign.logs.filter(log => parser(log.headers['User-Agent']).os.name === os).length}</Table.Cell>
                </Table.Row>))
              }
            </Table.Body>
          </Table>
        </>
      }

      {uniqueArchitectures.length > 0 &&
        <>
          <Header as='h2'>Views by architecture</Header>
            <Table compact celled striped singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Architecture</Table.HeaderCell>
                <Table.HeaderCell>Number of views</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {uniqueArchitectures.map((architecture) => (
                <Table.Row key={architecture}>
                  <Table.Cell>{architecture}</Table.Cell>
                  <Table.Cell>{campaign.logs.filter(log => parser(log.headers['User-Agent']).cpu.architecture === architecture).length}</Table.Cell>
                </Table.Row>))
              }
            </Table.Body>
          </Table>
        </>
      }

      {uniqueCountries.length > 0 &&
        <>
          <Header as='h2'>Views by country</Header>
            <Table compact celled striped singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Country</Table.HeaderCell>
                <Table.HeaderCell>Number of views</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {uniqueCountries.map((country) => (
                <Table.Row key={country}>
                  <Table.Cell>{country} {countryNames.of(country)}</Table.Cell>
                  <Table.Cell>{campaign.logs.filter(log => log.headers["X-Appengine-Country"] === country).length}</Table.Cell>
                </Table.Row>))
              }
            </Table.Body>
          </Table>
        </>
      }

      {uniqueCities.length > 0 &&
        <>
          <Header as='h2'>Views by city</Header>
            <Table compact celled striped singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>City</Table.HeaderCell>
                <Table.HeaderCell>Number of views</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {uniqueCities.map((city) => (
                <Table.Row key={city}>
                  <Table.Cell>{campaign.logs.filter(log => log.headers["X-Appengine-City"] === city)[0].headers['X-Appengine-Country']} {city}</Table.Cell>
                  <Table.Cell>{campaign.logs.filter(log => log.headers["X-Appengine-City"] === city).length}</Table.Cell>
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
