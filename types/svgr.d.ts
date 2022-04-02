// 참고: https://www.npmjs.com/package/@newhighsco/next-plugin-svgr
declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  export const ReactComponent: FC<SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}
