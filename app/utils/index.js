export const getSizes = (_window) => {
  const canUseDOM = typeof _window !== 'undefined';

  return {
    width: canUseDOM ? _window.innerWidth : null,
    height: canUseDOM ? _window.innerHeight : null,
    orientation: canUseDOM ? _window.screen.orientation.type : null,
    canUseDOM,
  }
}
