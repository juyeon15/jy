const gears = [
  {
    name: "스퍼 기어 (Spur Gear)",
    description: "가장 일반적인 기어로 평행 축 사이에 동력을 전달. 소음이 적고 제작이 쉬움.",
    usage: "기계식 시계, 컨베이어 벨트, 자동차 변속기",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MjZfMTE5%2FMDAxNjUwOTc2MzAwNjg1.qmFJvoxM7D252_FSGRO3zgfuAPbUR7kDDXop7wkXaxog.jAXKiIyRxneJ2RBY1ICBbckDtRGqopyjoapvTeBiGTkg.JPEG.fks7088%2F%25BD%25BA%25C6%25DB%25B1%25E2%25BE%25EE_3D.jpg&type=sc960_832"
  },
  {
    name: "헬리컬 기어 (Helical Gear)",
    description: "기어 이빨이 비스듬히 배치되어 부드럽고 조용한 작동이 가능.",
    usage: "고속 회전 기계, 차량 변속기, 산업용 장비",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA0MjRfNzIg%2FMDAxNTg3NzE5MTU3Mzg2.MqjP275uGBEyTXY-qva80713BNb9fS5qPsyKIh5YPK4g.zXRfoWMJPRjr4HhSePn81eLvWMGLXvwgBv1t3v34XJMg.PNG.seoilgear%2FCrossed-axis-helical-gears-Photograph-courtesy-of-Hinchliffe-Precision-Compo.png&type=sc960_832"
  },
  {
    name: "베벨 기어 (Bevel Gear)",
    description: "회전 방향을 90도로 변경할 때 사용. 원추형 모양.",
    usage: "드릴, 자동차 차동장치, 프린터",
    image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_259%2F20131101033901325_H79WIO1QN.gif%2F74483_1.gif%3Ftype%3Dm4500_4500_fst&type=sc960_832"
  },
  {
    name: "웜 기어 (Worm Gear)",
      description: "웜과 웜휠로 구성. 큰 감속비와 자기 잠금 기능이 있음.",
      usage: "엘리베이터, 리프트, 컨베이어 시스템",
      image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA2MjJfOTEg%2FMDAxNTYxMTgyMDYwMTgw.IIvzkwGi9-7SN5BeEKx2tpRXqvbdo3rG2Kwk-2nvXX0g.nQxky2HZNMFvJp_hHAiF3jrJM_FGpJGdv8yBqBg8Thcg.PNG.sjha24%2Fimage.png&type=sc960_832"
  },
  {
    name: "랙 앤 피니언 (Rack and Pinion)",
    description: "회전 운동을 직선 운동으로 변환.",
    usage: "자동차 조향 장치, 선반, CNC 기계",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDExMDhfMzYg%2FMDAxNzMxMDUwMDg4MjE3.s9ws-nAu9eh5ecwGLjveRgavW1HKq7S38cV4XebWU48g.Gsus3h9r7X1BSxcUUpOFz1MC7L6TqT_r0MVqtm5gNZMg.JPEG%2FDIN02.jpg&type=sc960_832"
  },
  {
    name: "내접 기어 (Internal Gear)",
    description: "기어가 내부로 물리는 구조. 콤팩트한 설계에 적합.",
    usage: "유성기어 시스템, 감속기",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA3MTJfOTgg%2FMDAxNzIwNzcyOTA2ODQ3.bIy-Fpq3hU2a8UJNaPQ8TEv9CuIBXhKT-9PS0M410IIg.ujR7yiydCkzcElNPawsuiN_R54lL1ZEEqCY2CESuJrAg.PNG%2F3.png&type=sc960_832"
  }
];

const container = document.getElementById('gear-container');

gears.forEach(gear => {
  const card = document.createElement('div');
  card.className = 'bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300';

  card.innerHTML = `
    <img src="${gear.image}" alt="${gear.name}" class="w-full h-48 object-cover">
    <div class="p-5">
      <h2 class="text-xl font-semibold text-green-600 mb-2">${gear.name}</h2>
      <p class="text-gray-700 text-sm mb-1"><strong>설명:</strong> ${gear.description}</p>
      <p class="text-gray-600 text-sm"><strong>용도:</strong> ${gear.usage}</p>
    </div>
  `;

  container.appendChild(card);
});
