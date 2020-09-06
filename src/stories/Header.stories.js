import React from 'react';

import  Header  from '../components/Header/Header';
import '../index.css'

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Base = Template.bind({});
Base.args = {
  text: "The Shoppies",
};

