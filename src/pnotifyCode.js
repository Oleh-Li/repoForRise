import '@pnotify/core/dist/Material.css';
import {
  alert
} from '@pnotify/core';

import '@pnotify/core/dist/BrightTheme.css';

export default function callAlert() {
 return alert({
    text: "Notice that's positioned",
    type: "error",
    delay: 5000,
  });
}