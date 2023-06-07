// console.log("this is index.js")
// console.log(document)
// console.log(location)

try {
  // window.onload(() => {
  setTimeout(() => {
    // 简书
    var fixedDoms = Array.from(document.querySelectorAll('[style]')).filter(i => i.style.position.includes('fixed'));
    var imgsDs = fixedDoms.filter(fd => {
      return Array.from(fd.childNodes).find(i => i.nodeName.toLowerCase() === 'img');
    })
    imgsDs.forEach(i => i.style.display = 'none');
    // CSDN
    Array.from(document.querySelectorAll('iframe')).forEach(i => i.style.display = 'none');
  }, 1000);
  // });
} catch (e) {
  throw new Error(e);
}