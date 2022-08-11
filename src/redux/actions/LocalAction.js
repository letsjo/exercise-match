import localAPI from "../../apis/localAPI";

function loadLocalList() {
  $.ajax({
    type: "get",
    url: "https://api.vworld.kr/req/data?key=CEB52025-E065-364C-9DBA-44880E3B02B8&domain=http://localhost:8080&service=data&version=2.0&request=getfeature&format=json&size=1000&page=1&geometry=false&attribute=true&crs=EPSG:3857&geomfilter=BOX(13663271.680031825,3894007.9689600193,14817776.555251127,4688953.0631258525)&data=LT_C_ADSIDO_INFO",
    async: false,
    dataType: "jsonp",
    success: function (data) {
      let html = "<option>선택</option>";

      data.response.result.featureCollection.features.forEach(function (f) {
        console.log(f.properties);
      });

      $("#sido_code").html(html);
    },
    error: function (xhr, stat, err) {},
  });
}

export const LocalAction = {
  loadLocalList,
};
