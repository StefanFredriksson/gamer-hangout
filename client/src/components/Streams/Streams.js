import React, { useContext, useState } from 'react'
import './Streams.css'
import { ThemeContext } from '../../Store'
import Hls from 'hls.js'

let mediaRecorder = null
let chunks = []

export default function Streams () {
  const [theme] = useContext(ThemeContext)
  const [startRec, setStartRec] = useState(true)
  const [stopRec, setStopRec] = useState(true)

  const playStream = event => {
    const src = document.querySelector('#stream-src-input').value
    const video = document.querySelector('#stream-video')
    if (Hls.isSupported()) {
      const h = new Hls()
      h.loadSource(src)
      h.attachMedia(video)
      h.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play()
      })
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
      video.addEventListener('canplay', () => {
        video.play()
      })
    }

    video.addEventListener('loadedmetadata', initRecorder)
  }

  const initRecorder = event => {
    console.log('hi')
    const video = document.querySelector('#stream-video')
    const options = {
      mimeType: 'video/webm',
      videoBitsPerSecond: 3000000
    }
    let stream = null

    if (navigator.userAgent.indexOf('Firefox') > -1) {
      stream = video.mozCaptureStream(25)
    } else {
      stream = video.captureStream(25)
    }

    console.log(stream)
    mediaRecorder = new MediaRecorder(stream, options)
    console.log(mediaRecorder)
    setStartRec(false)

    mediaRecorder.ondataavailable = e => {
      console.log('new data available')
      chunks.push(e.data)
      console.log(chunks)
    }

    mediaRecorder.onstop = e => {
      const blob = new window.Blob(chunks, { type: 'video/webm' })
      const a = document.querySelector('#download-tag')
      a.href = window.URL.createObjectURL(blob)
      a.download = 'test.webm'
      a.click()
      chunks = []
    }
  }

  const startRecording = event => {
    mediaRecorder.start()
    console.log(mediaRecorder.state)
    console.log('recorder started')
    setStartRec(true)
    setStopRec(false)
  }

  const stopRecording = event => {
    mediaRecorder.stop()
    setStartRec(false)
    setStopRec(true)
    console.log(mediaRecorder.state)
    console.log('recorder stopped')
  }

  return (
    <div id='main-stream-div'>
      <div id='src-selection'>
        <input
          id='stream-src-input'
          className={theme ? 'light-src-input' : 'dark-src-input'}
          type='text'
          placeholder='Enter stream src...'
        />
        <button id='src-btn' className='stream-btn' onClick={playStream}>
          Play stream
        </button>
      </div>
      <video id='stream-video' controls muted />
      <div id='rec-div'>
        <button
          id='start-rec-btn'
          className='stream-btn'
          onClick={startRecording}
          disabled={startRec}
        >
          Start Recording
        </button>
        <a id='download-tag' href='#' />
        <button
          id='stop-rec-btn'
          className='stream-btn'
          onClick={stopRecording}
          disabled={stopRec}
        >
          Stop Recording
        </button>
      </div>
    </div>
  )
}
