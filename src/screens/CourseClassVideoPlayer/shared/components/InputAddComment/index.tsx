import React, { useRef, useState } from "react";
import { ButtonAddComment, InputComment } from "./index.styles";

type InputAddCommentProps = {
	avatar ?: string;
	addComment : (props : {value:string}) => void
}
function InputAddComment({ avatar, addComment } : InputAddCommentProps) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [disabled, setDisabled] = useState(true);

	const onOpenInput = (value) => () => {
    setOpen(value);
  };
  const sendOnComment = () => {
		if(inputRef.current) {
				addComment({ value: inputRef.current.value });
				onOpenInput(false);
				inputRef.current.value = "";
				inputRef.current.focus();
		}
  };
  const onKeyUp = (e) => {
    setDisabled(!(e.target.value.trim().length >= 4));
	};
	console.log(avatar);
	
  if (open) {
    return (
      <InputComment.Wrapper>
        <InputComment.Input placeholder="Agregar comentario" onKeyUp={onKeyUp} ref={inputRef} autoFocus />
        <div className="options__button">
          <InputComment.Button onClick={onOpenInput(false)}>
            CANCELAR
          </InputComment.Button>
          <InputComment.Button primary disabled={disabled} onClick={sendOnComment}>
            COMENTAR
          </InputComment.Button>
        </div>
      </InputComment.Wrapper>
    );
  }

  return (
    <ButtonAddComment.Wrapper onClick={onOpenInput(true)}>
      <ButtonAddComment.Avatar image={avatar} />
      Escribir un comentario
    </ButtonAddComment.Wrapper>
  );
}

export default InputAddComment;
