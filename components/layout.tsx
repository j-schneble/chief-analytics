import Container from '../components/Container/index'
import type { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Container />
      <main>{children}</main>
      <Container />
    </>
  )
}