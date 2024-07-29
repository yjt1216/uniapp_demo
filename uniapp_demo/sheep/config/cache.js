const Cache = {
    // 设置缓存(expire为缓存时效，单位为秒)
    set(key, value, expire) {
        const now = this.time();
        let data = {
            expire: expire ? (now + expire * 1000) : 0, // 转换为毫秒
            value
        };

        // 直接存储JSON字符串
        uni.setStorageSync(key, JSON.stringify(data));
        return true; // 假设存储成功，返回true
    },
    get(key) {
        try {
            const dataStr = uni.getStorageSync(key);
            if (!dataStr) {
                return false; // 如果没有找到缓存项，返回false
            }
            const data = JSON.parse(dataStr);
            if (data.expire && data.expire < this.time()) {
                // 如果过期，从缓存中删除并返回false
                uni.removeStorageSync(key);
                return false;
            } else {
                return data.value; // 返回缓存的值
            }
        } catch (e) {
            return false; // 如果解析缓存项时出错，返回false
        }
    },
    // 其他方法保持不变...

    // 移除特定缓存项
    remove(key) {
        if (key) {
            uni.removeStorageSync(key);
        }
    },

    // 清空所有缓存
    removeAll() {
        uni.clearStorage();
    },

    // 获取当前时间戳（秒为单位）
    time() {
        return Math.round(new Date() / 1000);
    }
};

export default Cache;