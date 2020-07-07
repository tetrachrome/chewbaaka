/**
 * ContentPageHead.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 06, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import './ContentPageHead.css'
import './ContentPageSharedStyles.css'

import ContentPageTopNavMenuBar from './ContentPageTopNavMenuBar'
import ContentPageBanner from './ContentPageBanner'

function ContentPageHead(props) {
  return (
    <div className="ContentPageSkeletonContentContainerDimension ContentPageHeadOuterContainer" data-testid="ContentPageHeadComponentTestId">
      <div className="ContentPageHeadNavMenuBarOuterContainer">
        <ContentPageTopNavMenuBar />
      </div>
      <ContentPageBanner
        coverImage={props.pageProps.coverImage}
        title={props.pageProps.title}
        subtitle={props.pageProps.subtitle}
      />
    </div>
  );
}

export default ContentPageHead;
