const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert('할 일을 적어주세요 !');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); // list-container 안에 li 를 추가
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'; // x 곱하기 기호
        li.appendChild(span);
    }
    inputBox.value = ''; // 할 일을 추가 후 input-box 공백
    saveData(); // 할 일을 추가할때마다 saveData 함수를 호출
}

listContainer.addEventListener(
    'click',
    function (e) {
        // li 를 클릭한 경우 클릭한 위치를 확인
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked'); // 클릭된 li 의 checked 클래스를 추가
            saveData();

            // span 을 클릭한 경우 클릭한 위치를 확인
        } else if (e.target.tagName === 'SPAN') {
            e.target.parentElement.remove(); // span 이 클릭 됐을때 상위 요소를 제거
            saveData();
        }
    },
    false
);

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML); // list-container 안에 html 을 브라우저 로컬 스토리지에 data 저장
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data'); // 로컬 스토리지에 저장된 data 를 list-container 안에 추가
}

showTask(); // showTask 함수를 호출
