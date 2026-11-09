import { useState } from 'react';
import Section from './Section.jsx';

import TabButton from './TabButton/TabButton.jsx';
import { EXAMPLES } from '../assets/data.js';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState('components');

  function handleSelect(topic) {
    setSelectedTopic(topic);
  }

  return (
  <Section id="examples" title="Examples">

      <menu>
        <TabButton onSelect={() => handleSelect('components')}>
          Components
        </TabButton>

        <TabButton onSelect={() => handleSelect('jsx')}>
          JSX
        </TabButton>

        <TabButton onSelect={() => handleSelect('props')}>
          Props
        </TabButton>

        <TabButton onSelect={() => handleSelect('state')}>
          State
        </TabButton>
      </menu>

      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>

        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    </Section>
  );
}