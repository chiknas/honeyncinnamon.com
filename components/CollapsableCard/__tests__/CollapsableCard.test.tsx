import React from 'react';
import { render, screen } from 'testing/test-utils';
import { CollapsableCard } from '../CollapsableCard';

test('I can see a CollapseCard being rendered with the correct title', () => {
  render(<CollapsableCard title="Card Title" />);

  expect(screen.getByText('Card Title')).toBeInTheDocument();
});
