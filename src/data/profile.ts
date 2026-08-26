export type ProfileLink = {
  id: string;
  label: string;
  description?: string;
  url: string;
};

// TODO: 실제 프로필 정보로 교체하세요.
export const profile = {
  name: "조각뉴스",
  bio: "세상의 뉴스를 알리다",
  avatarUrl: "/avatar.png",
};

// TODO: 실제 링크 목록으로 교체하세요. 카드 개수는 이 배열 길이에 따라 자동으로 늘어나거나 줄어듭니다.
export const links: ProfileLink[] = [
  { id: "youtube", label: "YouTube", description: "조각뉴스 유튜브 채널", url: "https://www.youtube.com/@New_%EC%A1%B0%EA%B0%81%EB%89%B4%EC%8A%A4" },
  { id: "naver-tv", label: "네이버 TV", description: "조각뉴스 채널", url: "https://tv.naver.com/news3pro" },
  { id: "blog", label: "블로그", description: "곧 만나요! 준비 중이에요 🚧", url: "https://blog.naver.com" },
];
