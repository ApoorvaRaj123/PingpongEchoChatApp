import { useEffect, useRef, useState } from "react"


function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const sendMessage = () => {
    if(!socket) return;
    const message = inputRef.current?.value || "";
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080/");
    setSocket(ws);

    ws.onmessage = (event) => {
      alert(event.data);
    }
  },[])

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter your message..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
