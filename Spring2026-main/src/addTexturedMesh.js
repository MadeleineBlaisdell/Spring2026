import * as THREE from 'three'

export function addTexturedMesh() {
	// const geometry = new THREE.SphereGeometry(1, 256, 256)
    const color = TextureLoader.load('/color.png')
    const normal = TextureLoader.load('/normal.png')
    const displace = TextureLoader.load('/displace.png')
    const ao = TextureLoader.load('/ao.png')
    const geometry = new THREE.SphereGeometry(1,256,256)

    geometry.setAttribute('uv2',new THREE.BufferAttribute(geometry.attributes.uv.array,2))
	const material = new THREE.MeshPhysicalMaterial({
        map: color,
        aoMap: ao,
        aoMapIntensity: 5,
        normalMap: normal,
		emissive: 0x0000ff,
        displacementMap: displace,
        displacementScale: 0.3,
		emissiveIntensity: 1,
		metalness: 0.1,
		roughness: 0,
		transimission: 0.5,
		ior: 2.33,
	})
	const mesh = new THREE.Mesh(geometry, material)
	return mesh
    
}