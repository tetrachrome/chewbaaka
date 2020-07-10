/**
 * ImageSlide.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 05, 2020
 * Updated  : Jul 09, 2020
 */

/**
 * ImageSlide
 *
 * ImageSlide is a component that allows user to
 * specify a set of images to display along with an
 * input slider that can slide through the set of images.
 *
 * A good example application of this component could be
 * to use a set of images to illustrate changes along a timeline.
 *
 * Props:
 *
 *  - `title` (optional): The title of the component.
 *
 *  - `marks`: An array of { value, label, image } objects specifying
 *    the value and label of each slider tick mark, and the image
 *    to be displayed that's associated with that tick mark.
 *
 *  - `sliderNameLabel`: The label used for illustrating the semantic meaning
 *    of the slider name.
 *
 *  - `sliderUnitLabel`: The label used for illustrating the semantic meaning
 *    of the slider value unit.
 *
 *  - `caption` (optional): Specify an optional caption text to demonstrate the
 *    meaning of the slider, or to specify instructions on how to use the slider.
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import { Header, Label } from 'semantic-ui-react'

import { Slider } from '@material-ui/core';

import './ImageSlide.css'

import { getElementStyleClassName } from '../../styling/styling'

class ImageSlide extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeMark: props.marks[0].value,
      marksDict: 
        Object.fromEntries( props.marks.map( mark => [mark.value, mark]) )
    }
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  handleSliderChange(_, value) {
    this.setState((prevState) => ({
      activeMark: Number(value),
      marksToImages: prevState.marksToImages
    }));
  }

  render() {
    const imageDimensionStyle = {
      width: this.props.imageWidth,
      height: this.props.imageHeight
    }

    return (
      <div className={getElementStyleClassName("ImageSlideOuterContainer")} data-testid="ImageSlideComponentTestId">

        <div className={getElementStyleClassName("ImageSlideInnerContainer")}>

          <Header as='h1' textAlign="center" data-testid="ImageSlideComponentTitlePartTestId">
            {this.props.title}
          </Header>

          <img
            className={getElementStyleClassName("ImageSlideImgElement")} 
            src={this.state.marksDict[this.state.activeMark].image}
            alt={this.state.marksDict[this.state.activeMark].label}
            style={imageDimensionStyle}
            data-testid="ImageSlideComponentImgPartTestId"
          />

          <div className={getElementStyleClassName("ImageSlideSliderAndLabelOuterContainer")}>
            <div className={getElementStyleClassName("ImageSlideLabelOuterContainer")}>
              <Label
                color="black"
                data-testid="ImageSlideComponentLabelPartTestId"
              >
                {this.state.marksDict[this.state.activeMark].label}
              </Label>
            </div>

            <div className={getElementStyleClassName("ImageSlideSliderAndLabelInnerContainer")}>
              <div className={getElementStyleClassName("ImageSlideSliderElementContainer")}>
                <div className={getElementStyleClassName("ImageSlideComponentSliderNameLabelContainer")}>
                  <Label
                    color="yellow"
                    data-testid="ImageSlideComponentSliderNameLabelPartTestId"
                  >
                    {this.props.sliderNameLabel}
                  </Label>
                </div>

                <div className={getElementStyleClassName("ImageSlideComponentSliderEndLabelContainer")}>
                  <Label
                    color="orange"
                    data-testid="ImageSlideComponentSliderUnitLabelPartTestId"
                  >
                    {this.props.sliderUnitLabel}
                  </Label>
                </div>

                <Slider
                  defaultValue={this.props.marks[0].value}
                  valueLabelFormat={(value) => ("")}
                  aria-labelledby="discrete-slider-restrict"
                  step={null}
                  valueLabelDisplay="auto"
                  marks={this.props.marks}
                  onChange={this.handleSliderChange}
                  data-testid="ImageSlideComponentSliderPartTestId"
                />

              </div>
            </div>

            <p data-testid="ImageSlideComponentCaptionPartTestId">
              {this.props.caption}
            </p>
          </div>

        </div>

      </div>
    )
  }
}

export default ImageSlide;
