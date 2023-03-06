
import {TOKEN} from '@/config/cachekey.js';
import Cache from '@/utils/cache.js';


// app 状态管理
const state = {
	token: Cache.get(TOKEN) || null
}

export default {
	state
}