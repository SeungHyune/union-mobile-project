# union-mobile-project
.env 파일을 생성한 후 아래 코드를 작성해야 정상 실행됩니다.
```
NEXT_PUBLIC_API_BASE_URL=https://api-wmu-dev.angkorcoms.com
```

<br/>

## 로그인 페이지 (/login)

- ID를 입력받아 로그인할 수 있습니다.
- ID는 **영문+숫자 조합만 가능**하며, **3글자 이상 16글자 이하**로 이루어져야 합니다.
    - 유효성에 통과하지 못한 경우 로그인에 실패하며, 어떤 이유로 실패했는지 `ErrorMessage`를 통해 확인이 가능합니다.
        - `ErrorMessage`는 Login Input 아래 공간에 출력됩니다.
- 로그인이 성공한 경우 로그인 아이디를 `locaslStorage`, `cookie`에 저장합니다.
    - 로그인이 완료되면 **자동으로 메인 페이지(/)로 이동**됩니다.

<br/>

## 메인 페이지 (/)

- 로그인 페이지, 메인 페이지의 포스터 이미지가 동일하여 `MainBanner` 컴포넌트를 통해 재사용하였습니다.
    - 이미지를 그대로 사용하지 않고 tiara 이미지만 잘라내어 텍스트를 마크업 했습니다.
- 타이머 기능을 개발했습니다.
    - **특정 DDay 날짜를 설정**하면 DDay 날짜까지 남은 `day, hour, min, second`를 반환해 줍니다.
- `CandidateList`를 컴포넌트를 통해 모든 후보자들을 확인할 수 있습니다.
    - ~~`useQuery`를 통해 모든 데이터를 한 번에 패칭 받습니다.~~
        - `useInfiniteQuery`를 통해 **무한 스크롤 기능으로 구현**했습니다.
        - 데이터 패칭 한 번에 **지정한 size 만큼 데이터를 호출**합니다.
        - 데이터의 마지막 지점에 도달하면 다음 데이터를 불러옵니다. (추가로, 지정한 size 데이터를 불러옵니다.)
        - 만약, 모든 데이터를 호출했다면, 더 이상 데이터를 호출하지 않습니다.
    - 후보자에게 투표할 수 있으며, **투표를 완료한 경우 완료** `ConfirmModal`이 출력됩니다.
    - 반대로, **이미 3명 이상의 후보자에게 투표를 완료**했다면 `“최대 3명까지만 투표할 수 있습니다”`라는 `ConfirmModal`이 출력됩니다.
    - 투표를 완료한 경우 메인 페이지, 후보자 프로필 페이지에서 모두 투표한 상태로 변경되며, 투표수로 증가합니다.
- 후보자를 클릭하면 후보자의 프로필 페이지로 이동합니다. (`/profile/[후보자ID]`)
    - 투표 버튼 이외의 영역을 클릭하면 이동되도록 작업했습니다.

<br/>

## 프로필 페이지 (/profile/[id])

- 프로필 이미지 슬라이드 기능을 개발했습니다.
    - 후보자의 프로필 이미지 수만큼 슬라이드 할 수 있습니다.
    - `마우스(PC)`, `터치(모바일)`을 통해 **좌, 우 페이지 전환**이 가능합니다.
    - `useAutoSlide hook`을 통해 **특정 시간(3000ms)마다 자동으로 다음 페이지로 전환**되도록 구현했습니다.
        - 만약 **마지막 페이지인 경우에는 1페이지로 되돌아오도록 구현**했습니다.
    - 프로필 이미지 영역 내의 `circle`을 클릭하면 해당 프로필 이미지 **페이지로 이동되도록 구현**했습니다.
        - 1번째 circle ⇒ 1페이지
        - 2번째 circle ⇒ 2페이지
- 프로필 페이지에서도 메인 페이지의 `CandidateList` 컴포넌트에서 사용된 `VoteButton` 컴포넌트를 사용했습니다. (재사용)
    - 메인 페이지와 동일하게 투표를 성공적으로 완료한 경우 “투표를 성공적으로 완료했습니다”라는 ConfirmModal이 출력됩니다.
    - 투표를 이미 3명 이상 완료한 경우 “최대 3명까지만 투표할 수 있습니다”라는 ConfirmModal이 출력됩니다.
    - `이미 투표한 후보자`의 경우 **더 이상 투표하지 못하도록 disabled 처리**했습니다.

<br/>

## 공통 구현사항

- `Header` 컴포넌트를 **사용하는 페이지에서 Header를 구성할 수 있도록 작업**했습니다.
    - `title`의 텍스트와 `left`, `right`의 아이콘 컴포넌트를 자유롭게 추가할 수 있도록 작업했습니다.
    - 기본적으로 `left 아이콘`은 **뒤로 가기 버튼(`PrevButton`)**, `right 아이콘`은 **로그아웃 버튼(`LogoutButton`)**
    - **`로그아웃 버튼`을 누르면 `localStorage`, `cookie`에서 로그인 정보를 제거**하며, **`/login` 페이지로 강제 이동**됩니다.
- `middleware`를 통해 **로그인을 해야만 접근 가능한 URL에 접근한 경우 로그인 여부를 판단**하여 로그인 되어 있지 않다면, 로그인 페이지로 강제 이동시킵니다.
    - 로그인이 되어있다면 해당 페이지 가능합니다.
- 전역 `error.tsx` 파일을 통해 오류 발생 시 `다시 시도`, `홈페이지로 이동` 가능하도록 전역 에러 바운더리를 만들었습니다.
