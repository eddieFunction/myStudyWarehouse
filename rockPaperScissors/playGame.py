from flask import Flask, request, render_template, jsonify
import requests, base64, os
from flask_cors import *
app = Flask(__name__)
CORS(app, supports_credentials=True)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/play', methods=['POST'])
def playGame():
    if request.method=='POST':
        pic_str = request.form['peo']
        base64_to_img(pic_str) #保存图片
        result = getResult()
        print(result)
        return jsonify(result)

def base64_to_img(bstr):
    file_path = 'static/user_pics/user_pic.png'
    imgdata = base64.b64decode(bstr)
    file = open(file_path, 'wb')
    file.write(imgdata)
    file.close()

def getResult():
    request_url = "https://aip.baidubce.com/rest/2.0/image-classify/v1/gesture"
    # 二进制方式打开图片文件
    f = open('static/user_pics/user_pic.png', 'rb')
    img = base64.b64encode(f.read())

    params = {"image": img}
    access_token = '24.7fd594b29c0561d3c622538776e97127.2592000.1627480471.282335-24457900'
    request_url = request_url + "?access_token=" + access_token
    headers = {'content-type': 'application/x-www-form-urlencoded'}
    response = requests.post(request_url, data=params, headers=headers)
    if response:
        # print (response.json())
        return response.json()

if __name__=='__main__':
    app.run(port=80, debug=False);