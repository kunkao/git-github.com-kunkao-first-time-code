function callNumber(queue,counterNumber){
    call = "ลูกค้าคิวที่ " + queue + "เชิญที่ช่องบริการหมายเลข " + counterNumber + " ค่ะ";
    console.log (call)
}
callNumber("230","3");

function guest(pax, queueType){
    runQueue = "จำนวนลูกค้า " + pax + " ท่าน ได้รับเป็นคิว " + queueType + " นะคะ" ;
    console.log (runQueue)
}
guest("1 ","A");
guest("2 ","A");
guest("3 ","A");
guest("4 ","A");
guest("5 ","B");