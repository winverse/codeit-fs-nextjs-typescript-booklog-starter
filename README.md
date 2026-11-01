# 북로그 starter

`Next.js에 TypeScript 적용하기` 토픽에서 TypeScript로 옮겨 갈 JavaScript Next.js 앱입니다. 책 목록·상세·메모·새 책 기록·이름 로그인이 이미 동작하며, 교재를 따라 파일을 하나씩 TypeScript로 바꿔 끝에는 모든 파일이 `.ts`·`.tsx`가 됩니다. 한 폴더에서 처음부터 끝까지 이어서 진행합니다.

## 준비

이 앱은 `codeit-fs-nextjs-typescript-booklog-api` 서버에서 데이터를 받습니다. 먼저 API 폴더에서 서버를 켭니다.

```bash
pnpm install
pnpm start
```

터미널에 `북로그 API: http://localhost:4000`이 보이면 이 폴더에서 앱을 실행합니다.

```bash
pnpm install
pnpm dev
```

브라우저에서 `http://localhost:3000`을 열면 책 카드 5개가 보입니다.

## 화면

| 주소          | 내용                                                      |
| ------------- | --------------------------------------------------------- |
| `/`           | 책 카드 목록과 상태 필터(`?status=wish`·`reading`·`done`) |
| `/books/[id]` | 책 정보, 메모 목록, 로그인했을 때 메모 추가 폼            |
| `/books/new`  | 새 책 기록 폼                                             |

## 폴더

- `src/app`: 라우트(`page.js`·`layout.js`)
- `src/components`: 여러 화면이 함께 쓰는 컴포넌트
- `src/features`: 책·메모 기능별 컴포넌트와 TanStack Query 훅
- `src/contexts`: 로그인 이름을 나누는 Context
- `src/providers`: QueryClient와 Context Provider
- `src/lib`: API 요청 함수, 쿼리 키, 날짜·별점 형식 함수
- `src/constants`: 읽기 상태 이름과 목록

TypeScript 패키지와 `tsconfig.json`은 아직 없습니다. 교재에서 설치하고 만듭니다.
