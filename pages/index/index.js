Page({
  
  data: {
    temp: 12,
    weather: "sunny",
    src: "sunny",
    list:""
  },

  onLoad(){
    this.ceshi()

  },

  onPullDownRefresh(){
    
    this.ceshi(wx.stopPullDownRefresh())
  },

  ceshi(func){
    var a = this
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now',
      data:{
        city: "珠海市"
      },
      success:function(res){
        var result = res.data.result.forecast
        let temp = res.data.result.now.temp
        let weather = res.data.result.now.weather
        let list = []
        for(let i = 0; i < 8; i++){
          list.push({time:i*3 + '时',temp:result[i].temp + 'du',weather:result[i].weather})
        }
        a.setData({
          temp: temp,
          weather: weather,
          src: weather,
          list: list
        })
        console.log(result)
        
        // console.log(res)
        // this.setData({
        //   temp: 14,
        //   weather: "clouds"
        // })
      },
      complete: function(){
        func&&func()
      }
    })
  }

})