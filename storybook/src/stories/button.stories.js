import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const disabledStyle = css`
  &:disabled {
    border-color: #737373;
    background-color: #eaebed;
    color: #737373;
  }
`;

const disabledLinkStyle = css`
  &:disabled {
    border-color: transparent;
    background-color: transparent;
    color: #737373;
  }
`;

const NBSStyledButton = styled.button`
  border-radius: 5px;
  min-height: 48px; 
  border-width: 1px;
  border-style: solid;
  height: auto;
  position: relative;
  width: 200px;
  // Type
  ${props => {
    const { type } = props;
    switch (type) {
      case "secondary":
        return css`
          border-color: rgb(16, 112, 212);
          background-color: #ffffff;
          color: rgb(16, 112, 212);
          &:focus,
          &:hover {
            box-shadow: 0 0 0 3px #add2f9;
          }
          ${disabledStyle}
        `;
      case "link":
        return css`
          border-color: transparent;
          background-color: transparent;
          color: rgb(16, 112, 212);
          &:focus,
          &:hover {
            color: rgb(0, 49, 94);
          }
          ${disabledLinkStyle}
        `;
      case "primary":
      default:
        return css`
          border-color: rgb(16, 112, 212);
          background-color: rgb(16, 112, 212);
          color: #ffffff;
          &:focus,
          &:hover {
            background-color: rgb(0, 49, 94);
            box-shadow: 0 0 0 3px #add2f9;
          }
          ${disabledStyle}
        `;
    }
  }}
  // Size CSS
  ${props => {
    const { size } = props;
    switch (size) {
      case "xsmall":
        return css`
          padding: 1px 7px;
          font-size: 14px;
          line-height: 24px;
          min-height: auto;
        `;
      case "small":
        return css`
          padding: 12px 23px;
          font-size: 15px;
          line-height: 18px;
          min-height: auto;
        `;
      case "large":
        return css`
          padding: 18px 24px;
          font-size: 21px;
          line-height: 30px;
        `;
      case "medium":
      default:
        return css`
          padding: 12px 27px;
          font-size: 18px;
          line-height: 24px;
        `;
    }
  }}
  // Block CSS
  ${props => {
    const { block } = props;
    return css`
      width: ${block ? "100%" : "auto"};
    `;
  }}
`;

const renderButton = (props, content) => (
  <NBSStyledButton {...props}>
    {content}
  </NBSStyledButton>
);

storiesOf('Elements/Button', module)
  .addStyled(
    'Primary X-small',
    withInfo()(() =>
      renderButton({ type: 'primary', size: 'xsmall'}, text('Name', 'Primary x-small button'))
    )
  )
  .addStyled(
    'Primary Small',
    withInfo()(() =>
      renderButton(
        { type: 'primary', size: 'small' },
        text('Name', 'Primary small button')
      )
    )
  )
  .addStyled(
    'Primary Medium',
    withInfo()(() =>
      renderButton(
        { type: 'primary', size: 'medium' },
        text('Name', 'Primary medium button')
      )
    )
  )
  .addStyled(
    'Primary Large',
    withInfo()(() =>
      renderButton(
        { type: 'primary', size: 'large' },
        text('Name', 'Primary large button')
      )
    )
  )
  .addStyled(
    'Secondary',
    withInfo()(() =>
      renderButton({ type: 'secondary', size: 'small' }, text('Name', 'Secondary button'))
    )
  )
  .addStyled(
    'Disabled',
    withInfo()(() =>
      renderButton(
        { type: 'primary', size: 'small', disabled: true},
        text('Name', 'Disabled button')
      )
    )
  )
  .addStyled(
    'Link',
    withInfo()(() =>
      renderButton(
        { type: 'link', size: 'small'},
        text('Name', 'Link')
      )
    )
  )
