module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@assets': './src/assets',
          '@apis': './src/apis',
          '@components': './src/components',
          '@screens': './src/screens',
          '@stackNav': './src/stackNav',
          '@tabNav': './src/tabNav',
        },
      },
    ],
    ['nativewind/babel'],
  ],
};
