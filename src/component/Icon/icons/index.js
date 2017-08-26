export default function (name) {
  //  Ensure require.context is noop if unavailable
  if (global.noRequireContext) {
    return () => null;
  }

  const context = require.context('./', false, /\.(svg)$/);
  return context.keys()
    .filter(key => key.indexOf(name) !== -1)
    .map(context);
}
