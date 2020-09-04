import React from 'react';

import  Searchbar  from '../components/Search/Searchbar';

export default {
  title: 'Example/Searchbar',
  component: Searchbar,
};

const Template = (args) => <Searchbar {...args} />;

export const Base = Template.bind({});
Base.args = {
};

