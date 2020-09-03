import React from 'react';

import  Header  from '../components/Header';

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const View = Template.bind({});
View.args = {
  text: "The Shoppies",
};

