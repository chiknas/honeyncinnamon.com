import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { MeasureUnit } from 'components/pages/Recipe/types';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import React from 'react';

const FormControlContainer = styled(FormControl)`
  min-width: 160px;
`;

interface MeasureUnitSelectProps {
  measureUnit: MeasureUnit;
  setMeasureUnit: (value: MeasureUnit) => void;
}

export const MeasureUnitSelect: React.FunctionComponent<MeasureUnitSelectProps> =
  ({ measureUnit, setMeasureUnit }) => {
    const { t } = useTranslation();

    return (
      <FormControlContainer variant="outlined">
        <InputLabel>{t('measurement-units.title')}</InputLabel>
        <Select
          value={measureUnit}
          onChange={(e) => setMeasureUnit(e.target.value as MeasureUnit)}
          label={t('measurement-units.title')}
        >
          <MenuItem value={MeasureUnit.GRAMS}>
            {`${t('measurement-units.grams')} (${t(
              'measurement-units.grams-short'
            )})`}
          </MenuItem>
          <MenuItem value={MeasureUnit.OUNCES}>
            {`${t('measurement-units.ounces')} (${t(
              'measurement-units.ounces-short'
            )})`}
          </MenuItem>
        </Select>
      </FormControlContainer>
    );
  };
