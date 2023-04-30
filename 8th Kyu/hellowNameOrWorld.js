// answer
function hello(name) {
  if (!name) {
    return `Hello, World!`;
  } else {
    const finalName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return `Hello, ${finalName}!`;
  }
}
