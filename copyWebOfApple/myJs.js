const info1 = {
    data(){
        return {
            txt:[
                {
                    id: "first",
                    name: "iPhone 12",
                    desc: "升维大提速",
                    price: "RMB 229/月或 RMB 5499 起，",
                    change: "还可折扣换购。",
                    know: "进一步了解 >",
                    buy: "购买 >",
                    pic:"./img/1.jpg"
                },
                {
                    id: "second",
                    name: "iPhone 12 Pro",
                    desc: "自我再飞跃",
                    price: "RMB 354/月或 RMB 8499 起，",
                    change: "还可折扣换购。",
                    know: "进一步了解 >",
                    buy: "购买 >",
                    pic:"./img/2.jpg"
                },
                {
                    id: "third",
                    name: "iPad Pro",
                    desc: "由Apple M1芯片强势驱动",
                    price: "",
                    change: "",
                    know: "进一步了解 >",
                    buy: "购买 >",
                    pic:"./img/3.jpg"
                }
            ]
        }
    }
}
Vue.createApp(info1).mount("#apple1")

const info2 = {
    data(){
        return {
            txt: [
                {
                    id: "forth",
                    name: "iMac",
                    desc: "新开篇",
                    know: "进一步了解 >",
                    buy: "购买 >",
                    pic:"./img/4.jpg"
                },
                {
                    id: "sixth",
                    name: "watchOS 8",
                    desc: "发掘内在，实力跳级。",
                    know: "先睹为快 >",
                    buy: "",
                    pic:"./img/6.jpg"
                },
                {
                    id: "eighth",
                    name: "iOS 15",
                    desc: "更有聊，更专注。",
                    know: "",
                    buy: "先睹为快 >",
                    pic:"./img/8.jpg"
                }
            ]
        }
    }
}
Vue.createApp(info2).mount("#apple2")

const info3 = {
    data(){
        return {
            txt: [
                {
                    id: "fifth",
                    name: "国际系列",
                    desc: "各色表带，加入你的戴表团。",
                    know: "选购该系列表带 >",
                    buy: "",
                    pic:"./img/5.jpg"
                },
                {
                    id: "seventh",
                    name: "AirTag",
                    desc: "丢三落四这门绝技，要失传了。",
                    know: "进一步了解 >",
                    buy: "购买 >",
                    pic:"./img/7.jpg"
                },
                {
                    id: "ninth",
                    name: "iPadOS",
                    desc: "超得力，不费力。",
                    know: "",
                    buy: "先睹为快 >",
                    pic:"./img/9.jpg"
                }
            ]
        }
    }
}
Vue.createApp(info3).mount("#apple3")