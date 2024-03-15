export default{
	isWeek,
	getAge,
	comparDate,
	isDuringDate,
	timeFormat,
}

export function isDuringDate(curDateStr,beginDateStr,endDateStr){
	const cur = new Date(curDateStr)*1000
	const begin = new Date(beginDateStr).getTime()
	const end = new Date(endDateStr).getTime()
	if(cur >= begin && cur <= end){
		return true
	}
	return false
}

// 判断是不是周末
export function isWeek(date){
	var _date = new Date(date);
	return _date.getDay(_date)
}

/**
 * @param {Object} datevalue
 * dateValue是当前选择的日期时间。
 * 如果返回的是true，则证明所选时间小于当期日期。
 * 如果返回的是false，则证明所选时间大于当前日期。
 */
export function comparDate(selecttime){
	var result = new Date().getTime() > new Date(selecttime).getTime() + 3600 * 1000 * 24
	return result;
}
//根据出生日期计算年龄
export function getAge(strAge){
	var birArr = strAge.split("-");
            var birYear = birArr[0];
            var birMonth = birArr[1];
            var birDay = birArr[2];

            d = new Date();
            var nowYear = d.getFullYear();
            var nowMonth = d.getMonth() + 1; //记得加1
            var nowDay = d.getDate();
            var returnAge;

            if (birArr == null) {
                return false
            };
            var d = new Date(birYear, birMonth - 1, birDay);
            if (d.getFullYear() == birYear && (d.getMonth() + 1) == birMonth && d.getDate() == birDay) {
                if (nowYear == birYear) {
                    returnAge = 0; // 
                } else {
                    var ageDiff = nowYear - birYear; // 
                    if (ageDiff > 0) {
                        if (nowMonth == birMonth) {
                            var dayDiff = nowDay - birDay; // 
                            if (dayDiff < 0) {
                                returnAge = ageDiff - 1;
                            } else {
                                returnAge = ageDiff;
                            }
                        } else {
                            var monthDiff = nowMonth - birMonth; // 
                            if (monthDiff < 0) {
                                returnAge = ageDiff - 1;
                            } else {
                                returnAge = ageDiff;
                            }
                        }
                    } else {
                        return  "出生日期晚于今天，数据有误"; //返回-1 表示出生日期输入错误 晚于今天
                    }
                }
                return returnAge;
            } else {
                return ("输入的日期格式错误！");
            }
}

/**
  * 格式化时间
  timeFormat | date(timestamp, format = "yyyy-mm-dd")
  该函数必须传入第一个参数，第二个参数是可选的，函数返回一个格式化好的时间。
  time <String> 任何合法的时间格式
  format <String> 时间格式，可选。
  默认为yyyy-mm-dd，年为"yyyy"，月为"mm"，日为"dd"，时为"hh"，分为"MM"，秒为"ss"，格式可以自由搭配
  如： yyyy:mm:dd，yyyy-mm-dd，yyyy年mm月dd日，yyyy年mm月dd日 hh时MM分ss秒，yyyy/mm/dd/，MM:ss等组合
*/
export function timeFormat (dateTime = null, fmt = 'yyyy-mm-dd') {
	// 如果为null,则格式化当前时间
	if (!dateTime) dateTime = Number(new Date())
	// 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
	if (dateTime.toString().length === 10) dateTime *= 1000
	const date = new Date(dateTime)
	let ret
	const opt = {
	  'y+': date.getFullYear().toString(), // 年
	  'm+': (date.getMonth() + 1).toString(), // 月
	  'd+': date.getDate().toString(), // 日
	  'h+': date.getHours().toString(), // 时
	  'M+': date.getMinutes().toString(), // 分
	  's+': date.getSeconds().toString() // 秒
	  // 有其他格式化字符需求可以继续添加，必须转化成字符串
	}
	for (const k in opt) {
	  ret = new RegExp('(' + k + ')').exec(fmt)
	  if (ret) {
		fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')))
	  }
	}
	return fmt
  }