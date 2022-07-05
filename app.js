const dayName = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"]

let currentDay = new Date(2022,05,07)
let index = currentDay.getDay()
console.log('Hôm nay là ngày '+dayName[index])
