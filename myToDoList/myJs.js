function getNow(){
    var now = new Date();
    var week=['日','一','二','三','四','五','六'];
    re = now.toLocaleDateString()+" 星期"+week[now.getDay()];
    return re
}

const note = {
    data(){
        return {
            current: getNow(),
            content: "",
            proity: 1,
            index: -1,
            tishi: "test",
            txts: [
                {
                    p: "帮张奶奶洗被子",
                    time: '2021/7/7 星期五',
                    proity: 3
                },
                {
                    p: "提醒赵赢买机票",
                    time: '2021/7/8 星期六',
                    proity: 2
                },
                {
                    p: "帮张宜买《百年孤独》",
                    time: '2021/7/8 星期六',
                    proity: 4
                },
                {
                    p: "帮陈进照顾小猫",
                    time: '2021/7/8 星期六',
                    proity: 5
                },
                {
                    p: "回家的时候买蛋糕",
                    time: '2021/7/8 星期六',
                    proity: 1
                }
            ],
        }
    },
    methods:{
        submit(){
            if(this.content.trim().length == 0){
                this.content = "";
                this.tishi = "不能为空！";
                document.getElementById("warning").style.display = 'block';
                setTimeout(() => {
                    document.getElementById("warning").style.display = 'none';
                }, 2000);
            }
            else{
                if(this.index==-1){
                    this.txts.unshift({p:this.content, time: this.current, proity: this.proity});
                }
                else{
                    index = this.index;
                    this.txts[index].p = this.content;
                    this.txts[index].time = getNow();
                    this.txts[index].proity = this.proity;
                }
                this.proity = 1;
                this.content = "";
                this.current = getNow();
                this.index = -1;

                this.tishi = "操作已完成！";
                document.getElementById("warning").style.backgroundColor = 'palegreen';
                document.getElementById("warning").style.display = 'block';
                setTimeout(() => {
                    document.getElementById("warning").style.display = 'none';
                }, 1000);
            }
            
        },
        del(i){
            this.txts.splice(i, 1);
        },
        updateInfo(i){
            var newCon = this.txts[i];
            this.content = newCon.p;
            this.proity = newCon.proity;
            this.index = i;
        },
        sortByProity(){
            var info = this.txts;
            info.sort((a, b)=>{
                return b.proity-a.proity
            });
            this.txts = info;
        },
    }
}
Vue.createApp(note).mount("#memo")