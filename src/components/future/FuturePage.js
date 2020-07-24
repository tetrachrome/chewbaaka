/**
 * FuturePage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 14, 2020
 * Updated  : Jul 24, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import ContentPageSkeleton from '../shared/ContentPageSkeleton'

import ContentPageTableOfContentMenuBootstrapper from '../shared/ContentPageTableOfContentMenuBootstrapper'
import ContentPageIntroSectionGeneric from '../shared/ContentPageIntroSectionGeneric'

import { config }  from './config'

import FuturePageSectionConservation from './FuturePage_Section_Conservation'
import FuturePageSectionSustainableDevelopment from './FuturePage_Section_SustainableDevelopment'
import FuturePageSectionOutreachAndEducation from './FuturePage_Section_OutreachAndEducation'

import coverImage from './assets/future_page_cover_image.jpg'

export default class FuturePage extends React.Component {

  render() {
    let pageProps = config.pageProps;
    pageProps.coverImage = coverImage;

    return (
      <ContentPageSkeleton
        pageProps={pageProps}
        content={this.renderContent()}
      />
    )
  }

  renderContent() {
    return (
      <div>
        <ContentPageTableOfContentMenuBootstrapper
          pageMenuItems={config.pageProps.pageMenuItems}
          imagesContext = {() => (require.context("./assets/menu/", true))}
        />

        <ContentPageIntroSectionGeneric
          contentPageIntro={config.contentPageIntro}
          imagesContext = {() => (require.context("./assets/", true))}
        />

        <FuturePageSectionConservation
          config={config}
        />

        <FuturePageSectionSustainableDevelopment
          config={config}
        />

        <FuturePageSectionOutreachAndEducation
          config={config}
        />
      </div>
    )
  }
}
