/**
 * 인덱스드 엑세스 타입
 */

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// Post에서 [] 안에 들어가는 값은 property(속성, 타입)이다
// 만약 Post의 author 타입에서 id 속성값을 가져오려면 Post['author']['id'] 로 가져오면 된다
function printAuthorInfo(author: PostList[number]['author']) {
  console.log(`${author.name} - ${author.id}`);
}

const post: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "김아무개",
    age: 25,
  },
};

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3];

type TupNum = Tup[number];
