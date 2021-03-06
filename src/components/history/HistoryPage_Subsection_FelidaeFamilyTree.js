/**
 * HistoryPage_Subsection_FelidaeFamilyTree.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Aug 22, 2020
 */

import React, { Suspense } from 'react'

import { getElementStyleClassName } from '../../styling/styling'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageParagraph from '../shared/ContentPageParagraph'
import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'

import DimensionPredicatedContainer from '../shared/DimensionPredicatedContainer'

import FluidImageWrapper from '../shared/FluidImageWrapper'

import MediaLinkButton from '../shared/MediaLinkButton'

import HintSignpost from '../shared/HintSignpost'

// import QnAPopUp from '../shared/QnAPopUp'

// import FelidaeFamilyTree from './FelidaeFamilyTree'

import big_cats_image from './assets/Big_Cats-min.png'

import '../shared/ContentPageSharedStyles.css'

import './HistoryPage_Subsection_FelidaeFamilyTree.css'

if ( process.env.NODE_ENV === 'development' )
  require('./HistoryPage_Subsection_FelidaeFamilyTree-debug.css')

const FelidaeFamilyTree = React.lazy(() => import('./FelidaeFamilyTree'));

export default class HistoryPageSubsectionFelidaeFamilyTree extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_EvolutionOfCats";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[HistoryPageSubsectionFelidaeFamilyTree._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div className={getElementStyleClassName("HistoryPageSubsectionFelidaeFamilyTreeOuterContainer")}>
        <ContentPageSubsectionTemplate
          title={this.state.subsectionConfig.title}
          content={this.renderContent()}
        />
      </div>
    )
  }

  renderContent() {
    return (
      <div className={getElementStyleClassName("HistoryPageSubsectionFelidaeFamilyTreeInnerContainer")}>
        {this.renderRelatedCatPart()}
        {this.renderFelidaeFamilyTreePart()}
      </div>
    );
  }

  renderRelatedCatPart() {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          Which big cat is the most related to the cheetah?
        </ContentPageSubsectionSubtitle>

        <ContentPageParagraph>
          It is easy to think that the closest relative to the cheetah among the big cats is the leopard,
          given the close resemblance to their appearances. However, the cheetah is actually most closely
          related to the North American <b>cougar (puma)</b> (<span className="TaxonomyBinomialName">Puma concolor</span>)
          and the <b>jaguarundi</b> (<span className="TaxonomyBinomialName">Herpailurus yagouaroundi</span>)
          that roams through Central to South America. Together, these three species form the <b><span className="TaxonomyBinomialName">Puma</span></b> lineage,
          one of the eight lineages of the <span className="TaxonomyBinomialName">Felidae</span> family.
        </ContentPageParagraph>

        <div className="VerticalCushionPadding">
          <FluidImageWrapper
            src={big_cats_image}
            alt="Big Cats"
          />
        </div>
      </ContentPageSubsectionPart>
    );
  }

  renderFelidaeFamilyTreePart() {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          Felidae Family Tree
        </ContentPageSubsectionSubtitle>

        <ContentPageParagraph>
          The evolution of the <span className="TaxonomyBinomialName">Felidae</span> cat
          family began about 25 million years ago. Through time, the ancestors
          of the cat family slowly evolved into eight main lineages, with each lineage
          representing a subset of the <span className="TaxonomyBinomialName">Felidae</span> cat
          family that are the most related genetically.
        </ContentPageParagraph>
        
        {this.renderFelidaeFamilyTreePartCoreConditionally()}

        <MediaLinkButton
          href="https://www.wildcatfamily.com/felidae-evolution/"
          title='Learn more about Felidae Evolution'
          icon="file alternate outline"
        />

        {/**
         * TODO
         * Bring back this pop up while maintain fluid layout
         */}
        {/* <ContentPageSubsectionPart>
          <QnAPopUp
            content="All the species of cats except for only the domestic cat are being threatened toward extinction due to man-made factors, such as climate change and habitat destructions."
          />
        </ContentPageSubsectionPart> */}
      </ContentPageSubsectionPart>
    );
  }

  renderFelidaeFamilyTreePartCoreConditionally() {
    return (
      <DimensionPredicatedContainer
        pred={(dimension) => (dimension.width >= 1346)}
        renderContentHandler={this.renderFelidaeFamilyTreePartCore}
      />
    );
  }

  renderFelidaeFamilyTreePartCore() {
    return (
      <Suspense fallback={<div></div>}>
        <div className={getElementStyleClassName("HistoryPageSubsectionFelidaeFamilyTreeCore")}>
          <HintSignpost
            hintText="Hover over images below to reveal the members in the Felidae family tree"
            iconName="arrow circle down"
          />
          <FelidaeFamilyTree />
        </div>
      </Suspense>
    );
  }
}
