import { useRef, useState } from 'react'
import styles from './EmailEditor.module.scss'
import {Eraser, Bold, Italic, Underline} from 'lucide-react'
import { applyStyle } from './apply-style';
import  parse  from 'html-react-parser';

export function EmailEditor() {
  const [text, setText  ] = useState(`
    Hey! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur 
    quisquam dolor consequatur velit illum? Quia aliquid expedita non nesciunt temporibus tempora odit pariatur inventore
    quisquam veritatis consectetur, ipsum dicta beatae!
  `)

  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const updateSelection = () =>{
    if(!textRef.current) return
      setSelectionStart(textRef.current.selectionStart)
      setSelectionEnd(textRef.current.selectionEnd)
  }

  const applyFormat = (type: TStyle) => {
   
    const selectedText = text.substring(selectionStart, selectionEnd);
   
    if(!selectedText) return 
   
    const before = text.substring(0, selectionStart);
   
    const after = text.substring(selectionEnd);
   
    setText(before + applyStyle(type, selectedText) + after)
    console.log(selectedText);
  }

  return (
    <>

      <div className={styles.card}>
      <div className={styles.preview}>{parse(text)}</div>

      <h1>Email Editor</h1>
        <textarea 
          ref={textRef}
          className={styles.editor} 
          spellCheck='false'
          onSelect={updateSelection} 
          value={text}
          onChange={(e) => setText(e.target.value)}          
        >
            {text}

        </textarea>
        <div className={styles.actions}>
            <div className={styles.tools}>
              <button onClick={()=> setText("")}><Eraser size={16} /></button>
              <button onClick={()=> applyFormat('bold')}><Bold size={16} /></button>
              <button onClick={()=> applyFormat('italic')}><Italic size={16} /></button>
              <button onClick={()=> applyFormat('underline')}><Underline size={16} /></button>

            </div>
            <button>Send Now</button>
        </div>
      </div>
    
    </>
  )
}


