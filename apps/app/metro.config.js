// /**
//  * Metro configuration for React Native
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
//
// const path = require('path');
//
// const getWatchFolders = () => {
//   // https://dushyant37.medium.com/how-to-use-lerna-with-react-native-1eaa79b5d8ec
//   const watchFolders = [
//     path.resolve(__dirname, '../../', 'packages/fridge'), //Relative path to packages directory
//     path.resolve(__dirname, '../../', 'node_modules') //Relative path to packages directory
//   ];
//
//   console.log({ watchFolders })
//
//   return watchFolders;
// }
//
// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
//   watchFolders: getWatchFolders(),
// };

const blacklist = require("metro-config/src/defaults/exclusionList");
const getWorkspaces = require("get-yarn-workspaces");
const path = require("path");

// https://bit.ly/2LHHTP0
function getConfig(from, options = {}) {
  const workspaces = getWorkspaces(from);

  function getProjectRoots() {
    return [
      // Keep your project directory.
      path.resolve(from),

      // Include your forked package as a new root.
      options.nodeModules || path.resolve(from, "../../", "node_modules")
    ].concat(workspaces);
  }

  console.log(getProjectRoots())

  const config = {
    watchFolders: getProjectRoots(),
    resolver: {
      blacklistRE: blacklist(
          workspaces.map(
              workspacePath =>
                  `/${workspacePath.replace(
                      /\//g,
                      '[/\\\\]'
                  )}[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/`
          )
      ),
      extraNodeModules: {
        "react-native": path.resolve(from, "node_modules/react-native")
      }
    },
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
  };

  return config;
};

module.exports = getConfig(__dirname);
