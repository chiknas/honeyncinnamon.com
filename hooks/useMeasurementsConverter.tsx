import { Quantity } from 'components/pages/Recipe/types';
import { MeasureUnit } from 'components/pages/Recipe/types';

const GramsOuncesRatio = 0.035274;

const Rounded = (number: number) => Math.round(number * 100) / 100;

type Converter = {
  [key in MeasureUnit]: (quantity: Quantity) => Quantity;
};

const GramsConverter: Converter = {
  [MeasureUnit.OUNCES]: (quantity: Quantity) => ({
    amount: Rounded(quantity.amount * GramsOuncesRatio),
    unit: MeasureUnit.OUNCES,
  }),
  [MeasureUnit.GRAMS]: (quantity: Quantity) => quantity,
  [MeasureUnit.TABLE_SPOON]: (quantity: Quantity) => quantity,
  [MeasureUnit.LITRES]: (quantity: Quantity) => quantity,
  [MeasureUnit.MILLI_LITRES]: (quantity: Quantity) => quantity,
  [MeasureUnit.NONE]: (quantity: Quantity) => quantity,
};

const OuncesConverter: Converter = {
  [MeasureUnit.OUNCES]: (quantity: Quantity) => ({
    amount: Rounded(quantity.amount * (1 / GramsOuncesRatio)),
    unit: MeasureUnit.OUNCES,
  }),
  [MeasureUnit.GRAMS]: (quantity: Quantity) => quantity,
  [MeasureUnit.TABLE_SPOON]: (quantity: Quantity) => quantity,
  [MeasureUnit.LITRES]: (quantity: Quantity) => quantity,
  [MeasureUnit.MILLI_LITRES]: (quantity: Quantity) => quantity,
  [MeasureUnit.NONE]: (quantity: Quantity) => quantity,
};

const DefaultConverter: Converter = {
  [MeasureUnit.OUNCES]: (quantity: Quantity) => quantity,
  [MeasureUnit.GRAMS]: (quantity: Quantity) => quantity,
  [MeasureUnit.TABLE_SPOON]: (quantity: Quantity) => quantity,
  [MeasureUnit.LITRES]: (quantity: Quantity) => quantity,
  [MeasureUnit.MILLI_LITRES]: (quantity: Quantity) => quantity,
  [MeasureUnit.NONE]: (quantity: Quantity) => quantity,
};

const getUnitConverter = (fromUnit?: MeasureUnit): Converter => {
  switch (fromUnit) {
    case MeasureUnit.GRAMS:
      return GramsConverter;
    case MeasureUnit.OUNCES:
      return OuncesConverter;
    default:
      return DefaultConverter;
  }
};

export const useMeasurementsConverter = () => {
  const convertQuantity = (quantity: Quantity, unit: MeasureUnit): Quantity => {
    return getUnitConverter(quantity.unit)[unit](quantity);
  };

  return { convertQuantity };
};
