/**
 * BiologyPage_Subsection_RipAndTear.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 17, 2020
 * Updated  : Aug 05, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSideFloatFluidContainer from '../shared/ContentPageSideFloatFluidContainer'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ImageView from '../shared/ImageView'

import image_cheetah_teeth from './assets/cheetah_teeth-min.jpg'

export default class BiologyPageSubsectionRipAndTear extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_RipAndTear";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionRipAndTear._SUBSECTION_NAME_]
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
      <ContentPageSideFloatFluidContainer
        floatPart={
          <ImageView
            image={image_cheetah_teeth}
            caption="The three types of teeth of the cheetah: the incisors, canines, and carnassial."
            width={640}
            height={505}
          />
        }
        fixedPart={ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}
      />
    );
  }
}
