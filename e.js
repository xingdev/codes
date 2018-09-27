var datas = {
  node: "div",
  children: [
    {
      node: "span",
      children: [{ node: "text" }]
    },
    { node: "img" }
  ]
};

var res = [];

function dfs(tree) {
  res.push(tree.node);
  if (tree.children) {
    tree.children.forEach((v, idx) => {
      dfs(v);
    });
  }
}

var res2 = [];

function bfs(tree) {
  const array = Array.from[tree];
  const layers = [];
  for (let i = 0; i < array.length; i++) {
    layers.push(array[i]);
  }
  var rootIdx = 0;
  while (array.length) {
    const a = array.shift();
    if (a.children.length) {
      Array.prototype.push.apply(array, Array.from(array.children));
      layers = layers[rootIdx] + 1;
      for (let i = 0; i < array.children.length; i++) {
        layers.push(array.children[i]);
      }
    }
    rootIdx++;
  }
}

dfs(datas);

bfs(datas);

console.log(res2);
