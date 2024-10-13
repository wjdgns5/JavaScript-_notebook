function showLocation() {
    let locationInfo = window.location.href;
    window.document.getElementById('info').textContent = `현재 URL : ${locationInfo}`;
}

function showNavigator() {
    let Navigator = window.navigator.userAgent;
    window.document.getElementById('info').textContent = `현재 브라우저 정보 ${Navigator}`;
}

function openWindow() {
    let opens = window.open("http://www.naver.com", "_blank", "width=300, height=300");
}