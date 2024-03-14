export default{
	isWeek,
	getAge,
	comparDate,
	isDuringDate
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