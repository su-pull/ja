import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const ModelViewer = () => {
  const mount = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scene = new THREE.Scene()
    scene.background = null
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(600, 400)
    mount?.current?.appendChild(renderer.domElement)

    const loader = new GLTFLoader()
    loader.load('/alum.gltf', gltf => {
      scene.add(gltf.scene)
    })

    const light = new THREE.PointLight(0xffffff, 1, 100)
    light.position.set(0, 0, 10)
    scene.add(light)

    const controls = new OrbitControls(camera, renderer.domElement)
    camera.position.set(0, 0, 5)
    controls.update()

    const animate = () => {
      requestAnimationFrame(animate)

      renderer.render(scene, camera)
    }

    animate()
  }, [])

  return <div ref={mount} />
}

export default ModelViewer
