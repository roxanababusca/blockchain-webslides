import 'reveal.js/dist/reset.css'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
import 'reveal.js/plugin/highlight/monokai.css'

import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';

Reveal.initialize({
  hash: true,
  hashOneBasedIndex: true,
  previewLinks: true,
  minScale: 0.2,
	maxScale: 1.5,
  plugins: [ Highlight ]
});