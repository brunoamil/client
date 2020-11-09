import { render, screen } from '@testing-library/react'
import Heading from 'components/Heading'
import { renderWithTheme } from 'utils/tests/helpers'

import MediaMatch from '.'

describe('<MediaMatch />', () => {
  let desktopHeading: Element
  let mobileHeading: Element

  beforeEach(() => {
    render(
      <>
        <MediaMatch greaterThan="medium">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </>
    )

    desktopHeading = screen.getByTestId('desktop')
    mobileHeading = screen.getByTestId('mobile')
  })

  it('should be hidden if no media query is passed', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'none')
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'none')
  })

  it('should show or hide based on the media passed', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })

    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)'
    })
  })
  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )
    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )
    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
