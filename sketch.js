let canvas;
let slider1, slider2, slider3, slider4, slider5;
let slider6, slider7, slider8, slider9, slider10;
let slider11, slider12, slider13, slider_14, slider15;
let slider16, slider17, slider18, slider19, slider20;


function setup() {
  canvas = createCanvas(500, 500);
  canvas.parent('canvas');
  
  rectMode(CENTER);
  angleMode(DEGREES);

  slider1 = createSlider(-360, 360, 180); //min, max, start
  slider1.parent('slider1')

  slider2 = createSlider(-360, 360, 40);
  slider2.parent('slider1')

  slider3 = createSlider(-360, 360, 180);
  slider3.parent('slider1')

  slider4 = createSlider(-300, 300, 180);
  slider4.parent('slider1')
  
  slider5 = createSlider(-360, 360, 180);
  slider5.parent('slider1')

  slider6 = createSlider(-360, 360, 0);
  slider6.parent('slider2')

  slider7 = createSlider(-360, 360, 0);
  slider7.parent('slider2')

  slider8 = createSlider(-360, 360, 0);
  slider8.parent('slider2')

  slider9 = createSlider(-360, 360, 0);
  slider9.parent('slider2')

  slider10 = createSlider(-360, 360, 0);
  slider10.parent('slider2')

  slider11 = createSlider(0, 100, 0);
  slider11.parent('slider3')

  slider12 = createSlider(0, 100, 10);
  slider12.parent('slider3')

  slider13 = createSlider(0, 100, 10);
  slider13.parent('slider3')

  slider14 = createSlider(0, 200, 10);
  slider14.parent('slider3')

  slider15 = createSlider(0, 200, 10);
  slider15.parent('slider3')

  slider16 = createSlider(0, 360, 10);
  slider16.parent('slider4')

  slider17 = createSlider(0, 360, 50);
  slider17.parent('slider4')

  slider18 = createSlider(0, 360, 90);
  slider18.parent('slider4')

  slider19 = createSlider(0, 360, 130);
  slider19.parent('slider4')

  slider20 = createSlider(0, 360, 170);
  slider20.parent('slider4')

  const sliders = [slider1, slider2, slider3, slider4, slider5,
    slider6, slider7, slider8, slider9, slider10,
    slider11, slider12, slider13, slider14, slider15,
    slider16, slider17, slider18, slider19, slider20];

    sliders.forEach(slider => {
      slider.size(100, 15); //width height
      slider.class('slider-custom');
      slider.input(saveSliderValues); // 슬라이더 값 변경 시마다 저장
  });
}


