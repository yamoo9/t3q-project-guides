export const setRange = ({ min = 0, step = 1, max = 600 } = {}) => ({
  control: {
    type: 'range',
    min,
    step,
    max,
  },
});
