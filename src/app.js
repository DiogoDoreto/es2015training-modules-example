// Polyfill APIs not available in older browsers
import 'babel-polyfill';

// Import internal files
import { rootElement, values } from './config';  // named imports
import renderList from './list';                 // default import

// Run app code

const list = renderList(values);

rootElement.appendChild(list);
