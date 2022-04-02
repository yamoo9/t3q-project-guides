import '@emotion/react';

// 참고: https://emotion.sh/docs/typescript
// 참고: https://www.typescriptlang.org/ko/docs/handbook/utility-types.html#recordkeystype
declare module '@emotion/react' {
  // 타입 Type의 프로퍼티 키의 집합으로 타입을 생성합니다.
  // 이 유틸리티는 타입의 프로퍼티를 다른 타입에 매핑 시키는데 사용될 수 있습니다.
  export interface Theme extends Record<string, any> {}
}
