<template>
	<view class="segment-demo">
		<u-navbar title="segment" :fixed="true" :placeholder="true" :autoBack="true"></u-navbar>
		<view class="segment">
			<view
				v-for="(item, index) in items"
				:key="index"
				:class="{ active: currentIndex === index }"
				@click="onSegmentClick(index)">
				{{ item.title }}
			</view>
		</view>
		<view v-show="currentIndex === 0">内容区域1</view>
		<view v-show="currentIndex === 1">内容区域2</view>
	</view>
</template>


<script>
export default {
  data() {
    return {
      items: [
        { title: '左端' },
        { title: '右端' },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    onSegmentClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.segment {
  display: flex;
  border-radius: 20px; /* 胶囊形状 */
  width: 300rpx;
  height: 80rpx;
  margin-left: 30rpx;
  margin-top: 30rpx;
}

.segment > view {
  flex: 1;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  color: #333;
  background-color: white;
  border: none;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  position: relative;
  overflow: hidden;
}

.segment > view:first-child {
  border-left: none;
}

.segment > view:last-child {
  border-right: none;
}

.segment > view.active {
  color: white;
  background-color: red;
  box-shadow: inset 0 -2px 0 0 red; /* 下边框红色以模拟完整胶囊形状 */
}
</style>