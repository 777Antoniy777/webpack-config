async function start() {
  const str = await Promise.resolve('async function');

  return str;
}

start().then(res => {
  console.log(res);
  return res;
});

class Util {
  static id = 'Staic Class value';
}

console.log(Util.id)

import('lodash').then(_ => {
  console.log(_.random(0, 42, true))
})


