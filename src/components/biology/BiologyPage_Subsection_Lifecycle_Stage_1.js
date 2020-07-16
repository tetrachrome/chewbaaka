/**
 * BiologyPage_Subsection_Lifecycle_Stage_1.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Jul 15, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import ImageView from '../shared/ImageView'

import image_baby_cheetah from './assets/baby_cheetahs.jpg'
import image_cheetah_mom_carry_cub from './assets/cheetah_mom_carry_cub.jpg'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import './BiologyPage_Subsection_Lifecycle_Stage_1.css'

export default class BiologyPageSubsectionLifecycleStage1 extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_Lifecycle_Stage_1";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionLifecycleStage1._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div className="">
        <ContentPageSubsectionTemplate
          title={this.state.subsectionConfig.title}
          content={this.renderContent()}
        />
      </div>
    )
  }

  renderContent() {
    return (
      <div className="OverflowHidden">
        <div className="FloatRight">
          <ImageView
            image={image_cheetah_mom_carry_cub}
            caption="Cheetah mom carries her cub with her jaw."
            width={320}
            height={480}
          />
        </div>

        <div className="FloatRight">
          <ImageView
            image={image_baby_cheetah}
            caption="Cheetah cubs are born blind, so they need their mother's care."
            width={320}
            height={241}
          />
        </div>

        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}
      </div>
    );
  }
}
