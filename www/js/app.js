// This is a JavaScript file
//mobile backendのAPIキーを設定
var ncmb = new NCMB("YOUR_APIKEY","YOUR_CLIENTKEY");


//データをmobile backendに保存するメソッド
function saveData(){
    //クラス名を指定して新規クラスを作成
    var Data = ncmb.DataStore("Data");

    //Dataクラスのインスタンスを作成
    var data = new Data();

    //作成したインスタンスのaisatsuというフィールドに文字データを設定
    data.set("aisatsu", "hello, world!");

    //設定したデータをmobile backendに保存
    data.save()
        .then(function(object) {
              //成功する時の処理
              $("#message").html("<p>データ保存に成功!</p>");
          })
        .catch(function(error) {
              //エラーが発生する時の処理
              $("#message").html("error:" + error.message);          
          });
}

/*
$(function(){

  //ログイン機能  
  // ログインの実行
  $(document).on('click', '#loginBtn', function(){

    // 変数の定義
    var MC = monaca.cloud;
    var id = $('#username').val();
    var pass = $('#password').val();

    // 1. Monacaバックエンドの認証を行う
    MC.User.login(id, pass)
    
    // 2. 認証成功
    .done(function(){
      
      MC.User.getProperty("address")
      .done(function(result){ console.log(result); })
      .fail(function(err){ console.log(err); })
      
      monaca.pushPage("success.html");
    })
  
    // 3. 認証失敗
    .fail(function(err){
      alert('認証失敗');
    });
  });

  //ユーザ登録機能
  // 登録処理の実行
  $(document).on('click', '#registerBtn', function(){

    // 変数の定義
    var MC = monaca.cloud;
    var username = $('#username').val();
    var password = $('#password').val();
    var address  = $('#address').val();
    var role     = $('#role').val();
    var zip      = $('#zip').val();

    // 1. Monacaバックエンドの登録処理を行う
    MC.User.register( username , password,
                      {"address": address ,
                      "role": role,
                      "zip": zip })
                      
    // 2. 登録成功
    .done(function(result){
        monaca.pushPage('success.html');
    })

    // 3. 登録失敗
    .fail(function(err){
        alert("登録失敗");
    });
  });
  

  //コンパス機能
  // 方位取得処理の実行
  $(document).on('click', '#compassBtn', function(){

    // 1. デバイスの準備が出来たら方位を取得
    $(document).on('deviceready', 
       (function() {
        navigator.compass.getCurrentHeading(
          
          // 2. 方位取得成功
          function(heading) {
            $('#compassData').text ('現在の方位:' + heading.magneticHeading);
          },
          // 3. 方位取得失敗
          function(err) {
            alert('取得失敗');
          });
        })()
    )
  });

  // キャンセルボタン(id="cancelBtn")がクリックされたらindex.htmlに遷移する
  $(document).on('click', '#cancelBtn', function(){
    alert('app-canvelBtn');
    monaca.home();
  });
  

});
*/
