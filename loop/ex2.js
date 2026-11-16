// function นี้เอาใว้หา ตัวเลขที่ต้องการในตัวแปร array ชื่อ d
// ตัวแปร find คือค่าที่ต้องการหาว่า มีเลข 5 ใน d ไหม

function BinarySearch(d, find, left, right) {
    if (left > right) {
        return -1
    }

    var mid = (left + right) / 2

    if (find == d[mid]) {
        return mid

    } if (find < d[mid]) {
        return BinarySearch(d, find, left, mid - 1)
    } else {
        return BinarySearch(d, find, mid + 1, right)
    }
}


// Error มันบอกว่า index -1 ไม่ได้ประกาศเอาใว้ มันเกิดขึ้นจา่กอะไรช่วยแก้หน่อย
var find = 5
const d = [1, 2, 3, 4, 5, 6, 7]
result = BinarySearch(d, find, 0, d.length)
console.log(`I want search : Get ${d[result]} index ${result} = ${d[result]}`)