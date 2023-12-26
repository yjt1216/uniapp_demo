// app 缓存
const localStore = {
	// 设置缓存 (expire 为缓存时效)
	set(key, value, expire) {
		let data = {
		  expire: expire ? (this.time() + expire) : "",
		  value,
		};

		if (typeof data === 'object') {
		  data = JSON.stringify(data);
		}

		try {
		  if (process.env.UNI_PLATFORM === 'h5') {
			uni.setStorage({
			  key,
			  data,
			});
		  } else {
			uni.setStorageSync(key, data);
		  }
		} catch (e) {
		  return false;
		}
	},

	async get(key) {
		try {
			let data;
			if (process.env.UNI_PLATFORM === 'h5') {
				await uni.getStorage({
					key,
					success: (res) => {
						data = res.data;
					},
				});
			} else {
				data = uni.getStorageSync(key);
			}

			const { value, expire } = JSON.parse(data);

			if (expire && expire < this.time()) {
				if (process.env.UNI_PLATFORM === 'h5') {
					uni.removeStorage({ key });
				} else {
					uni.removeStorageSync(key);
				}
				return false;
			} else {
				return value;
			}
		} catch (e) {
			return false;
		}
	},

	getMap() {
		try {
			let data = uni.getStorageInfoSync();
			return data;
		} catch (e) {
			return false;
		}
	},

	// 获取当前时间
	time() {
		return Math.round(new Date() / 1000);
	},

	remove(key) {
		if (key) {
			if (process.env.UNI_PLATFORM === 'h5') {
				uni.removeStorage({ key });
			} else {
				uni.removeStorageSync(key);
			}
		}
	},

	removeAll() {
		uni.clearStorage();
	},
};

export default localStore;