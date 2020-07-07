/**
 * ContentPageTableOfContentMenuTemplate.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
 */

import React from 'react';

import { Grid, GridColumn } from 'semantic-ui-react'

import "semantic-ui-css/semantic.min.css";

import './ContentPageTableOfContentMenuTemplate.css'

import CircularImageButton from '../shared/CircularImageButton'

function ContentPageTableOfContentMenuTemplate(props) {
  const gridColumns = [];
  for (const [idx, item] of props.items.entries()) {
    gridColumns.push(
      <GridColumn key={idx}>
        <CircularImageButton
          image={item.image}
          title={item.title}
          href={item.href}
        />
      </GridColumn>
    );
  }

  return (
    <div className="ContentPageTableOfContentMenuTemplateInnerContainer">
      <Grid columns={3}>
        <Grid.Row>
          {gridColumns}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default ContentPageTableOfContentMenuTemplate;