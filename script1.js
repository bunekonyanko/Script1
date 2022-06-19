function utcToJSTime(utctime){
    return utctime*1000;
}
function ajaxRequest(lat,long){
    const ur="https://api.openweathermap.org/data/2.5/forecast";
    const appId="api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";
$.ajax({
    url:ur,
    data:{
      appid:appId,
      lat:lat,
      lon:long,
      units:"metric",
      lang:ja
    }
})
.done(function(data){
    cousole.log(data)

    console.log("都市名:"+data.city.name);
    console.log("国名:"+data.city.country);
    data.list.forEach(function(forecast,index){
        const datetime= new Date(utcToJSTime(forecast.dt));
        const month = datetime.getMonth()+1;
        const date = datetime.getDate();
        const hours = datetime.getHours();
        const min =String(dateTime.getMinutes()).padStart(2,"0");
        const template=Math.round(forecast.main.temp)
        const description=forecast.weather[0].description;
        const iconpath = `images/${forecast.weather[0].icon}.svg`;

        cousole.log("日時"+`${month}/${Date} ${hours}:${min}`);
        console.log("気温"+template);
        console.log("気温"+description);
        console.log("画像パス"+iconpath);
    })
  })
class MyExtension {
    getInfo() {
      return {
        id: '天気取得',
        name: 'Cool Extension',
        blocks: [
          {
            opcode: 'hello',
            blockType: Scratch.BlockType.REPORTER,
            text:"天気",
            arguments:{
                天気:{
                    type: Scratch.ArgumentType.STRING,
                    defaultValue:'tokyo'
                }
            }
          }
        ]
      };
    }
    hello() {
      return description;
    }
  }
  Scratch.extensions.register(new MyExtension());
}