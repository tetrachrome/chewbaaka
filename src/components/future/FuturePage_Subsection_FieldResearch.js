/**
 * FuturePage_Subsection_FieldResearch.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jul 23, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import MediaLinkButton from '../shared/MediaLinkButton'

export default class FuturePageSubsectionFieldResearch extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_FieldResearch";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionFieldResearch._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div>
        <ContentPageSubsectionTemplate
          title={this.state.subsectionConfig.title}
          content={this.renderContent()}
        />
      </div>
    )
  }

  renderContent() {
    return (
      <div>
        <ContentPageSubsectionTwoColumnContentTemplate
          lhsColumn={{content: this.renderPartContent(this.state.subsectionConfig.content["part_VeterinaryClinic"])}}
          rhsColumn={{content: this.renderPartContent(this.state.subsectionConfig.content["part_EcologicalStudies"])}}
        />

        <MediaLinkButton
          title="Learn more about CCF's research work"
          href="https://cheetah.org/about/what-we-do/research/"
          icon="file alternate outline"
        />
      </div>
    );
  }

  renderPartContent(part) {
    return (
      <div>
        <h4 className="ContentPageSubsectionSubtitle">{part.title}</h4>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </div>
    );
  }
}