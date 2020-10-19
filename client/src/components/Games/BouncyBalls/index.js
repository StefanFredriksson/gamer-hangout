import React, { useEffect, useContext } from 'react'
import './style.css'
import { ThemeContext } from '../../../Store'

let cx
let mx
let my
let circles = []
let first = false

function Circle (x, y, radius, dx, dy, color) {
  this.x = x
  this.y = y
  this.radius = radius
  this.minRadius = radius
  this.dx = dx
  this.dy = dy
  this.color = color
  this.maxRadius = 50

  this.draw = () => {
    cx.beginPath()
    cx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    cx.fillStyle = this.color
    cx.fill()
  }

  this.update = () => {
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx
    }

    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy
    }

    this.x += this.dx
    this.y += this.dy

    if (
      mx - this.x < 50 &&
      mx - this.x > -50 &&
      my - this.y < 50 &&
      my - this.y > -50
    ) {
      if (this.radius < this.maxRadius) {
        this.radius += 3
      }
    } else if (this.radius > this.minRadius) {
      if (this.radius - 3 <= 0) {
        this.radius = this.minRadius
      } else {
        this.radius -= 3
      }
    }

    this.draw()
  }
}

const animate = c => {
  window.requestAnimationFrame(animate)
  cx.clearRect(0, 0, window.innerWidth, window.innerHeight)

  for (let i = 0; i < circles.length; i++) {
    circles[i].update()
  }
}

const createCircle = (px = undefined, py = undefined) => {
  const radius = Math.random() * 29 + 1
  const x = !px ? Math.random() * (window.innerWidth - radius * 2) + radius : px
  const y = !py
    ? Math.random() * (window.innerHeight - radius * 2) + radius
    : py
  const dx = (Math.random() - 0.5) * 4
  const dy = (Math.random() - 0.5) * 4
  const blue = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const red = Math.floor(Math.random() * 255)
  circles.push(
    new Circle(x, y, radius, dx, dy, `rgba(${red}, ${green}, ${blue}, 0.7)`)
  )
}

const init = () => {
  circles = []
  const canvas = document.querySelector('#bouncy-canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  cx = canvas.getContext('2d')

  for (let i = 0; i < 0; i++) {
    createCircle()
  }
}

const getMousePos = event => {
  const canvas = document.querySelector('#bouncy-canvas')
  const rect = canvas.getBoundingClientRect()
  const scaleX = canvas.width / rect.width
  const scaleY = canvas.height / rect.height
  const x = (event.x - rect.left) * scaleX
  const y = (event.y - rect.top) * scaleY
  return { x, y }
}

const listeners = () => {
  if (first) {
    return
  }

  first = true

  let interval
  const canvas = document.querySelector('#bouncy-canvas')
  canvas.addEventListener('mousemove', function (event) {
    const pos = getMousePos(event)
    mx = pos.x
    my = pos.y
  })

  canvas.addEventListener('mouseleave', () => {
    mx = 1000000
    my = 1000000
    clearInterval(interval)
  })

  canvas.addEventListener('mousedown', event => {
    interval = setInterval(() => {
      createCircle(mx, my)
    }, 50)
  })

  canvas.addEventListener('mouseup', event => {
    clearInterval(interval)
  })

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    init()
  })
}

export default function Index () {
  const [theme] = useContext(ThemeContext)
  useEffect(() => {
    if (!first) {
      listeners()
      init()
      animate()
    }
  })
  return (
    <div id='bouncy-div'>
      <canvas
        className={theme ? 'light-canvas' : 'dark-canvas'}
        id='bouncy-canvas'
      />
    </div>
  )
}
