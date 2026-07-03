// JSX typings for the web components used in the page:
// <model-viewer> (loaded from CDN) and <image-slot> (public/image-slot.js).
import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> &
        Record<string, unknown>;
      'image-slot': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> &
        Record<string, unknown>;
    }
  }
}
