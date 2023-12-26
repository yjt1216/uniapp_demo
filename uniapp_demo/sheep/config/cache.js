// cache-tool.js
export default {
  // 设置缓存
  set(key, value) {
    return new Promise((resolve, reject) => {
      uni.setStorage({
        key,
        data: value,
        success() {
          resolve();
        },
        fail(err) {
          reject(err);
        },
      });
    });
  },

  // 获取缓存
  get(key) {
    return new Promise((resolve, reject) => {
      uni.getStorage({
        key,
        success(res) {
          resolve(res.data);
        },
        fail(err) {
          reject(err);
        },
      });
    });
  },

  // 删除缓存
  remove(key) {
    return new Promise((resolve, reject) => {
      uni.removeStorage({
        key,
        success() {
          resolve();
        },
        fail(err) {
          reject(err);
        },
      });
    });
  },

  // 检查键是否存在
  containsKey(key) {
    return new Promise((resolve) => {
      uni.getStorageInfo({
        success(info) {
          const keys = info.keys;
          resolve(keys.includes(key));
        },
      });
    });
  },
};

/* 
 
 // 在你的页面或组件中导入缓存工具
 import CacheTool from '@/utils/cache-tool';
 
 // 在 A 页面保存 open_id
 CacheTool.set('open_id', 'your_open_id')
   .then(() => {
     console.log('open_id saved successfully');
   })
   .catch((err) => {
     console.error('Failed to save open_id:', err);
   });
 
 // 在 B 页面获取 open_id
 CacheTool.get('open_id')
   .then((open_id) => {
     if (open_id) {
       console.log('open_id retrieved:', open_id);
       // 进行后续操作
     } else {
       console.log('open_id not found or expired');
       // 可能需要重新获取
     }
   })
   .catch((err) => {
     console.error('Failed to retrieve open_id:', err);
   });
 
 
 */