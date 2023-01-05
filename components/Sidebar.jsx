import React from 'react'
import "./Sidebar.css"

const Sidebar = ({ 
  onAddNote,
  notes, 
  onDeleteNote,
  activeNote, 
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);

return (
  <div className="app-sidebar">
    <div className="app-sidebar-header">
      <h1>ノート</h1>
      <button onClick={onAddNote}>追加</button>
    </div>
    {/* ノートを表示 */}
    <div className="app-sidebar-notes">
      {sortedNotes.map((note) => (
        <div 
         className={`app-sidebar-note ${note.id === activeNote && "active"}`} //MAP関数で展開したnote.idを一つずつ見てる
         key={note.id} 
         onClick={() => setActiveNote(note.id)} //trueの時
         >
          <div className="sidebar-note-title">
            <strong>{note.title}</strong>
            {/* アロー関数にする事で押下時に発火するようにしている。なければリロードで発火してしまう。 */}
            <button onClick={() => onDeleteNote(note.id)}>削除</button>
          </div>
          <p>{note.content}</p>
          <small>{new Date(note.modDate).toLocaleDateString("ja-JP", {
            hour: "2-digit",
            minute: "2-digit",
          })}</small>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Sidebar