// src/styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      pallete: {
        splitComplementary: {
          primary: string;
          complementary: string;
          left: string;
          right: string;
        };
      };
    };
  }
}
