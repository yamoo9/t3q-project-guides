export const setDesign = (url: string) => {
  return {
    design: {
      type: 'figma',
      url,
    },
  };
};
