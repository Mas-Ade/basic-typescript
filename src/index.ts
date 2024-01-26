// basic typescript

// declare tipe data string
const myName: string = "ade maulana akbar"

// declare tipe data number default
const myNumber = 12345

// declare tipe data number 
const myNumber1:number = 12345

// declare tipe data boolean
const isActive: boolean = true

// declare tipe data array default
const myArray: string[] = ["yaris", "fortuner"]

// declare tipe data tuple array
let myCar: [string, string, number, boolean]
myCar = ["yaris", "fortuner", 10, true]

// declare tipe data any
const myTool1:any = 12345
const myTool2:any = "keyboard"
const myTool3:any = true
const myTool4:any = ["mouse", "laptop"]

// declare tipe data custom
type customData = {
    nama:string,
    isTrue: boolean,
    money: number
}

let panggil : customData 
panggil = {
    nama: "qodier",
    isTrue: true,
    money: 50000
}

// console log
console.log([{myName},
    {myNumber},
    {isActive},
    {myArray},
    {myCar},
    [myTool1, myTool2, myTool3, myTool4],
    {panggil}
    ])

