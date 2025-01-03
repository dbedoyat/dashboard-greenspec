import React from 'react';
import Toggle from '@/components/Toggle';
import {Icon} from '@iconify/react';

const QuickSettings = () => {
  return (
    <ul>
      <li>
        {' '}
        <span>Group Start</span> <Toggle />
      </li>
      <li>
        <span>Settings</span>
        <Icon icon={`ph:check`} ssr={true} />
      </li>
    </ul>
  );
};

export default QuickSettings;
