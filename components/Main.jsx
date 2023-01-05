import React from 'react'
import "./Main.css"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

const Main = ({ activeNote, onUpdateNote }) => {

  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote,
      id: activeNote.id,
      [key]: value,
      modDate: Date.now(),
    });
  };
  console.log(activeNote);
  if (activeNote == undefined) {
    return <div className="no-active-note">ノートが選択されていません</div>
  }
  // e.target.valueは、inputに入力する文字列
  // onChangeメソッドは、文字を入力する度に発火するメソッド　その為、文字を入力する度にonEditNote関数が実行される
  return(
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text"
        id="title"
        value={activeNote.title}
        onChange={(e) => onEditNote("title", e.target.value)}
        />
        <textarea
        id="content"
        placeholder='ノート内容を記入'
        value={activeNote.content}
        onChange={(e) => onEditNote("content", e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main