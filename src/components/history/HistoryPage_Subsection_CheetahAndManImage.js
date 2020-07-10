/**
 * HistoryPage_Subsection_CheetahAndManImage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 10, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'
import './HistoryPage_Subsection_CheetahAndManImage.css'

import { getElementStyleClassName } from '../../styling/styling'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'

import ImageSlidingGallery from '../shared/ImageSlidingGallery'

export default class HistoryPageCheetahAndManImageSubsection extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_RelationshipsWithMan";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[HistoryPageCheetahAndManImageSubsection._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div className={getElementStyleClassName("HistoryPageCheetahAndManImageSubsectionOuterContainer")}>
        <ContentPageSubsectionTemplate title={this.state.subsectionConfig.title} content={this.renderContent()} />
      </div>
    )
  }

  renderContent() {
    return (
      <div className={getElementStyleClassName("HistoryPageCheetahAndManImageSubsectionInnerContainer")}>
        <div>
          <ContentPageSubsectionTwoColumnContentTemplate
            lhsColumn={{content: this.renderLhsContent()}}
            rhsColumn={{content: this.renderRhsContent()}}
          />
        </div>
      </div>
    );
  }

  renderLhsContent() {
    return (
      <div className="HistoryPageCheetahAndManImageSubsectionContentTextContainer">
        <p>{this.state.subsectionConfig.contents["paragraph_01"]}</p>
      </div>
    );
  }

  renderRhsContent() {
    return (
      <div>
        <ImageSlidingGallery
          slides={[
            {
              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/War_trophies_Deir_el_Bahari_Wellcome_L0027402.jpg/440px-War_trophies_Deir_el_Bahari_Wellcome_L0027402.jpg",
              caption: "Researchers used the Tuxtla Statuette to decipher the epi-Olmec writing system, which represents both syllables and words"
            },
            {
              image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Cheetahs_nawab_oudh1844.jpg",
              caption: "Listen to a Tsimshian (Pacific Northwest Native) storyteller recount the family history painted on a 38-foot-long house front as specific parts of the design light up."
            }
          ]}
        />
      </div>
    );
  }
}
