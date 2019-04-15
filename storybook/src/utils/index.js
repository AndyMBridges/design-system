import React from 'react';

import { text } from '@storybook/addon-knobs';

export const sizeOptions = [
  'mini',
  'tiny',
  'small',
  'medium',
  'large',
  'big',
  'huge',
  'massive'
];

export const longContent = () => [
  <p key="paragraph-1">
    {text(
      'Paragraph 1',
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultricies
tincidunt dolor pellentesque interdum. Ut non lacus vel nibh imperdiet interdum vitae eget diam.`
    )}
  </p>,
  <p key="paragraph-2">
    {text(
      'Paragraph 2',
      `Aenean finibus lacus a leo dictum ultrices. Sed porttitor tempor dui,
quis volutpat felis malesuada in. Donec faucibus neque sed velit egestas, sed euismod dui imperdiet.
Phasellus tincidunt purus at fringilla iaculis. Cras posuere lorem nec turpis semper faucibus.
Fusce mauris lorem, pellentesque nec faucibus in, sodales ac mi.`
    )}
  </p>,
  <p key="paragraph-3">
    {text(
      'Paragraph 3',
      `Sed eget orci
rhoncus, suscipit ante non, laoreet nisl. Sed elementum velit vel porta
auctor. Mauris facilisis commodo mauris ac tincidunt. In condimentum ligula
sapien, quis luctus lacus sollicitudin vel. Fusce dignissim aliquam lacus,
vitae pulvinar nulla varius non. Cras ut porttitor sapien. In ut lectus nec
lorem porta fringilla nec ac ligula. Donec eu pulvinar augue, a gravida
nunc. Curabitur molestie faucibus metus, at commodo nisi gravida eget.
Praesent quis faucibus leo. Quisque pretium enim id nisi venenatis, sit amet
congue dolor mollis.`
    )}
  </p>,
  <p key="paragraph-4">
    {text(
      'Paragraph 4',
      `Maecenas tortor nibh, maximus quis leo eu, accumsan
venenatis nunc. Pellentesque in euismod est. Maecenas ut dignissim quam.
Praesent placerat neque at ligula sollicitudin tempus. Mauris dolor leo,
dictum quis venenatis quis, dignissim vel risus. Phasellus lobortis, nibh
quis dapibus sagittis, mi dolor sollicitudin est, id consequat ligula ex nec
ex. Nullam accumsan ullamcorper nunc, at porta justo ullamcorper a.
Phasellus a eleifend nunc. Integer eget justo in nisl sodales sodales
tincidunt in velit. Donec placerat condimentum sem, quis venenatis turpis
euismod non. Vivamus feugiat velit eget suscipit fermentum. Donec commodo
nisl nunc, at facilisis urna cursus et.`
    )}
  </p>,
  <p key="paragraph-5">
    {text(
      'Paragraph 5',
      `Praesent faucibus felis in
sollicitudin auctor. Aliquam id ante vitae tortor posuere eleifend. Sed
blandit cursus diam, vel sollicitudin nibh mattis eget. Sed malesuada diam
turpis, in cursus lorem facilisis congue. Etiam dictum nec arcu eu mollis.
Vivamus non pretium dui. Donec tempor faucibus mauris euismod convallis.
Suspendisse quis porttitor enim, vel iaculis nibh. Maecenas turpis lorem,
rutrum non elit quis, fermentum ultricies dui. Donec sit amet elit a quam
pretium vestibulum. Cras vitae posuere velit. Nam ac egestas ante. Cras
blandit massa vel suscipit malesuada. Mauris lacinia urna tortor, eu
volutpat tellus dapibus id. Interdum et malesuada fames ac ante ipsum primis
in faucibus. Maecenas vel finibus magna, at luctus nunc. Vestibulum at
pharetra neque. Sed pretium consequat orci, ac posuere ipsum aliquam sit
amet. Morbi tincidunt lacus vitae sodales aliquam.`
    )}
  </p>,
  <p key="paragraph-6">
    {text(
      'Paragraph 6',
      ` Morbi porttitor fringilla
facilisis. Sed aliquet egestas placerat. Integer commodo ante massa, nec
varius ex elementum sed. Sed sit amet libero commodo, interdum metus
lobortis, faucibus augue. Vestibulum ante mauris, vulputate interdum neque
vitae, rhoncus imperdiet libero. Quisque porttitor, sem et dictum hendrerit,
mauris ipsum semper sem, a vestibulum nibh metus sollicitudin ex. In
condimentum augue dapibus, convallis ipsum nec, fringilla nisi. Phasellus id
scelerisque mi, ac egestas sapien.`
    )}
  </p>
];
