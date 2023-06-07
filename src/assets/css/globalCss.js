import { StyleSheet } from 'react-native';

export const colors = {
  white: '#FFFFFF',
  grayLight: '#FDFDFD',
  grayMedium: '#EFEFEF',
  grayDark: '#5E5E5E',
  bluePrimary: '#2096E1',
  orangePrimary: '#FF6C00',
  violetPrimary: '#7165E3',
};

export const globalStyles = StyleSheet.create({
  sectionTitle: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 16,
    color: colors.bluePrimary,
  },
  padding: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});
