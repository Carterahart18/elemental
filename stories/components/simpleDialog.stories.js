import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, radios } from '@storybook/addon-knobs';
import backdrop from 'stories/decorators/backdrop';

import SimpleDialog from 'src/components/simpleDialog';

storiesOf('Components', module)
  .addDecorator(backdrop('auto', 'auto'))
  .add('Simple Dialog', () => {
    const description = text(
      'Color',
      'Explore today’s trending ideas, curated finds, and personalized picks.'
    );
    const dismissText = text('Dismiss Text', 'Later');
    const confirmText = text('Confirm Text', 'Learn more');

    return (
      <SimpleDialog
        description={description}
        dismissText={dismissText}
        confirmText={confirmText}
      />
    );
  });
