# 캣카오톡
 
![20240218_024454](https://github.com/whereisjw/p_talk/assets/139869491/bff08af4-3b11-4b7e-b041-843101bede9e)
 
- 🔗 서버레파지토리 링크 : https://github.com/whereisjw/p_talk_server.git


## 😺 프로젝트 소개
- 메신저 앱을 벤치마킹하여 구현한 사이트입니다.
- 웹소켓 방식으로 다른 유저들과 채팅을 할 수 있는 사이트입니다.
- HTML,CSS로 코딩입문시 만들었던 카카오톡 클론 웹사이트를 react로 마이그레이션하고 mysql,nodejs를 연결한 풀스택 웹개발을 하였습니다.
- 총 3가지 러시안 블루 이미지를 프로필 사진으로 변경/적용 할 수 있습니다.

</aside>

## 😺 팀원구성
- 풀스택엔지니어 / 참여인원1명

## 개발 환경
| 프론트엔드                                                                                                     | 백엔드                                                                                       |
|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| ![React](https://img.shields.io/badge/Reactjs-20232A?style=flat&logo=react&logoColor=61DAFB)               | ![Nodejs](https://img.shields.io/badge/Nodejs-339933?style=flat&logo=node.js&logoColor=white) |
| ![Styled-components](https://img.shields.io/badge/Styled--components-DB7093?style=flat&logo=styled-components&logoColor=white) | ![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat&logo=socket.io&logoColor=white) |
| ![Framer-motion](https://img.shields.io/badge/Framer--motion-0055FF?style=flat&logo=framer&logoColor=white) | ![Mysql](https://img.shields.io/badge/Mysql-4479A1?style=flat&logo=mysql&logoColor=white)    |

## 😺 주요 기능        
- 로그인, 회원가입(jwt,실시간 유효성 체크)
- Framer-motion 라이브러리를 활용한 각종 애니메이션 구현
- 웹소켓 방식의 실시간 채팅([socket.io](http://socket.io/) 라이브러리 사용)
- React, NodeJS를 적극 활용하여 풀스택 웹 개발을 해보고, Styled-component를 활용하여 협업을 대비한 CSS 사용을 연습

## 😺 상세설명
#### [회원가입/로그인]
- submit 이벤트시 유효성검사, 로그인 페이지로 이동시 애니메이션 적용
- 회원가입 성공시 로그인페이지로 이동
- 로그인 성공시 서비스 화면으로 이동

| 로그인                                                                                                   | 회원가입                                                                                       |
|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| ![녹화_2024_01_29_14_55_07_340](https://github.com/whereisjw/p_talk/assets/139869491/48f78548-ad6e-4d62-931e-c134e1a445b3)    | ![녹화_2024_01_29_14_57_41_67](https://github.com/whereisjw/p_talk/assets/139869491/40f77153-3ccf-483f-9ed7-dd2d3b3523ea)   | 




### [실시간채팅]
- socket.io 4버전을 사용한 실시간 채팅기능
- 시크릿 모드를 이용한 테스트 화면입니다.
- 웹소켓 방식의 실시간 양방향 소통가능
- 유저 입장시 framer-motion을 이용한 다이나믹한 입장알림

| 실시간채팅                                                                                                   |
|-------------------------------------------------------------------------------------------------------------|
|  ![녹화_2024_01_29_15_16_27_83](https://github.com/whereisjw/p_talk/assets/139869491/b6b9c493-ecc7-4d22-ba09-1de721251a1d)  | 


 


### [프로필 이미지 변경]
- 프로필 변경페이지에서 3가지의 고양이 사진 중 하나를 선택하여 변경 가능
- mysql과 nodejs를 연동하여 update 쿼리문으로 프로필 업데이트 기능 구현
- 변경 후 리스트페이지(회원 목록이 출력되는 페이지)에서 반영된 데이터 확인 가능

| 프로필 이미지 변경                                                                                                   |
|-------------------------------------------------------------------------------------------------------------|
| ![녹화_2024_01_29_15_20_53_199](https://github.com/whereisjw/p_talk/assets/139869491/f8ea954e-221d-4099-b8ab-2e5325a4b625) | 





