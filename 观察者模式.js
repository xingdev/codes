/**
 * 观察者模式定义了
 * 对象之间一对对多的依赖关系，
 * 当一个对象改变了状态，它的所有依赖会被通知，
 * 然后自动更新。
 */

function MessageCenter() {
  this.list = [];
}

MessageCenter.prototype.add = function(id, callback) {
  this.list.push({
    id,
    callback
  });
};
MessageCenter.prototype.remove = function(id) {
  var idx = this.list.findIndex(o => o.id === id);
  this.list.splice(idx, 1);
  return this.list;
};

MessageCenter.prototype.publish = function(message) {
  this.list.forEach(sub => {
    sub.callback(message);
  });
};

MessageCenter.prototype.subscribe = function(f) {
  var id = Math.random();
  this.add(id, f);
};

var messageCenter = new MessageCenter();

function observer() {
  messageCenter.subscribe(function(message) {
    console.log(`<div>${message}</div>`);
  });
}
function observable(obj) {
  //被观察对象
  return Object.keys(obj).forEach(key => {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      get: function() {},
      set: function(value) {
        messageCenter.publish(value);
      }
    });
  });
}

observer();

var data = {
  a: 1
};

observable(data);

data.a = 2;
