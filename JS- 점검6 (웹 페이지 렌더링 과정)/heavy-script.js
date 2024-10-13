window.addEventListener('load', function() {

    console.log('start script....');

    // js 현재 시간 정보 객체 --> Date
    let startTime = new Date().getTime();
    let delay = 6000;

    while(new Date().getTime() < startTime + delay) {
        console.log("대기중...");
    }

    console.log('end script....');
});