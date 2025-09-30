let startX = 0
let startY = 0
let isVertical = null

export default {
  
    onTouchStart(event, state) {
      startX = event.touches[0].clientX
      startY = event.touches[0].clientY
      isVertical = null
      state.touchStartY = startY 
    },

    onTouchMove(event, state) {
      const moveX = event.touches[0].clientX - startX
      const moveY = event.touches[0].clientY - startY
      // 第一次判断方向
      if (isVertical === null) {
        isVertical = Math.abs(moveY) > Math.abs(moveX)
      }
      console.log(isVertical, "isvertical")

      if (isVertical) {
        // 垂直滑动 → 控制页面
        state.translateY = moveY
        state.opacity = 1 - Math.min(Math.abs(moveY) / 300, 1)
      } else {
        return
      }
    },

    onTouchEnd(event, state, minSwipeDistance = 100) {
      if (!isVertical) {
        return 2
      }
      isVertical = null
      state.touchEndY = event.changedTouches[0].clientY
      const deltaY = state.touchStartY - state.touchEndY
      console.log(deltaY, "deltay")
      if (Math.abs(deltaY) > minSwipeDistance) {
        return deltaY > 0 ? 1 : -1  // 返回滑动方向
      } else {
        return 0
      }
    },

}

export function resetPagePosition(state) {
  state.opacity = 1
  state.translateY = 0;
}