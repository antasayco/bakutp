declare module '*.graphql' {
  import {DocumentNode} from 'graphql';

  const value: DocumentNode;
  export = value;
}
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        DATABASE_URL: string;
      }
    }
}
