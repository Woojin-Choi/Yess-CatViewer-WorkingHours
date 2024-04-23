# Yess-CatViewer-WorkingHours

### 디렉토리 구조
```
Yess-CatViewer-WorkingHours     
├─ public                                    
│  └─ ...               
├─ src                          
│  ├─ components                
│  │  └─ RangeInput.tsx         
│  ├─ pages                     
│  │  ├─ CatViewer.tsx          
│  │  └─ WorkingHours.tsx       
│  ├─ styles                    
│  │  ├─ CatViewerStyle.tsx     
│  │  ├─ RangeInputStyle.tsx    
│  │  └─ WorkingHoursStyle.tsx  
│  ├─ api.tsx                   
│  ├─ App.css                   
│  ├─ App.test.tsx              
│  ├─ App.tsx                   
│  ├─ config.tsx                
│  ├─ index.css                 
│  ├─ index.tsx                 
│  ├─ model.tsx                 
│  ├─ react-app-env.d.ts        
│  ├─ reportWebVitals.ts        
│  └─ setupTests.ts             
├─ package-lock.json            
├─ package.json                 
├─ README.md                    
└─ tsconfig.json                
```
---
### 기술 스택
- Typescript, React-query, Styled-components, ESLint, React-dropdown, Axios, React-icons
---
### 요구사항 체크 리스트
#### 과제1
- 메인 화면에 이미지를 그려주세요.
  - [x] 해당 레이아웃을 그려주는 다른 오픈소스 라이브러리의 사용 없이 직접 구현 해 주세요.
  - [x] 스크롤이 맨 아래로 내려가면 다음 로드 될 이미지 30개를 아래에 그립니다.
  - [x] 로드 된 이미지들은 위와 같이 각 열 안에서 각각의 비율에 맞게 그려집니다.
  - [x] 이미지들 사이의 간격은 항상 16px 입니다.
  - [x] 다음 이미지들이 새로 그려질 때, 이미 그려져 있던 이미지들의 레이아웃이 변경되지 않게 구현해 주세요.
  - [x] 다음 이미지를 참고하셔서 해당 순서대로 이미지가 그려지도록 구현해 주세요.
- 이미지 확대 기능을 구현해 주세요.
  - [x] 다른 라이브러리의 사용 없이 직접 구현 해 주세요.
  - [x] 이미지를 클릭하면 전체화면으로 이미지가 확대되어야 합니다.
  - [x] 확대된 이미지를 클릭하면 다시 원래의 사이즈로 돌아가야 합니다.
  - [ ] 이미지가 확대되고 축소될 때, 다음과 같이 부드럽게 전환시켜주세요.
- 화면의 너비에 따라 그려지는 모습이 달라지는 반응형 페이지를 만들어주세요.
  - [x] 이미지들은 최대 3열 레이아웃, 최소 1열 레이아웃으로 그려집니다.
  - [x] breakpoint 는 자유롭게 설정해 주세요.
  - [x] 3열 레이아웃의 최대 너비는 1200px 이며 화면 중앙에 위치해야 합니다.
- 에러 핸들링
  - [x] 이미지들을 서버로부터 가져오려 할 때, 서버측에서 에러를 Response 로 줄 경우에 대응하는 코드도 덧붙여 주세요.
  - [x] 에러가 발생했을 경우, 유저에게 어떻게 안내를 해 줄지 직접 결정하시고 코드로 옮겨주세요.
- 추가 UI/UX 개선
  - [ ] 해당 앱에서 개선점을 발견하셨다면, 자유롭게 개선해 주셔도 무방합니다.

#### 과제2
- 필수 요구사항
  - [x] 기본 레이아웃 구현
  - [x] 1. selector input 의 값을 변경할 수 있어야 합니다.
  - [ ] 2. range input을 추가할 수 있어야 합니다.
  - [ ] 3. range input을 삭제할 수 있어야 합니다.
  - [ ] range input을 전부 삭제하면 + 버튼만 표현되어야 합니다.
  - [ ] 4. selector input의 값을 변경하거나, range input을 추가/삭제하는 '변경사항'이 생긴 경우, Cancel 버튼과 Update 버튼이 표현되어야 합니다. 변경사항이 없는 경우에는 버튼이 보이지 않아야 합니다.
  - [ ] 5. Cancel 을 누르면 변경사항이 초기화되어야 합니다
  - [ ] 6. Update 를 누르면 변경사항이 저장되어야 합니다. 새고로침 하여 페이지를 새로 로드하면 저장된 데이터가 표현되어야 합니다.
- 선택 요구사항
  - [ ] range input 값 변경 시, 끝 시간이 시작 시간보다 이전이면 range input에 대한 error를 표현합니다.
  - [ ] input에 error가 존재하는 경우 update 버튼이 disabled 상태로 변경됩니다.
  - [ ] 추가적으로 개선하고 싶으신 부분이 있으면 자유롭게 하셔도 무방합니다.
