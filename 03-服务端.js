// 加载模块
const http = require('http');
const urlModel = require('url');

// 开启服务器
http.createServer().on('request',function(req, res) {
    // 利用 url模块里的 parse()截取传递过来的 callback值
    const { pathname: url, query } = urlModel.parse(req.url, true);
    // 判断
    if(url === '/getscript') {
        // 创建对象
        var data = {
            name: 'jack',
            age: 11,
            hobby: '敲代码'
        }

        res.end(`${query.callback}(${JSON.stringify(data)})`);
    } else {
        res.end('404');
    }
}).listen(8080,function() {
    console.log('http://127.0.0.1:8080/getscript');
})