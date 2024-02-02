## 2.1.9（2022-11-15）
- 修改bug：没有抛出ended事件
## 2.1.8（2022-10-31）
- 添加参数
	- initialTime: 指定视频初始播放位置，单位为秒 (s)
- 添加事件
	- ended: 当播放到末尾时触发 ended 事件
## 2.1.7（2022-09-19）
- 修改bug：取消全屏，隐藏全部遮罩
## 2.1.6（2022-09-15）
- 添加参数
	- custom：是否添加自定义按钮
	- customName：自定义按钮名称
	- onlyShowCustomInFullscreen：只全屏下显示custom按钮
- 添加slot
	- custom：自定义控件
## 2.1.5（2022-08-09）
- 添加changeDefinition事件，切换清晰度
## 2.1.4（2022-08-08）
- 修改设备方向触发全屏的角度
## 2.1.3（2022-08-08）
- 修改bug：是否全屏的判断
## 2.1.2（2022-08-08）
- 修改bug：live-player 点击右下角icon全屏，direction传入事件参数event的bug (*/ω＼*)
## 2.1.1（2022-08-05）
- 添加参数
	- autoFullScreen: 设备方向变化，是否自动全屏
## 2.1.0（2022-07-14）
- 组件兼容 vue3，如何创建vue3项目，详见 [uni-app 项目支持 vue3 介绍](https://ask.dcloud.net.cn/article/37834)
## 2.0.3（2022-07-06）
- 添加参数
	- autoSwitchComp: 使用live-play 视频格式不是flv、rtmp，是否自动切换video
## 2.0.2（2022-07-04）
- 添加参数
	- showPlayBtn: live-player 是否显示播放/暂停按钮
	- showFullScreenBtn: live-player 是否显示全屏按钮
## 2.0.1（2022-07-01）
- 修改样式，优化逻辑
## 2.0.0（2022-07-01）
- 添加组件 live-player 实时音视频播放
- 添加参数
	- useLivePlayer: 是否切换使用 live-player
	- mode: live-player 模式 live(直播), RTC(实时通话, 该模式时延更低)
	- muted: live-player 是否静音
	- orientation: live-player 画面方向
## 1.1.0（2022-04-11）
- 添加参数
	- 倍速播放: playbackrate
	- 非全屏时，切换播放控件显示/隐藏顶部视频标题: controlsToggleTitle
	- 加载中样式: loading
## 1.0.1（2022-03-22）
- 添加参数：右上角文本 upperRightText
## 1.0.0（2022-01-19）
- 视频播放器组件 video-player
- 非wifi网络提示流量播放
- 微信小程序可切换清晰度
