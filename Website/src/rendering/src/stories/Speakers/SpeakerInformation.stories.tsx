import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SpeakerInformation, {
  SpeakerInformationProps,
} from '../../components/Speakers/SpeakerInformation';
import { SESSIONS } from '../mock-sessions';

export default {
  title: 'Components/Speakers/SpeakerInformation',
  component: SpeakerInformation,
} as ComponentMeta<typeof SpeakerInformation>;

const Template: ComponentStory<typeof SpeakerInformation> = (args: SpeakerInformationProps) => (
  <SpeakerInformation {...args} />
);

const fieldsWithoutSessions = {
  description: {
    value:
      '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.&nbsp;</p><p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo.</p><ul><li>Lorem ipsum dolor sit amet</li><li>consetetur sadipscing elitr</li><li>sed diam nonumy eirmod tempor</li><li>invidunt ut labore et dolore</li><li>magna aliquyam erat</li><li>sed diam voluptua</li></ul><p>ad fas dasd asasdf asd fasd fasd fas dfasd f sdfasdfda sd as sdgf sdfg sdfg sdfbghtyurty urty urtyu rtyur tasdasqwqwrt wert wert wert wert sdfg sgd. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo.</p>',
  },
  sessions: {
    targetItems: [],
  },
};

const fieldsWithSessions = {
  ...fieldsWithoutSessions,
  ...{
    sessions: {
      targetItems: SESSIONS,
    },
  },
};

export const WithoutSessions = Template.bind({});
WithoutSessions.args = {
  fields: {
    data: {
      contextItem: fieldsWithoutSessions,
    },
  },
  rendering: {
    componentName: 'Rendering',
    dataSource: '/sitecore',
  },
};

export const WithSessions = Template.bind({});
WithSessions.args = {
  fields: {
    data: {
      contextItem: fieldsWithSessions,
    },
  },
};
