/* eslint-disable no-undef */
module.exports = function (api) {
  api.cache(true)

  const presets = [ [ "@vue/cli-plugin-babel/preset", { useBuiltIns: "entry" } ] ]
  const plugins = []

  return {
    presets,
    plugins
  }
}
