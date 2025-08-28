interface AboutSosmed {
  alt: string;
  src: string;
  h: number;
  w: number;
}

interface AboutIcon {
  alt: string;
  src: string;
  h: number;
  w: number;
  x: number;
  y: number;
}

export const aboutIcon: AboutIcon[] = [
  { alt: 'css', src: '/icons/about-css.png', w: 43, h: 50, y: 88.25, x: -5.25 },
  { alt: 'js', src: '/icons/about-js.png', w: 63, h: 63, y: 67, x: 16 },
  { alt: 'ts', src: '/icons/about-ts.png', w: 51, h: 51, y: 59, x: 52 },
  { alt: 'html', src: '/icons/about-html.png', w: 53, h: 48, y: 67, x: 83.75 },
  {
    alt: 'react',
    src: '/icons/about-react.png',
    w: 38,
    h: 34,
    y: 88.25,
    x: 109,
  },
];

export const aboutSosmed: AboutSosmed[] = [
  { alt: 'facebook', src: '/icons/facebook.svg', w: 11, h: 20 },
  {
    alt: 'instagram',
    src: '/icons/instagram.svg',
    w: 20,
    h: 20,
  },
  {
    alt: 'linkin',
    src: '/icons/in.svg',
    w: 16,
    h: 16,
  },
  {
    alt: 'tiktok',
    src: '/icons/tiktok.svg',
    w: 17,
    h: 20,
  },
];
