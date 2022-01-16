import { Checkbox, Typography } from '@material-ui/core';
import { CollapsableCard } from 'components/CollapsableCard/CollapsableCard';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { FiCheckCircle, FiCircle } from 'react-icons/fi';

const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
`;

const TimeLineItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
`;

const StepContainer = styled(Typography)`
  border: 1px solid #eaeaea;
  border-radius: 8px;
  flex: 1;
  padding: 0.5rem 1rem 1rem 0.5rem;
  font-weight: 360;
`;

interface StepsTimelineProps {
  title: string;
  steps: string[];
}

export const StepsTimeline: React.FunctionComponent<StepsTimelineProps> = ({
  title,
  steps,
}) => {
  const lines = useMemo(
    () =>
      steps.map((step, index) => (
        <TimeLineItem key={`${title}.step.${index}`}>
          <Checkbox
            disableRipple
            icon={<FiCircle />}
            checkedIcon={<FiCheckCircle color="#2eb82e" />}
          />
          <StepContainer>{step}</StepContainer>
        </TimeLineItem>
      )),
    [steps, title]
  );
  return (
    <CollapsableCard title={title} folder={true}>
      <CardContentContainer>{lines}</CardContentContainer>
    </CollapsableCard>
  );
};