function draw() {
  background(270);
  translate(width/2, height/2); //좌표계 이동
  noStroke();

  let s1 = slider1.value();
  let s2 = slider2.value();
  let s3 = slider3.value();
  let s4 = slider4.value();
  let s5 = slider5.value();
  let s6 = slider6.value();
  let s7 = slider7.value();
  let s8 = slider8.value();
  let s9 = slider9.value();
  let s10 = slider10.value();
  let s11 = slider11.value();
  let s12 = slider12.value();
  let s13 = slider13.value();
  let s14 = slider14.value();
  let s15 = slider15.value();
  let s16 = slider16.value();
  let s17 = slider17.value();
  let s18 = slider18.value();
  let s19 = slider19.value();
  let s20 = slider20.value();
  

  colorMode(HSB);

  fill(s16, 100, 80);
  push();
  rotate(s6);
  stroke(s16, 100, 100);
  strokeWeight(s11);

  rect(100, 100, s1, s1);
  rect(-100, 100, s1, s1);
  rect(100, -100, s1, s1);
  rect(-100, -100, s1, s1);

  fill(s16+20, 100, 100);
  rect(200, 200, s1, s1);
  rect(-200, 200, s1, s1);
  rect(200, -200, s1, s1);
  rect(-200, -200, s1, s1);

  fill(360-s16, 100, 100);
  rect(0,0, s1, s1);
  rect(-220, 0, s1-50, s1-50);
  rect(220, 0, s1-50, s1-50);
  rect(0, 220, s1-50, s1-50);
  rect(0, -220, s1-50, s1-50);
  pop();

  fill(s17, 50, 100);
  push();
  rotate(s7);
  stroke(s17-50, 80, 80);
  strokeWeight(s12);

  ellipse(50, 50, s2, s2); // 중심x, y, w, h, detail
  ellipse(-50, 50, s2, s2);
  ellipse(50, -50, s2, s2);
  ellipse(-50, -50, s2, s2);

  ellipse(130, 100, s2, s2);
  ellipse(0, 150, s2, s2);
  ellipse(-130, 100, s2, s2);
  ellipse(-150, 0, s2, s2);
  ellipse(-130, -100, s2, s2);
  ellipse(0, -150, s2, s2);
  ellipse(130, -100, s2, s2);
  ellipse(150, 0, s2, s2);

  fill(360-s17, 50, 100);
  ellipse(220, 220, s2-30, s2-30);
  ellipse(220, -220, s2-30, s2-30);
  ellipse(-220, -220, s2-30, s2-30);
  ellipse(-220, 220, s2-30, s2-30);

  fill(s17+30, 80, 100);
  ellipse(0, 0, s2-10, s2-10);
  pop();

  push();
  rotate(s9);
  stroke(s19+20, 100, 100, 0.5);
  strokeWeight(s14);

  fill(s19+20, 100, 80)
  ellipse(240, 120, s4*2, s4);
  ellipse(-240, -120, s4*2, s4);
  ellipse(240, -120, s4, s4*2);
  ellipse(-240, 120, s4, s4*2);

  fill(s19+20, 100, 100)
  ellipse(190, 250, 40, s4);
  ellipse(130, 250, 40, s4);
  ellipse(70, 250, 40, s4);

  ellipse(-190, 250, 40, s4);
  ellipse(-70, 250, 40, s4);

  ellipse(190, -250, 40, s4);
  ellipse(130, -250, 40, s4);
  ellipse(70, -250, 40, s4);

  ellipse(-190, -250, 40, s4);
  ellipse(-130, -250, 40, s4);
  ellipse(-70, -250, 40, s4);

  fill(360-s19, 100, 100)
  ellipse(-160, -200, 40, s4);
  ellipse(-100, -200, 40, s4);
  ellipse(160, -200, 40, s4);
  ellipse(100, -200, 40, s4);
  ellipse(-160, 200, 40, s4);
  ellipse(-100, 200, 40, s4);
  ellipse(160, 200, 40, s4);
  ellipse(100, 200, 40, s4);
  pop();

  fill(s20, 100, 100);
  push();
  rotate(s10);
  stroke(360, 0, 100, 0.3);
  strokeWeight(s15);

  rect(220, 100, 10, s5);
  rect(100, 220, s5, 10);
  rect(-220, 100, 10, s5);
  rect(-100, 220, s5, 10);
  rect(-220, -100, 10, s5);
  rect(-100, -220, s5, 10);
  rect(220, -100, 10, s5);
  rect(100, -220, s5, 10);
  pop();

  fill(s18, 100, 100);
  push();
  rotate(s8);
  stroke(s18-20, 100, 100, 0.3);
  strokeWeight(s13);

  triangle(80, 50, 50, 80, s3, s3);
  triangle(-50, -80, -s3, -s3, -80, -50);
  triangle(50, -80, s3, -s3, 80, -50);
  triangle(-80, 50, -s3, s3, -50, 80);
  
  triangle(0, -s3-50, -10, -180, 10, -180);
  triangle(0, s3+50, -10, 180, 10, 180); //남
  triangle(-180, -10, -180, 10, -s3-50, 0);
  triangle(180, -10, 180, 10, s3+50, 0); // 동 서
  pop();
  
  

}

function saveImage() {
  // 캔버스를 이미지 data로 변환
  const dataURL = canvas.elt.toDataURL();
  const selectedFood = document.getElementById('food-select').value; // 사용자가 선택한 음식 값 가져오기

  let savedImages = JSON.parse(localStorage.getItem('canvasImages')) || [];

  // 새로운 이미지와 food 값을 객체로 저장
  savedImages.push({ data: dataURL, food: selectedFood });

  localStorage.setItem('canvasImages', JSON.stringify(savedImages));

  window.location.href = 'index3.html';
}

function saveSliderValues() {
  const sliderValues = [
      slider1.value(), slider2.value(), slider3.value(), slider4.value(), slider5.value(),
      slider6.value(), slider7.value(), slider8.value(), slider9.value(), slider10.value(),
      slider11.value(), slider12.value(), slider13.value(), slider14.value(), slider15.value(),
      slider16.value(), slider17.value(), slider18.value(), slider19.value(), slider20.value()
  ];

  // JSON 문자열로 변환하여 localStorage에 저장
  localStorage.setItem('sliderValues', JSON.stringify(sliderValues));
}

function saveData() {
  const selectElement = document.getElementById("food-select");
  const food = selectElement.options[selectElement.selectedIndex].text;
  const comment = document.getElementById("comment").value;
  localStorage.setItem("selectedFood", food);
  localStorage.setItem("userComment", comment);
  window.location.href = 'index3.html';
}

let timeout; // 타이머 변수

    function resetTimer() {
        clearTimeout(timeout); // 기존 타이머 초기화
        timeout = setTimeout(() => {
            window.location.href = "index.html"; // 이동할 페이지 설정
        }, 40000); // 30초 (30000ms) 동안 아무 행동 없으면 이동
    }

    // 이벤트 리스너 추가 (사용자가 움직이면 타이머 리셋)
    document.addEventListener("mousemove", resetTimer);
    document.addEventListener("keydown", resetTimer);
    document.addEventListener("click", resetTimer);
    document.addEventListener("scroll", resetTimer);

    // 페이지 로드 시 타이머 시작
    resetTimer();
