import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Divider, Header, Input, Button, Icon } from "semantic-ui-react";
import copy from "copy-html-to-clipboard";
import CampaignCard from "../components/campaign-card";

const Dashboard = ({ campaigns }) => {
  const [newCampaignId, setNewCampaignId] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [buttonIcon, setButtonicon] = useState("copy");

  const handleClick = () => {
    copy(`<img width="1" height="1" border="0" src="https://spy-pixel.ts.r.appspot.com/spy-pixel.gif?campaign=${newCampaignId}&email=${newEmail}" />`, {
      asHtml: true
    });
    setButtonicon("check");
  }

  return (
    <Container style={{paddingTop: "4rem"}}>
      <Header as="h1">Dashboard</Header>

      <Header as="h2">Create a spy pixel!</Header>

      <div style={{display: "flex", flexWrap: "wrap", rowGap: "1rem", columnGap: "1rem"}}>
        <div>
          <Input list="campaigns" icon="flag" iconPosition="left" placeholder="Campaign ID" onChange={(e, d) => { setNewCampaignId(d.value); setButtonicon("copy"); }}/>
        </div>
        <datalist id="campaigns">
          {campaigns.map(campaign => <option key={campaign.id} value={campaign.id}>{campaign.id}</option>)}
        </datalist>
        <div>
          <Input icon="mail" iconPosition="left" placeholder="Email" onChange={(e, d) => { setNewEmail(d.value); setButtonicon("copy"); }}/>
        </div>
        <div>
          <Button icon labelPosition="left" color={buttonIcon === "copy" ? "blue" : "green"} onClick={handleClick}>
            Copy to clipboard
            <Icon name={buttonIcon} />
          </Button>
        </div>
      </div>

      <Divider />

      <Header as="h2">Active campaigns</Header>
      <div style={{display: "flex", flexWrap: "wrap", rowGap: "2rem", columnGap: "2rem"}}>
        {campaigns.map(campaign => (
          <Link to={`/campaign/${campaign.id}`} key={campaign.id}>
            <CampaignCard campaign={campaign} />
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default Dashboard;
