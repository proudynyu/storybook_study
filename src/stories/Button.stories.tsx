import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  bgColor: "blue",
  text: "Blue",
};

export const Secondary = Template.bind({});
Secondary.args = {
  bgColor: "red",
  text: "Red",
};

export const Terciary = Template.bind({});
Terciary.args = {
  bgColor: "yellow",
  text: "Yellow",
};
