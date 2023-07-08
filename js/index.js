const inputId = localStorage.getItem('inputid');
const inputPw = localStorage.getItem('inputpw');
const manager = localStorage.getItem('Manage');
const id = localStorage.getItem('id');
const pw = localStorage.getItem('pw');
const login = localStorage.getItem('login');

const logouted = document.querySelector(".logout");
const stdManage = document.querySelector(".stdManage");
const register = document.querySelector(".register");
const mypage = document.querySelector('.mypage');
const userLogin = document.querySelector('.login');

//로그인이 되어있지 않는 경우

if(login == "0"){
  register.addEventListener('click', ()=>{
    document.location.href="./register.html";
  });

  logouted.addEventListener('click', ()=>{
    alert('로그인 후 사용 가능합니다.');
    document.location.href = "./login.html";
  });

  stdManage.addEventListener("click", ()=>{
    alert('로그인 후 사용 가능합니다.');
    document.location.href = "./login.html";
  });

  mypage.addEventListener('click', ()=>{
    alert('로그인 후 사용 가능합니다.');
    document.location.href="./login.html"
  });

  userLogin.addEventListener('click', ()=>{
    document.location.href="./login.html";
  });

}else{        //로그인이 되어있을 때,
  
  // 개발자 id, pw가 일치하는 경우
  if(inputId === id &&  inputPw === pw){
    
    stdManage.addEventListener("click", ()=>{
      document.location.href = "./stdManage.html";
    })

    logouted.addEventListener("click", ()=>{
      localStorage.setItem("login", 0);
    })

    mypage.addEventListener('click', ()=>{
      document.location.href="./mylib_inform.html"
    })
  
    userLogin.addEventListener('click', ()=>{
      alert('로그인이 되어있습니다.');
    })
  }
  //로그인이 되어있을 경우.
  else if(inputId != null && inputPw != null){
    stdManage.addEventListener("click", ()=>{
      alert("학생 관리 페이지는 관리자만 사용 가능합니다.");
    })  

    logouted.addEventListener("click", ()=>{
      localStorage.setItem("login", 0);
      window.location.reload();
      document.location.href="./index.html";
    })

    mypage.addEventListener('click', ()=>{
      document.location.href="./mylib_inform.html"
    })

    userLogin.addEventListener('click', ()=>{
      alert('사용자 로그인이 완료되어 있습니다.');
    })
  }
  
}