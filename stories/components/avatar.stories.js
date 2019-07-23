import React from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from 'src/components/avatar';

const defaultProps = {

};

storiesOf('Components/Avatar', module).add('Standard', () => <Avatar />);
