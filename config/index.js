const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? 'http://localhost:9999'
  : 'https://lsj.vercel.app/';

// export const server = 'http://localhost:9999'
// export const server = 'https://opentext.vercel.app/'
