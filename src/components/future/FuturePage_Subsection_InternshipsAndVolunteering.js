/**
 * FuturePage_Subsection_InternshipsAndVolunteering.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Aug 08, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'
import ContentPageRegularUnorderedList from '../shared/ContentPageRegularUnorderedList'

import CenteredFullWidthContainer from '../shared/CenteredFullWidthContainer'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import FluidImageWrapper from '../shared/FluidImageWrapper'

import MediaLinkButton from '../shared/MediaLinkButton'

import image_CCF_GetInvolved_Volunteer from './assets/CCF_GetInvolved_Volunteer-min.jpg'

export default class FuturePageSubsectionInternshipsAndVolunteering extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_InternshipsAndVolunteering";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionInternshipsAndVolunteering._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <ContentPageSubsectionTemplate
        title={this.state.subsectionConfig.title}
        content={this.renderContent()}
      />
    )
  }

  renderContent() {
    return (
      <div>
        {this.renderBannerImage()}
        {this.renderBodyContent()}
        {this.renderTailContent()}
      </div>
    );
  }

  renderBannerImage() {
    return (
      <ContentPageSubsectionPart>
        <CenteredFullWidthContainer width={1300}>
          <FluidImageWrapper
            src={image_CCF_GetInvolved_Volunteer}
            alt="CCF Volunteering"
          />
        </CenteredFullWidthContainer>
      </ContentPageSubsectionPart>
    );
  }

  renderBodyContent() {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionTwoColumnContentTemplate
          lhsColumn={{content: this.renderPartInternshipsContent(this.state.subsectionConfig.content["part_Internships"])}}
          rhsColumn={{content: this.renderPartVolunteeringContent(this.state.subsectionConfig.content["part_Volunteering"])}}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderPartInternshipsContent(part) {
    return (
      <div>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}

        <ContentPageRegularUnorderedList
          obj={part["internship_list_items"]}
        />
      </div>
    );
  }

  renderPartVolunteeringContent(part) {
    return (
      <div>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </div>
    );
  }

  renderTailContent() {
    return (
      <ContentPageSubsectionPart>
        <MediaLinkButton
          title="Learn more about CCF's Volunteer Program"
          href="https://cheetah.org/get-involved/volunteer/"
          icon="file alternate outline"
        />
      </ContentPageSubsectionPart>
    );
  }
}
