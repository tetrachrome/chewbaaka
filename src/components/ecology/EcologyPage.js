/**
 * EcologyPage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 19, 2020
 * Updated  : Aug 20, 2020
 */

import React, { Fragment } from 'react'

import ContentPageSkeleton from '../shared/ContentPageSkeleton'

import { config }  from './config'

import EcologyPageSectionEcosystemAndHabitat from './EcologyPage_Section_EcosystemAndHabitat'
import EcologyPageSectionEcomanagement from './EcologyPage_Section_Ecomanagement'
import EcologyPageSectionResearch from './EcologyPage_Section_Research'

export default class EcologyPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imagesContext: () => (require.context("./assets/", true))
    };
  }

  render() {
    return (
      <ContentPageSkeleton
        appConfig={this.props.appConfig}
        pageConfig={config}
        content={this.renderContent()}
        imagesContext={this.state.imagesContext}
      />
    );
  }

  renderContent() {
    return (
      <Fragment>
        <EcologyPageSectionEcosystemAndHabitat config={config}/>

        <EcologyPageSectionEcomanagement config={config} />

        <EcologyPageSectionResearch config={config} />
      </Fragment>
    );
  }
}
