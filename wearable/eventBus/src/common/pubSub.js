export default class PubSub {
  constructor() {
    this.events = {}
  }
  $on(event, callback) {
    if (!this.events[event]) {
        this.events[event] = []
    }
    // 每次只绑定一个函数
    if (!this.events[event].length) {
        this.events[event].push(callback)
    }
  }
  $emit(event, ...args) {
    if (this.events[event]) {
        this.events[event].forEach(callback => callback(...args))
    }
  }
  $off(event) {
    if (this.events[event]) {
        delete this.events[event]
    }
  }
  $judge(event) {
    return !!this.events[event]
  }
}