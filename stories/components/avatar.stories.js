import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, radios, withKnobs } from '@storybook/addon-knobs';
import backdrop from 'stories/decorators/backdrop';

import Avatar from 'src/components/avatar';

import profilePic from 'src/assets/profile-pic.png';

storiesOf('Components', module)
  .addDecorator(backdrop(400, 400))
  .add('Avatar', () => {
    const name = text('Name', 'Ash');
    const icon = text('Icon', '');
    const outline = boolean('Outline', false);
    const size = radios(
      'Size',
      { Default: '', Small: 'sm', Medium: 'md', Large: 'lg' },
      ''
    );
    const withPicture = boolean('Profile Picture', true);
    const verified = boolean('Verified', true);

    return (
      <Avatar
        name={name}
        icon={icon}
        outline={outline}
        size={size}
        src={withPicture ? profilePic : null}
        verified={verified}
      />
    );
  });
