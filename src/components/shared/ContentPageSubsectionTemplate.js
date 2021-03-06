/**
 * ContentPageSubsectionTemplate.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Aug 18, 2020
 */

/**
 * ContentPageSubsectionTemplate
 *
 * `ContentPageSubsectionTemplate` is a template component
 * that hosts the content of each content page subsection.
 * Offers basic styling supports such as positioning and layout.
 */

import React from 'react'

import {
  getElementStyleClassName
} from '../../styling/styling'

import './ContentPageSharedStyles.css'

import './ContentPageSubsectionTemplate.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ContentPageSubsectionTemplate-debug.css')

export default function ContentPageSubsectionTemplate(props) {
  return (
    <section className={getElementStyleClassName("ContentPageSubsectionTemplateOuterContainer")}>
      <h3 className={getElementStyleClassName("ContentPageSubsectionTitle")}>
        {props.title}
      </h3>
      {props.content}
    </section>
  );
}
