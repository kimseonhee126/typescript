import { useState } from "react";

// 매개변수 props로 받는 타입을 지정하지 않았기 때문에
interface Props {
    onClickAdd: (text: string) => void;
}

const Editor = (props: Props) => {
    const [text, setText] = useState<string>("");
    
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const onClickButton = () => {
        props.onClickAdd(text);
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