export default (() => {
  function GMapsComponent() {
    return <button id="btn">Click me</button>
  }
 
  GMapsComponent.beforeDOMLoaded = `
  console.log("hello from before the page loads!")
  `
 
  GMapsComponent.afterDOMLoaded = `
  document.getElementById('btn').onclick = () => {
    alert('button clicked!')
  }
  `
  return GMapsComponent
}) satisfies QuartzComponentConstructor

