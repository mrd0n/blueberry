export default (() => {
  function GMapsComponent() {
    return <button>Click me please</button>
  }
 
  GMapsComponent.beforeDOMLoaded = `
  console.log("hello from before the page loads!")
  `
  return GMapsComponent
}) satisfies QuartzComponentConstructor

