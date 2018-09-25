/* global module */

import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { withKnobs, text } from '@storybook/addon-knobs/react'

import CourseCard from '../components/CourseCard'

const Wrapper = styled.section`
  width: ${props => (props.width ? props.width : '360')}px;
  margin: 0 auto;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px;
`

storiesOf('ToggleCard', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Wrapper>
      <CourseCard
        course={{
          title: text('title', 'Bootcamp Web Development'),
          provider: text('provider', 'neuefische'),
          duration: text('duration', 'Drei Monate'),
          times: text('times', '24/7'),
          costs: text('costs', '8000 Euronen'),
          teacher: text('teacher', 'Jerry'),
          text: text('text', ' Gutes Ding'),
          place: text('place', 'Bahrenfeld, Hamburg'),
        }}
      />
    </Wrapper>
  ))
