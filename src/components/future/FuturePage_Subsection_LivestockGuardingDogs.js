/**
 * FuturePage_Subsection_LivestockGuardingDogs.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jul 24, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ImageView from '../shared/ImageView'

import image_CCF_LGD from './assets/CCF_LGD.jpg'
import image_CCF_anatolian_shepherd_puppies from './assets/CCF_anatolian_shepherd_puppies.jpg'
import image_CCF_Year_of_the_LGD from './assets/CCF_Year_of_the_LGD.jpg'
import image_Cheetah_and_LGD from './assets/Cheetah_and_LGD.jpg'
import image_LGD from './assets/LGD_960x960.png'

export default class FuturePageSubsectionLivestockGuardingDogs extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_LivestockGuardingDogs";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionLivestockGuardingDogs._SUBSECTION_NAME_]
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
        {this.renderPartHistory(this.state.subsectionConfig.contents["part_LGD_History"])}
        {this.renderPartRaisingLGDs(this.state.subsectionConfig.contents["part_Raising_LGDs"])}
        {this.renderCCFYearOfTheLGDImage()}
        {this.renderPartDogsSaveCheetahs(this.state.subsectionConfig.contents["part_Dogs_Save_Cheetahs"])}
      </div>
    );
  }

  renderPartHistory(part) {
    return (
      <div className="VerticalCushionPadding">
        <h4 className="ContentPageSubsectionSubtitle">{part.title}</h4>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}

        <div className="Centered" style={{width: 1200}}>
          <img
            src={image_CCF_LGD}
            alt=""
            style={{width: 1200}}
          />
        </div>
      </div>
    );
  }

  renderPartRaisingLGDs(part) {
    return (
      <div className="OverflowHidden VerticalCushionPadding">
        <h4 className="ContentPageSubsectionSubtitle">{part.title}</h4>
        <div className="FloatRight">
          <ImageView
            image={image_CCF_anatolian_shepherd_puppies}
            caption="Anatolian Shepherd puppies live alongside with the herd. (Image credit: Cheetah Conservation Fund)"
            width={720}
            height={480}
          />
        </div>

        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </div>
    )
  }

  renderCCFYearOfTheLGDImage() {
    const width = 1000;
    return (
      <div className="Centered VerticalCushionPadding" style={{width: width}}>
        <ImageView
          image={image_CCF_Year_of_the_LGD}
          caption="Established in 1994, 2019 marked the 25th anniversary of CCF's Livestock Guarding Dog program. (Image credit: Cheetah Conservation Fund)"
          width={width}
          height={299}
        />
      </div>
    );
  }

  renderPartDogsSaveCheetahs(part) {
    return (
      <div className="OverflowHidden VerticalCushionPadding">
        <h4 className="ContentPageSubsectionSubtitle">{part.title}</h4>
        <div className="FloatLeft HorizontalCusionPadding">
          <img
            src={image_Cheetah_and_LGD}
            alt="Cheetah and LGD"
            style={{width: 720}}
          />
        </div>

        {ContentPageSubsectionParagraphsContentBinder(part.content)}

        <div style={{width: 960}} className="Centered">
          <img
            src={image_LGD}
            alt="Livestock Guarding Dogs"
            style={{width: 960}}
          />
        </div>
      </div>
    );
  }
}