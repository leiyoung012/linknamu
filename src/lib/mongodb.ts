import { MongoClient } from "mongodb";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// 이 함수는 호출 시점에만 MONGODB_URI를 확인한다.
// 모듈을 import하는 것만으로는 절대 예외가 발생하지 않는다 (홈페이지 렌더링과 완전히 분리하기 위함).
export function getMongoClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable");
  }

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = new MongoClient(uri).connect();
    }
    return global._mongoClientPromise;
  }

  return new MongoClient(uri).connect();
}

export function getDbName(): string {
  return process.env.MONGODB_DB || "linknamu";
}
