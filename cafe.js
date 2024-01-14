// let shopName = "Wellcom"
// let nickName = "kao"
// let openTime = "07:00 am"
// let colseTime = "05:00 pm"
// let tel = "09xxxxxxx"
// let recommandMenu = " Dirty Coffee"
// message = "Welcome to"+ " " + shopName;
// orderReadyMessage = "ออเดอร์ คุณ " + nickName + recommandMenu + " ได้แล้วค่ะ";
// console.log(message)
// console.log(orderReadyMessage)

// nickName = "plu"
// shopName = "Timber cafe "
// recommandMenu = " ชาไทยปั่น"
// message = "ยินดีต้อนรับ " + shopName + " ลูกค้าแสกนคิวอาร์โค้ดดูเมนูได้ที่โต๊ะเลยนะคะ";
// orderReadyMessage = "ออเดอร์ คุณ " + nickName + recommandMenu + " ได้แล้วค่ะ";
// console.log(message)
// console.log(orderReadyMessage)

function hiWelcome(shopName){
    message = "ยินดีต้อนรับ " + shopName + "ลูกค้าแสกนคิวอาร์โค้ดดูเมนูได้ที่โต๊ะเลยนะคะ";
    console.log (message)
}
hiWelcome("Timber cafe ");

function suggestMenu(number,menu){
    shopMenu = "ออเดอร์ที่ " + number + menu + "ได้แล้วนะคะ";
    console.log (shopMenu)
}
suggestMenu(menu = "นมสดร้อน ", number = "23 ");
suggestMenu(menu = "ชาไทย", number = "24 ");
suggestMenu(menu = "คาปูชิโน่", number = "25 ");
suggestMenu(menu ="โซดามะนาว", number = "26 ");
