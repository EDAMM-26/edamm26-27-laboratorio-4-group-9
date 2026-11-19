// ─── Práctica 4 · Receptor WebRTC ───────────────────────────────────────────
// Actividad 9: recibir el stream del canvas del emisor mediante PeerJS
// ────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from 'react'
import './App.css'

// TODO Actividad 9: importar Peer de peerjs
// import Peer from 'peerjs'

export default function Receiver() {
  const remoteVideoRef = useRef(null)
  const [peerId, setPeerId]   = useState('')
  const [status, setStatus]   = useState('Sin conexión')

  // ═════════════════════════════════════════════════════════════════════════
  // Actividad 9 · Crear Peer receptor y esperar llamada entrante
  // ═════════════════════════════════════════════════════════════════════════
  useEffect(() => {
    // TODO Actividad 9:
    // 1. const peer = new Peer()
    //
    // 2. peer.on('open', id => {
    //      setPeerId(id)
    //      setStatus('Esperando llamada…')
    //    })
    //
    // 3. peer.on('call', call => {
    //      call.answer()          // contestar sin enviar stream de vuelta
    //      setStatus('Llamada recibida, conectando…')
    //      call.on('stream', remoteStream => {
    //        remoteVideoRef.current.srcObject = remoteStream
    //        remoteVideoRef.current.play()
    //        setStatus('Recibiendo stream ✓')
    //      })
    //    })
    //
    // 4. return () => peer.destroy()

    return () => {}
  }, [])

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="app">
      <header className="app-header">
        <h1>EDAMM P3 · Receptor WebRTC</h1>
      </header>

      <div className="receiver-panel">
        <p>
          Estado: <strong>{status}</strong>
        </p>

        {/* TODO Actividad 9: mostrar el ID de este receptor para que el
            emisor lo introduzca en su campo "ID del receptor" */}
        {peerId ? (
          <p>
            Tu ID de receptor:{' '}
            <code style={{ userSelect: 'all', color: 'var(--accent)' }}>
              {peerId}
            </code>
          </p>
        ) : (
          <p style={{ color: 'var(--muted)' }}>
            (aquí aparecerá tu Peer ID cuando esté listo)
          </p>
        )}

        {/* Vídeo que mostrará el canvas remoto */}
        <video
          ref={remoteVideoRef}
          className="media-box"
          autoPlay
          playsInline
          muted
        />
      </div>
    </div>
  )
}
