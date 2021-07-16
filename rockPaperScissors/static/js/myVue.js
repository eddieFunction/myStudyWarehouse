const game = {
    data(){
        return{
            name: "剪刀石头布",
            tishi: "",
            index: 0,
            src: "",
            resultPic: "",
            thshi: "~",
            first: "未开始！",
            second: "未开始！",
            third: "未开始！",
            forth: "未开始！",
            fifth: "未开始！",
            result: "~",
            peoc: 0,
            comc: 0,
            pics:[
                {
                    op:'jiandao',
                    url:'../static/origin_pics/jiandao.jpg'
                },
                {
                    op:'shitou',
                    url:'../static/origin_pics/shitou.jpg'
                },
                {
                    op:'bu',
                    url:'../static/origin_pics/bu.jpg'
                }
            ]
        }
    },
    created:function(){
        var constraints = {audio: true, video: {width: 224,height: 224}};
        // 开启视频
        navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream){
            console.log('getUserMedia:', mediaStream)
            var video = document.querySelector('video');
            video.srcObject = mediaStream;
            video.onloadedmetadata = function(e) {
                video.play();
            };          
        }).catch(function(err) {
            console.log(err.name + ": " + err.message);
        });

        var that = this;
        document.onkeydown = function(e){
            let key = window.event.keyCode;
            if(key==13){
                that.takePic();
            }
            else if(key==32){
                that.refresh();
            }
        }
    },
    mounted:function(){
        this.cyclePic();
    },
    methods:{
        cyclePic(){
            var that = this;
            var itv = setInterval(cycle, 500);    
            function cycle(){
                that.index++;
                if(that.index == 3){
                    that.index = 0;
                }
                that.src = that.pics[that.index].url;
            }
        },
        takePic(){
            var that = this;
            // 使用canvas进行截图（拍照）
            var canvas = document.getElementById('canvas');
            canvas.getContext('2d').drawImage(video, 0, 0, 224, 224);
            // $('img').css('src', canvas.toDataURL("image/png")); //toDataURL()方法是返回一个包含图片展示的数据URL,
                    
            
            var comp = that.src;
            that.resultPic = comp;
            document.getElementById('resultPic').style.display = 'block';
            var Pic = document.getElementById("canvas").toDataURL("image/png");//获得图片的base64编码
            Pic = Pic.replace(/^data:image\/(png|jpg);base64,/, "");
        
            // var cs = comp.slice(70, -4); //本地
            var cs = comp.slice(22, -4); //localhost

            var cmp1 = {jiandao: 0, shitou: 2, bu: 3};
            var cmp2 = {Two: 'jiandao', Fist: 'shitou', Five: 'bu'};
            var cmp3 = {Two: 0, Fist: 1, Five: 2};

            //发送数据到服务器
            $.ajax({
                type: 'POST',
                url: '/play',
                data: {"peo": Pic},
                dataType: 'json',
                success: function(msg){
                    console.log(cs);
                    var ans = 'unknown-sign';
                    var re = '';
                    for(var i = 0; i < msg.result.length; i++){
                        re = msg.result[i].classname;
                        if(re=='Two' || re=='Fist' || re=='Five'){
                            ans = re;
                            break;
                        }
                    }
                    if(ans == 'unknown-sign'){
                        document.getElementById("tishi").innerHTML = "出错！请再拍一张照片(大部分区域包括剪刀石头布的动作)";
                        setTimeout(()=>{
                            document.getElementById("tishi").innerHTML = "";
                        }, 2000)
                    }
                    else if(cs==cmp2[ans]){
                        document.getElementById("tishi").innerHTML = "打平！请继续比赛！";
                        setTimeout(()=>{
                            document.getElementById("tishi").innerHTML = "";
                        }, 2000)
                    }
                    else{
                        function solve(id){
                            if(cmp2[ans]=="bu" && cs=="jiandao"){
                                a1 = "你输了~";
                                that.comc++;
                            }
                            else if(cmp2[ans]=="jiandao" && cs=="bu"){
                                a1 = "你赢了！";
                                that.peoc++;
                            }
                            else if(cmp1[ans]<cmp3[cs]){
                                a1 = "你输了~";
                                that.comc++;
                            }
                            else{
                                a1 = "你赢了！";
                                that.peoc++;
                            }
                            return a1;
                        }
                   
                        a = that.first;
                        b = that.second;
                        c = that.third;
                        d = that.forth;
                        e = that.fifth;

                        if(a=="未开始！"){
                            result = solve('first');
                            that.first = result;
                        }
                        else if(b=="未开始！"){
                            result = solve('second');
                            that.second = result;
                        }
                        else if(c=="未开始！"){
                            result = solve("third");
                            that.third = result;
                        }
                        else if(d=="未开始！"){
                            result = solve("forth");
                            that.forth = result;
                        }
                        else if(e=="未开始！"){
                            result = solve("fifth");
                            that.fifth = result;
                        }
                    
                        d=['first', 'second', 'third', 'forth', 'fifth'];
                        for(var i = 0; i < d.length; i++){
                            w = d[i];
                            if(w=='你输了~'){
                                that.comc++;
                            }
                            else if(w=='你赢了！'){
                                that.peoc++;
                            }
                        }
                        if(that.peoc+that.comc==5){
                            if(that.peoc > that.comc){
                                that.result = "恭喜你获得最终的胜利！！！";
                            }
                            else{
                                that.result = "很遗憾，你输了~~~";
                            }
                        }
                    }
                },
                error:function(msg){  
                    console.log("msg");
                }
            });  
        },
        refresh(){
            location.reload();
        }
    }
}
Vue.createApp(game).mount('#gamearea')