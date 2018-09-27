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

var datas2 = {
  node: "div",
  children: [
    {
      node: "span",
      children: [{ node: "input" }]
    },
    { node: "img" }
  ]
};
var res = [];
function dfs(t1, t2) {
  if (t1.node !== t2.node) {
    res.push({
      type: "diff",
      t1: t1.node,
      t2: t2.node
    });
  }
  if (t1.children) {
    t1.children.forEach((v, idx) => {
      if (t2.children) {
        dfs(v, t2.children[idx]);
      }
    });
  }
}

dfs(datas, datas2);

console.log(res);
