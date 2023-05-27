import { StyleSheet } from 'react-native';

export const colors = {
  white: '#FFFFFF',
  gray_light: '#FDFDFD',
  gray_medium: '#EFEFEF',
  gray_dark: '#5E5E5E',
  blue_primary: '#2096E1',
  orange_primary: '#FF6C00',
  violet_primary: '#7165E3',
};

export const global_styles = StyleSheet.create({
  section_title: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 16,
    color: colors.blue_primary,
  },
  padding: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});
