const domain = "http://localhost:8090"
const service = async (config) => {
    config['baseUrl'] = ''
    return new Promise((relove, reject) => {
        let data = {};
        if (config.method === "get") {
            for (let key in config.params) {
                if (config.params[key] || config.params[key] === 0) {
                    data[key] = config.params[key]
                }
            }
        }
        if (config.method === "post") {
            data = config.data
        }
        // 获取token
        let token = wx.getStorageSync("token")
        wx.request({
            url: domain + config.baseUrl + config.url,
            method: config.method,
            data: data,
            header: {
                token: token,
                'Content-Type': 'application/json'
            },
            success: function (res) {
                relove(res)
            },
            fail: function (error) {
                reject(error)
            }
        });
    })
};


export default service