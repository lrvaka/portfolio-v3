import { useRef } from "react"

export default function useArrayRef() {
  const refs = useRef([])
  refs.current = []
  return [refs, (ref) => ref && refs.current.push(ref)]
}
