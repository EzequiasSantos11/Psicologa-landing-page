import { Container } from "./styles"

type InputProps = {
  textInput?: string,
  type?: 'input' | 'textarea',
  textLabel?: string,
  InputHeight: string,
  InputWidth: string,
  cols?: number,
  rows?: number
}

export function InputComponent({
  textInput,
  type,
  textLabel,
  InputHeight,
  InputWidth,
  cols,
  rows
}: InputProps){
  return(
    <Container>
      <label>{textLabel}</label>
      <div className="input" style={{width: `${InputWidth}`, height: `${InputHeight}`}}>
        {type === 'input' ?
          (
            <input type={type} placeholder={textInput}/>
          )
          :
          (
            <textarea cols={cols} rows={rows}/>
          )
      }
      </div>
    </Container>
  )
}