/**
 * EcologyPage_Subsection_WhereCheetahsLive.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Aug 13, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageParagraph from '../shared/ContentPageParagraph'
import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'
import ContentPageSideFloatFluidContainer from '../shared/ContentPageSideFloatFluidContainer'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import CenteredFullWidthContainer from '../shared/CenteredFullWidthContainer'

import FactBannerImage from '../shared/FactBannerImage'

import ImageView from '../shared/ImageView'

import FluidImageWrapper from '../shared/FluidImageWrapper'

import FluidSingleRowGrid from '../shared/FluidSingleRowGrid'

import ImageViewModal from '../shared/ImageViewModal'

import NamibianBiomes from './NamibianBiomes'

import image_savanna from './assets/savanna-min.jpg'

import image_banner_fact_What_is_Habitat from './assets/What_is_Habitat-min.png'

import image_savana_bg_large from './assets/savana_bg_large-min.jpg'

import image_Namibia_Biomes_and_Cheetah_Ranges_Map from './assets/Namibia_Biomes_and_Cheetah_Ranges_Map-min.jpg'

import image_banner_fact_What_is_Biome from './assets/What_is_Biome-min.png'

import image_namibia_landscape_01 from './assets/namibia_landscape_01-min.jpg'
import image_namibia_landscape_02 from './assets/namibia_landscape_02-min.jpg'
import image_namibia_landscape_03 from './assets/namibia_landscape_03-min.jpg'
import image_namibia_landscape_04 from './assets/namibia_landscape_04-min.jpg'

export default class EcologyPageSubsectionWhereCheetahsLive extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_WhereCheetahsLive";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionWhereCheetahsLive._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <ContentPageSubsectionTemplate
        title={this.state.subsectionConfig.title}
        content={this.renderContent()}
      />
    );
  }

  renderContent() {
    return (
      <div>
        {this.renderPartCheetahHabitatContent(this.state.subsectionConfig.contents["part_CheetahHabitat"])}
        {this.renderPartNamibianBiomesContent(this.state.subsectionConfig.contents["part_NamibianBiomes"])}
      </div>
    );
  }

  renderPartCheetahHabitatContent(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>

        <ContentPageSideFloatFluidContainer
          floatPart={
            <ImageView
              image={image_savanna}
              caption="African savannas have rich fauna biodiversity and house the habitats of a wide range of wildlife."
              width={598}
              height={343}
            />
          }
          fixedPart={ContentPageSubsectionParagraphsContentBinder(part.content)}
        />

        <FactBannerImage
          src={image_banner_fact_What_is_Habitat}
          alt="What is a habitat"
          centered
        />

        <FluidImageWrapper
          src={image_savana_bg_large}
          alt="African savanna"
          centered
        />
      </ContentPageSubsectionPart>
    );
  }

  renderPartNamibianBiomesContent(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>

        <ContentPageSubsectionTwoColumnContentTemplate
          lhsColumn={{content: this.renderPartNamibianBiomesLhs(part)}}
          rhsColumn={{content: this.renderPartNamibianBiomesRhs(part)}}
        />

        <div className="VerticalCushionPaddingTopLarge">
          <CenteredFullWidthContainer width={1200}>
            <ImageView
              image={image_Namibia_Biomes_and_Cheetah_Ranges_Map}
              caption={part.content["paragraph_biomes_map_caption"]}
              width={1200}
              height={720}
            />
          </CenteredFullWidthContainer>
        </div>

        <FactBannerImage
          src={image_banner_fact_What_is_Biome}
          alt="What is biome?"
          centered
          large
        />

        {this.renderImageViewModals()}
      </ContentPageSubsectionPart>
    );
  }

  renderPartNamibianBiomesLhs(part) {
    return (
      <ContentPageParagraph>
        {part.content["paragraph_biome_intro"]}
      </ContentPageParagraph>
    );
  }

  renderPartNamibianBiomesRhs(part) {
    return (
      <NamibianBiomes
        part={part}
      />
    );
  }

  renderImageViewModals() {
    const images = [
      image_namibia_landscape_01,
      image_namibia_landscape_02,
      image_namibia_landscape_03,
      image_namibia_landscape_04,
    ];

    return (
      <FluidSingleRowGrid justifyContent="space-evenly">
        {images.map((image, idx) => (
          <ImageViewModal
            key={idx}
            image={image}
            width={480}
            height={320}
          />
        ))}
      </FluidSingleRowGrid>
    );
  }
}
