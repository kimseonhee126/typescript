import { useState } from "react";
import { useTodoDispatch } from "../App";

// 매개변수 props로 받는 타입을 지정하지 않았기 때문에
interface Props {
  // onClickAdd 함수를 전달하는데, 매개변수 타입은 string이고 함수의 반환 타입은 void이다
  // onClickAdd: (text: string) => void;
}

const Editor = (props: Props) => {
  const dispatch = useTodoDispatch();

  const [text, setText] = useState<string>("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch?.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
};

export default Editor;
