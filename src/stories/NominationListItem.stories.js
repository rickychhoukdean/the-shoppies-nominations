import React from 'react';

import  NominationListItem  from '../components/Nominations/NominationListItem';

export default {
  title: 'Example/NominationListItem',
  component: NominationListItem,
};

const Template = (args) => <NominationListItem {...args} />;

export const Base = Template.bind({});
Base.args = {
  text: "The Shoppies",
};

