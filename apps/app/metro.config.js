/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const getWatchFolders = () => {
  // https://dushyant37.medium.com/how-to-use-lerna-with-react-native-1eaa79b5d8ec
  const watchFolders = [
    path.resolve(__dirname, '../../', 'packages'), //Relative path to packages directory
    path.resolve(__dirname, '../../', 'node_modules') //Relative path to packages directory
  ];

  console.log({ watchFolders })

  return watchFolders;
}

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  watchFolders: getWatchFolders(),
};
