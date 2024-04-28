 
export function compressImg (img, type = 'image/jpeg', mx = 1000, mh = 1000, quality = 1) {
	return new Promise((resolve, reject) => {
	    const canvas = document.createElement('canvas');
	    const context = canvas.getContext('2d');
	    const { width: originWidth, height: originHeight } = img;
	    // 最大尺寸限制
	    const maxWidth = mx;
	    const maxHeight = mh;
	    // 目标尺寸
	    let targetWidth = originWidth;
	    let targetHeight = originHeight;
	    if (originWidth > maxWidth || originHeight > maxHeight) {
			if (originWidth / originHeight > 1) {
				// 宽图片
				targetWidth = maxWidth;
				targetHeight = Math.round(maxWidth * (originHeight / originWidth));
			} else {
				// 高图片
				targetHeight = maxHeight;
				targetWidth = Math.round(maxHeight * (originWidth / originHeight));
			}
	    }
	    canvas.width = targetWidth;
	    canvas.height = targetHeight;
	    context.clearRect(0, 0, targetWidth, targetHeight);
	    // 图片绘制
	    context.drawImage(img, 0, 0, targetWidth, targetHeight);
	    canvas.toBlob(
			function (blob) {
				resolve(blob);
			},
	       type,
	       quality,
	    );
	});
};
 
// 公共压缩图片函数
export function compressImageToSize(src, targetSizeKb, quality = 80) {
  try {
    // 判断运行环境
	// #ifdef H5
	return compressImg(src);
	// #endif

	// #ifdef MP-MP-WEIXIN
	return compressImageMiniProgram(src, quality);
	// #endif
    
  } catch (error) {
    console.error('图片压缩失败:', error);
    throw error;
  }
}

// H5 端的图片压缩
async function compressImageH5(src, targetSizeKb, quality) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // 调整图片尺寸和质量以达到目标大小
      let width = image.width;
      let height = image.height;
      while (canvas.toDataURL('image/jpeg', quality / 100).length > targetSizeKb * 1024 && quality > 0) {
        quality -= 10;
        width /= 2;
        height /= 2;
        canvas.width = width;
        canvas.height = height;
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(image, 0, 0, width, height);
      }

      canvas.toBlob((blob) => {
        if (blob) {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onload = () => {
            resolve(reader.result); // 返回压缩后的图片DataURL
          };
          reader.onerror = reject;
        } else {
          reject('无法获取图片Blob');
        }
      }, 'image/jpeg', quality / 100);
    };
    image.onerror = reject;
  });
}

// 小程序端的图片压缩
async function compressImageMiniProgram(src, quality) {
  return new Promise((resolve, reject) => {
    uni.compressImage({
		src: src,
		quality: quality,
		success: (compressRes) => {
			resolve(compressRes.tempFilePath); // 返回压缩后的图片路径
		},
		fail: (err) => {
			reject(err); // 压缩失败，返回错误信息
		}
    });
  });
}
