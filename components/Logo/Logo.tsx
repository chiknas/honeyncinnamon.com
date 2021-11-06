import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';
import { routes } from '../../services/routes';

const Clickable = styled.div`
  cursor: pointer;
`;

export const Logo: React.FunctionComponent = () => {
  const size = '30';
  const router = useRouter();

  const onClick = () => {
    router.push(routes.home);
  };
  return (
    <Clickable onClick={onClick}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text x="0" y={size} fontFamily="fantasy" fontSize={size} fill="black">
          AP
        </text>
      </svg>
    </Clickable>
  );
};
