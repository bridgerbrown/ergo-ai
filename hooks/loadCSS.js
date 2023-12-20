async function loadCSS(component) {
  const request = await fetch(`./components/${component}.css`);
  styles.textContent = await request.text();
};

export default loadCSS;
