import ImageColors from 'react-native-image-colors';

export const getImageColors = async (urlImage: string): Promise<string[]> => {
  const result = await ImageColors.getColors(urlImage, {});

  let primaryColor: string = '';
  let secondaryColor: string = '';

  switch (result.platform) {
    case 'android':
      primaryColor = result.vibrant || '#228B22';
      secondaryColor = result.dominant || '#228B22';
      break;
    case 'web':
      break;
    case 'ios':
      primaryColor = result.primary || '#228B22';
      secondaryColor = result.background || '#228B22';
      break;
    default:
      throw new Error('Unexpected platform key');
  }
  console.log([primaryColor, secondaryColor]);

  return [primaryColor, secondaryColor];
};
