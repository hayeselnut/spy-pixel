import React from 'react';
import { Card } from 'semantic-ui-react';

const CampaignCard = ({ campaign }) => {
  return (
    <Card>
      <Card.Content header={campaign.id} />
      <Card.Content description={`${campaign.logs?.length || 0} views`} />
    </Card>
  )
}

export default CampaignCard;
