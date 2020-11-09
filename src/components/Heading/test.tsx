import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'
import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>won Games</Heading>)
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })
  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">won Games</Heading>)
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: '#030517'
    })
  })
  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>won Games</Heading>)
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    })
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>won Games</Heading>)
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">won Games</Heading>)
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'font-size': '1.6rem'
    })
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })
})
