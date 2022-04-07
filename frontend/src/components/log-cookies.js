import React from 'react';
import { Table } from "semantic-ui-react";

const LogCookies = ({ cookies }) => {
  return (
    <Table compact celled striped singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='2'>Cookies</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {cookies && Object.keys(cookies).length === 0
        ? (
          <Table.Row>
            <Table.Cell colSpan='2'>No cookies detected</Table.Cell>
          </Table.Row>
        ) : (
          Object.entries(cookies).map(([key, value]) => (
            <Table.Row key={key}>
              <Table.Cell>{key}</Table.Cell>
              <Table.Cell>{value}</Table.Cell>
            </Table.Row>))
        )
      }
      </Table.Body>
    </Table>
  )
}

export default LogCookies;
