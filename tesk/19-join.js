// 제출 이벤트를 받느다 (이벤트 핸들링)

// 제출된 입력 값들을 참조한다

// 입력값에 문제가 있는 경우 이를 감지한다

// 가입 환영 인사를 제공한다

const form = document.getElementById("form")

//익명함수 

form.addEventListener("submit", function(event){
    event.preventDefault() // 기존 기능 차단

    let userId = event.target.id.value
    let userpw1 = event.target.pw1.value
    let userpw2 = event.target.pw2.value
    let username = event.target.name.value
    let userphone = event.target.phone.value
    let userposition = event.target.position.value
    let usergender = event.target.gender.value
    let useremail = event.target.email.value
    let userintro = event.target.intro.value

    if(userId.length < 6){
        alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.")
        return
    }

    if(userpw1 !== userpw2){
        alert("비밀번호가 일치하지 않습니다.")
        return
    }

    document.body.innerHTML = ""
    document.write(`<p>${username}님 환영합니다 <br>
                         아이디 : ${userId}<br>
                         이름 : ${username}<br> 
                         전화번호:${userphone}<br>
                         원하는직무:${userposition}</p>`)

})