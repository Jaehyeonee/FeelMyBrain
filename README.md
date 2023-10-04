# FeelMyBrain
***
뇌파 EEG 데이터로 집중도 자동 분석을 통한 스터디 타이머 Web-application
## 기능
1. 집중도 하락 시, 음악 볼륨 높이기 및 경고음 생성
2. 집중도 상승 시, 음악 볼륨 줄이기
3. 공부시간 동안의 집중도 시각화로 순공부시간 확인 기능

## 분석 데이터
원본 데이터인 시계열 데이터로 Power Ratio를 구할 수 없었으므로, FFT(빠른 푸리에 변환)을 통해 주파수 데이터로 변환함

다음 공식에 따라 집중도를 측정함

	집중도 = (SMR파 + mid Beta파) / Theta파

<img width="296" alt="그림1" src="https://github.com/Jaehyeonee/streamlit-demo/assets/92504386/d3a02164-5c8e-423f-ae2f-be56afdbe020"> 
<img width="297" alt="그림주파수" src="https://github.com/Jaehyeonee/streamlit-demo/assets/92504386/7c243d74-1480-45c5-9e95-34930bfa8204">


<img width="940" alt="스크린샷 2023-10-04 오후 2 17 54" src="https://github.com/Jaehyeonee/streamlit-demo/assets/92504386/fd1ee785-4bae-4f69-9064-2a2f40cbe404">
<img width="920" alt="스크린샷 2023-10-04 오후 2 16 57" src="https://github.com/Jaehyeonee/streamlit-demo/assets/92504386/5df40da5-3e50-4aa6-a38e-8c169e7cc2d0">
<img width="920" alt="스크린샷 2023-10-04 오후 2 17 08" src="https://github.com/Jaehyeonee/streamlit-demo/assets/92504386/d2c85b89-92b8-4d12-92e7-9fe3f2cde832">





###### EEG데이터 측정기는 뇌파측정 BCI기기 'Muse2'를 사용
