import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, withKnobs } from '@storybook/addon-knobs';

import Avatar from 'src/components/avatar';

import profilePic from 'src/assets/profile-pic.png';

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('Avatar', () => {
    const name = text('Name', 'Ash');
    const icon = text('Icon', '');
    const outline = boolean('Outline', false);
    const size = text('Size', '');
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
