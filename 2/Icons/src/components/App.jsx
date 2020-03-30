import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faUser, faBox } from '@fortawesome/free-solid-svg-icons';

const Icon = styled(FontAwesomeIcon)`
  margin: 5px;
  color: #c90409;
`;

export const App = () => (
  <>
    <div>
      <Icon icon={faPlane} />
      <Icon icon={faUser} size={'2x'} />
      <Icon icon={faBox} size={'3x'} />
    </div>

    {/*  比較のためにstyled-componentを適用しないでFontAwesomeを描画 */}
    <div>
      <FontAwesomeIcon icon={faPlane} />
      <FontAwesomeIcon icon={faUser} size={'2x'} />
      <FontAwesomeIcon icon={faBox} size={'3x'} />
    </div>
  </>
);
