import { Story, Meta } from '@storybook/react/types-6-0'
import BannerSlider, { BannerSliderProps } from '.'

const items = [
  {
    img: 'https://images4.alphacoders.com/104/1049586.jpg',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://images4.alphacoders.com/104/1049586.jpg',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://images4.alphacoders.com/104/1049586.jpg',
    title: 'Defy death 3',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]
export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
