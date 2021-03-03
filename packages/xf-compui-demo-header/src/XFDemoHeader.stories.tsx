// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { XFDemoHeader, XFDemoHeaderProps } from './XFDemoHeader';

export default {
    title: 'Example/XFDemoHeader',
    component: XFDemoHeader,
} as Meta;

const Template: Story<XFDemoHeaderProps> = (args) => <XFDemoHeader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
