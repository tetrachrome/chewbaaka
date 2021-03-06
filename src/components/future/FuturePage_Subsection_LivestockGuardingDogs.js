/**
 * FuturePage_Subsection_LivestockGuardingDogs.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Aug 12, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageSideFloatFluidContainer from '../shared/ContentPageSideFloatFluidContainer'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'

import CenteredFullWidthContainer from '../shared/CenteredFullWidthContainer'

import { kStringConstantCheetahConservationFund } from '../shared/constants'

import ImageView from '../shared/ImageView'

import FluidImageWrapper from '../shared/FluidImageWrapper'

import image_CCF_LGD from './assets/CCF_LGD-min.jpg'
import image_CCF_anatolian_shepherd_puppies from './assets/CCF_anatolian_shepherd_puppies-min.jpg'
import image_CCF_Year_of_the_LGD from './assets/CCF_Year_of_the_LGD-min.jpg'
import image_Cheetah_and_LGD from './assets/Cheetah_and_LGD-min.jpg'
import image_LGD from './assets/LGD_960x960-min.png'

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
      <ContentPageSubsectionTemplate
        title={this.state.subsectionConfig.title}
        content={this.renderContent()}
      />
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
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>

        {ContentPageSubsectionParagraphsContentBinder(part.content)}

        <div className="VerticalCushionPadding">
          <CenteredFullWidthContainer width={1200}>
            <FluidImageWrapper
              src={image_CCF_LGD}
              alt="Livestock Guarding Dog"
            />
          </CenteredFullWidthContainer>
        </div>
      </ContentPageSubsectionPart>
    );
  }

  renderPartRaisingLGDs(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>

        <ContentPageSideFloatFluidContainer
          floatPart={
            <ImageView
              image={image_CCF_anatolian_shepherd_puppies}
              caption="Anatolian Shepherd puppies live alongside with the herd."
              credit={kStringConstantCheetahConservationFund}
              width={720}
              height={480}
            />
          }
          fixedPart={ContentPageSubsectionParagraphsContentBinder(part.content)}
        />          
      </ContentPageSubsectionPart>
    )
  }

  renderCCFYearOfTheLGDImage() {
    const componentWidth = 1000;
    return (
      <ContentPageSubsectionPart>
        <CenteredFullWidthContainer width={componentWidth}>
          <ImageView
            image={image_CCF_Year_of_the_LGD}
            caption="Established in 1994, 2019 marked the 25th anniversary of CCF's Livestock Guarding Dog program."
            credit={kStringConstantCheetahConservationFund}
            width={componentWidth}
            height={299}
          />
        </CenteredFullWidthContainer>
      </ContentPageSubsectionPart>
    );
  }

  renderPartDogsSaveCheetahs(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>

        <ContentPageSideFloatFluidContainer
          floatPart={
            <FluidImageWrapper
              src={image_Cheetah_and_LGD}
              alt="Cheetah and LGD"
            />
          }
          fixedPart={ContentPageSubsectionParagraphsContentBinder(part.content)}
        />

        <div className="VerticalCushionPaddingTopLarge">
          <FluidImageWrapper
            src={image_LGD}
            alt="Livestock Guarding Dogs"
            centered
          />
        </div>
      </ContentPageSubsectionPart>
    );
  }
}
