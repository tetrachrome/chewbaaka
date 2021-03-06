/**
 * TextBubble.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import TextBubble from '../TextBubble';

const title = "CCF Turns 30 in 2020";
const content = "Timeline of CCF - 30 Years of Frontline Conservation";

test('renders TextBubble component', () => {
  render(
    <TextBubble
      diameter={600}
      backgroundColorRGB={[20,80,120]}
      contentColorRGB={[255,255,255]}
      title={title}
      content={content}
    />
  );

  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();

  const contentElement = screen.getByText(content);
  expect(contentElement).toBeInTheDocument();
});

test('TextBubble component snapshot', () => {
  const tree = renderer
    .create(
      <TextBubble
        diameter={600}
        backgroundColorRGB={[20,80,120]}
        contentColorRGB={[255,255,255]}
        title={title}
        content={content}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
