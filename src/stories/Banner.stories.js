import React from "react";
import Banner from "../components/Banner";

export default {
  title: "Example/Banner",
  component: Banner,

};

const Template = (args) => <Banner {...args} />;

export const View = Template.bind({});
View.args = {
  text: "You already have five nominated movies",
};
