import 'match-media-mock'
import { screen } from '@testing-library/react'

import GameCardSlider from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 325,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero 2',
    developer: 'Rockstar games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 325,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero 3',
    developer: 'Rockstar games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 325,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero 4',
    developer: 'Rockstar games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 325,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero 5',
    developer: 'Rockstar games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 325,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero 6',
    developer: 'Rockstar games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 325,00',
    promotionalPrice: 'R$ 215,00'
  }
]

describe('<GameCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })

    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
