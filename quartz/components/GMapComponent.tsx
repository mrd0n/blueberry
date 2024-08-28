// @ts-ignore: typescript doesn't know about our inline bundling system
// so we need to silence the error
import script from "./scripts/gmaps.inline"
 
export default (() => {
  function GMapComponent() {
    return <button id="btn">Click me</button>
  }
 
  GMapComponent.afterDOMLoaded = script
  return GMapComponent
}) satisfies QuartzComponentConstructor

