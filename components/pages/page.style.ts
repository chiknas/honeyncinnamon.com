import { MainMaxWidth } from 'components/Layout/Layout';
import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2em;
  gap: 1rem;
  max-width: ${MainMaxWidth};
  @media (min-width: ${MainMaxWidth}) {
    min-width: ${MainMaxWidth};
  }
  @media (max-width: ${MainMaxWidth}) {
    min-width: 100vw;
  }
`;
