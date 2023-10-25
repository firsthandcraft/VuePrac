<template>
  <div class="home">
    <a id="kakao-login-btn" @click="loginWithKakao()">
  <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222"
    alt="카카오 로그인 버튼" />
</a>
<p id="token-result"></p>
<button class="api-btn" onclick="requestUserInfo()" style="">사용자 정보 가져오기</button>

  </div>
</template>

<script>
import "https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js";

export default {
  methods: {
    loginWithKakao() {
      // 카카오 로그인 시도
      console.log(window.Kakao)
      Kakao.Auth.authorize({
        redirectUri: 'http://localhost:5174/kakao-callback',
        state: 'userme',
      });
    },
    requestUserInfo() {
      // 사용자 정보 요청
      Kakao.API.request({
        url: '/v2/user/me',
      })
        .then(function(res) {
          alert(JSON.stringify(res));
        })
        .catch(function(err) {
          alert('failed to request user information: ' + JSON.stringify(err));
        });
    },
    displayToken() {
      var token = this.getCookie('authorize-access-token');

      if (token) {
        Kakao.Auth.setAccessToken(token);
        document.querySelector('#token-result').innerText = 'login success, ready to request API';
        document.querySelector('button.api-btn').style.visibility = 'visible';
      }
    },
    getCookie(name) {
      var parts = document.cookie.split(name + '=');
      if (parts.length === 2) {
        return parts[1].split(';')[0];
      }
    }
  },
  mounted() {
    // Kakao javascript SDK 초기화
    window.Kakao.init('46d');
    // 여기에서 필요한 초기화 작업을 추가하세요.
    this.displayToken();
  },
}
</script>