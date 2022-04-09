import React from 'react';
import parser from "ua-parser-js";
import { Icon, Table } from "semantic-ui-react";

const LogHeaders = ({ headers }) => {
  const ua = parser(headers["User-Agent"]);

  return (
    <>
      <Table compact celled striped singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan='2'>{`User Agent${headers["User-Agent"].includes("GoogleImageProxy") ? " (via GoogleImageProxy)" : ""}`}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell><Icon name='chrome' /> Browser</Table.Cell>
            <Table.Cell>{ua.browser.name ? `${ua.browser.name} ${ua.browser.version}` : <i>unknown</i>}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell><Icon name='mobile alternate' /> Device</Table.Cell>
            <Table.Cell>{ua.device.model || <i>unknown</i>}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell><Icon name='computer' /> OS</Table.Cell>
            <Table.Cell>{ua.os.name ? `${ua.os.name} ${ua.os.version}` : <i>unknown</i>}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell><Icon name='microchip' /> Architecture</Table.Cell>
            <Table.Cell>{ua.cpu.architecture || <i>unknown</i>}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Table compact celled striped singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='2'>{`Location${headers["User-Agent"].includes("GoogleImageProxy") ? " (via GoogleImageProxy)" : ""}`}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell><Icon name='world' /> Country</Table.Cell>
          <Table.Cell>{headers["X-Appengine-Country"] || <i>unknown</i>}</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell><Icon name='building' /> City</Table.Cell>
          <Table.Cell>{headers["X-Appengine-City"] || <i>unknown</i>}</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell><Icon name='location arrow' /> IP</Table.Cell>
          <Table.Cell>{headers["X-Appengine-User-Ip"] || <i>unknown</i>}</Table.Cell>
        </Table.Row>
      </Table.Body>
      </Table>
    </>
  )
}

export default LogHeaders;
