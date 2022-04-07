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

  const regex = new RegExp("^[a-zA-Z0-9-_@+\.]+$");
  const isAlphanumeric = (string) => {
    return string === "" || regex.test(string);
  }

  return (
    <Container style={{paddingTop: "4rem"}}>
      <Header as="h1">Dashboard</Header>

      <Header as="h2">Create a spy pixel!</Header>

      <p>This button creates a spy pixel for you and copies it to your clipboard. Paste it into your emails and start sending!</p>
      <p>Campaign IDs are compulsory as they are used to identify which email campaign the pixel is a part of. Emails are optional, and can be used to identify recipients. All input must be alphanumeric characters, ., -, _, @, + or .</p>
      <p>NOTE: you can only paste into a rich text editor since HTML is copied directly to your clipboard.</p>

      <div style={{display: "flex", flexWrap: "wrap", rowGap: "1rem", columnGap: "1rem"}}>
        <div>
          <Input error={!isAlphanumeric(newCampaignId)} list="campaigns" icon="flag" iconPosition="left" placeholder="Campaign ID" onChange={(e, d) => { setNewCampaignId(d.value); setButtonicon("copy"); }} />
        </div>
        <datalist id="campaigns">
          {campaigns.map(campaign => <option key={campaign.id} value={campaign.id}>{campaign.id}</option>)}
        </datalist>

        <div>
          <Input error={!isAlphanumeric(newEmail)} icon="mail" iconPosition="left" placeholder="Email" onChange={(e, d) => { setNewEmail(d.value); setButtonicon("copy"); }} />
        </div>

        <div>
          <Button disabled={newCampaignId === "" || !isAlphanumeric(newCampaignId) || !isAlphanumeric(newEmail)} icon labelPosition="left" color={buttonIcon === "copy" ? "blue" : "green"} onClick={handleClick}>
            Copy to clipboard
            <Icon name={buttonIcon} />
          </Button>
        </div>
      </div>

      <Divider />

      <Header as="h2">Active campaigns</Header>
      <div style={{display: "flex", flexWrap: "wrap", rowGap: "2rem", columnGap: "2rem"}}>
        {campaigns.map(campaign => (
          <Link to={`/spy-pixel/campaign/${campaign.id}`} key={campaign.id}>
            <CampaignCard campaign={campaign} />
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default Dashboard;
