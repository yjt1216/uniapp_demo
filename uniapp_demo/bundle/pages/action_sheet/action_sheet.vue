<template>
	<view class="action-sheet">
		<nav-bar title="action sheet" backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		<view>
			<u-form :model="student" ref="uForm">
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="120"
					label="姓名" prop="name">
					<u-input placeholder="请输入姓名" v-model="student.name" type="text"></u-input>
				</u-form-item>

				<u-form-item label="学校" label-width="150"  @click="schoolSelectShow = true ;hideKeyboard()" borderBottom>
					<u-input type="select" v-model="student.school"
						placeholder="请选择学校" border="none" disabled></u-input>
				</u-form-item>
				
				<u-form-item label="班级" label-width="150" @click="openClassSelect">
					<u-input type="select" v-model="student.class"
						placeholder="请选择班级" border="none" disabled></u-input>
				</u-form-item>
				
				<u-action-sheet :actions="schoolSelectList" :show="schoolSelectShow"
					@select="schoolSelectCallback" @close="schoolSelectShow = false" cancelText="取消">
				</u-action-sheet>
				
				<u-action-sheet :actions="classSelectList" :show="classSelectShow" 
					@select="classSelectCallback" @close="classSelectShow = false">
				</u-action-sheet>
				
			</u-form>
			<u-button size="default" type='primary' @click="submitForm">提交</u-button>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				student: {
					name: '',
					school: '',
					class: ''
				},
				schoolSelectShow: false,
				classSelectShow: false,
				schoolSelectList: [{
						value: 3,
						name: '第三中学'
					},
					{
						value: 6,
						name: '第六中学'
					},
					{
						value: 9,
						name: '第九中学'
					}
				],
				classSelectList: [], // 实际展示的数据
				classSelectAllList: [{ // // 拿到的全部的数据
					schoolId: 3, // 第三中学
					classListOfSchool:[{
						value: 3,
						name: '第三中学3班'
					},
					{
						value: 2,
						name: '第三中学2班'
					},
					{
						value: 6,
						name: '第三中学6班'
					}]
				},{
					schoolId: 6, // 第六中学
					classListOfSchool:[{
						value: 4,
						name: '第六中学4班'
					},
					{
						value: 9,
						name: '第六中学9班'
					},
					{
						value: 1,
						name: '第六中学1班'
					}]
				},{
					schoolId: 9, // 第九中学
					classListOfSchool:[{
						value: 4,
						name: '第九中学4班'
					},
					{
						value: 2,
						name: '第九中学2班'
					},
					{
						value: 8,
						name: '第九中学8班'
					}]
				}], 
			}

		},
		onShow() {
			this.init();
		},
		computed: {
			getStudentSchoolText: {
				set() {
				},
				// 根据 school 的 value ,遍历学校列表,找到对应的 text
				get() {				
					let SchStr = ''
					this.schoolSelectList.forEach((a, b) => {
						if (a.value == this.student.school) {
							SchStr = a.text;
						}
					})
					return SchStr;
				}
			},
			getStudentClassText: {
				set() {
				},
				// 根据 class 的 value ,遍历班级列表,找到对应的 text
				get() {
					let classStr = ''
					this.classSelectList.forEach((a, b) => {
						if (a.value == this.student.class) {
							classStr = a.text;
						}
					})
					return classStr;
				}
			}
		},
		methods: {
			hideKeyboard() {
				uni.hideKeyboard()
			},
			init() {
				this.student = {
					name: 'pool',
					school: null,
					class: null,
				}
			},
			// 当学校列表被选中后执行的回调函数
			schoolSelectCallback(item) { // 拿到选中的索引值
				console.log('schoolSelectCallback',item)
				// 将列表中索引值对应的 value 赋值给学校
				this.student.school = item.name;
				// 在这需要先将班级信息归零
				this.student.class = null;
				// 获取 学校 id = value 的班级列表赋值给班级列表
				this.classSelectAllList.forEach((a,b)=>{
					if(a.schoolId == this.student.school){
						this.classSelectList = a.classListOfSchool;
					}
				})
				// 这里拿到学校的 value,根据 value 向班级中追加对应的列表
			},
			classSelectCallback(item) {
				uni.hideKeyboard();
				// 将拿到的索引值对应的班级的 value 值赋值给班级
				this.student.class = item.name;
			},
			openClassSelect() {
				if (this.classSelectList.length == 0) { // 班级下拉列表中没有数据
					uni.showToast({
						title:'请先选择学校',
						icon:'none'
					})
				} else {
					// 执行到这里说明班级下拉列表中是有数据的
					this.classSelectShow = true
				}
			},
			submitForm() {
				console.log(this.student)
				this.$toast("学校value:"+this.student.school+"班级value:"+this.student.class,)
			}			
		}
	}
</script>

<style lang="scss">
	.action-sheet{
		
	}
</style>

