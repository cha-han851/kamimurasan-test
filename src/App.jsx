import './App.css'
import React, { useEffect, useState } from "react"
import Main from "../components/Main"
import Sidebar from "../components/Sidebar"
import uuid from "react-uuid"

function App() {

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    //ローカルストレージにノートを保存する
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    setActiveNote(notes[0].id);
  }, []);

  const onAddNote = () => {
    console.log("新しくノートが追加されました")
    const newNote = {
      id: uuid(),
      title: "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now(),
    }
    // 下記記述で要素を追加したことになる
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const onDeleteNote = (id) => {
    // idが一致しなければtrue 一致すればfalse フィルター関数でidが一致しない記事はtrueのため残す。
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  }

  const onUpdateNote = (updatedNote) => {
    //修正された新しいノートの配列を返す。
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });

    setNotes(updatedNotesArray);
  };


  return (
  // propsとして渡してあげる。
  // ノートのオブジェクトが入ってる
  <div className="App">
    <Sidebar onAddNote={onAddNote}
       notes={notes}
       onDeleteNote={onDeleteNote}
       activeNote={activeNote}
       setActiveNote={setActiveNote}
     />
    <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
  </div>
  );
}

export default App
