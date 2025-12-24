const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Add support for additional file types
config.resolver.assetExts.push('svg');

module.exports = withNativeWind(config, { input: './styles/globals.css' });