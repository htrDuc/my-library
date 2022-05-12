export default function debounce(fn, delay) {
  return (args) => {
    clearTimeout(fn.id);
    fn.id = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

export default function throttle (fn, delay) {
 return (args) => {
    if(fn.id) return;
    fn.id = setTimeout(() => {
        clearTimeout(fn.id);
      fn.apply(this, args);
      fn.id = null
    }, delay);
  };
}